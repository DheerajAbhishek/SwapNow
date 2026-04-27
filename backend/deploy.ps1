$ErrorActionPreference = "Stop"

Write-Host "Creating DynamoDB Table: SWAPNOW_Users..."
try {
    aws dynamodb create-table `
        --table-name SWAPNOW_Users `
        --attribute-definitions AttributeName=email, AttributeType=S `
        --key-schema AttributeName=email, KeyType=HASH `
        --billing-mode PAY_PER_REQUEST | Out-Null
    Write-Host "Table created successfully!"
}
catch {
    Write-Host "Table might already exist, moving on."
}

Write-Host "Creating IAM Role for Lambda..."
$trustPolicy = @'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
'@
$trustPolicy | Out-File -FilePath trust-policy.json -Encoding utf8

try {
    $roleJson = aws iam create-role `
        --role-name swapnow-lambda-role `
        --assume-role-policy-document file://trust-policy.json 
    
    aws iam attach-role-policy `
        --role-name swapnow-lambda-role `
        --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess | Out-Null

    aws iam attach-role-policy `
        --role-name swapnow-lambda-role `
        --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole | Out-Null
        
    Write-Host "Role created successfully. Waiting 10 seconds for IAM propagation..."
    Start-Sleep -Seconds 10
}
catch {
    Write-Host "Role might already exist, attaching policies to be safe."
    aws iam attach-role-policy --role-name swapnow-lambda-role --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess | Out-Null
    aws iam attach-role-policy --role-name swapnow-lambda-role --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole | Out-Null
}

$roleArn = (aws iam get-role --role-name swapnow-lambda-role | ConvertFrom-Json).Role.Arn
Write-Host "Role ARN: $roleArn"

Write-Host "Packaging Lambda..."
Push-Location .\lambda
npm install
if (Test-Path function.zip) { Remove-Item function.zip }
Compress-Archive -Path * -DestinationPath function.zip

Write-Host "Deploying Lambda function..."
try {
    aws lambda create-function `
        --function-name SwapNowAuth `
        --zip-file fileb://function.zip `
        --handler auth.handler `
        --runtime nodejs18.x `
        --role $roleArn `
        --environment "Variables={USERS_TABLE=SWAPNOW_Users}" | Out-Null
    Write-Host "Lambda created!"
}
catch {
    Write-Host "Lambda might already exist. Updating function code..."
    aws lambda update-function-code `
        --function-name SwapNowAuth `
        --zip-file fileb://function.zip | Out-Null
    Write-Host "Function code updated."
}

Write-Host "Setting up API Gateway (HTTP API)..."
try {
    # Get current AWS account and region
    $accountId = (aws sts get-caller-identity | ConvertFrom-Json).Account
    $region = $(aws configure get region)
    if (-not $region) { $region = "us-east-1" }
    
    $lambdaArn = "arn:aws:lambda:${region}:${accountId}:function:SwapNowAuth"
    
    Write-Host "Lambda ARN is: $lambdaArn"
    
    $apiInfo = aws apigatewayv2 create-api `
        --name "SwapNowHttpApi" `
        --protocol-type HTTP `
        --target $lambdaArn `
        --cors-configuration 'AllowOrigins="*",AllowMethods="*",AllowHeaders="Content-Type,Authorization"' | ConvertFrom-Json
        
    aws lambda add-permission `
        --function-name SwapNowAuth `
        --action lambda:InvokeFunction `
        --statement-id ApiGatewayInvokePermission `
        --principal apigateway.amazonaws.com `
        --source-arn "arn:aws:execute-api:${region}:${accountId}:$($apiInfo.ApiId)/*/*" | Out-Null

    Write-Host "`n>>> DEPLOYMENT SUCCESSFUL <<<"
    Write-Host "Your Backend API Gateway URL is:"
    Write-Host $apiInfo.ApiEndpoint
    Write-Host "Add this to your frontend code / .env as VITE_API_URL!"
}
catch {
    Write-Host "API or Permission might already exist. Ensure you get info from AWS console."
    Write-Host $_.Exception.Message
}

Pop-Location
