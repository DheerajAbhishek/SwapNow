$ErrorActionPreference = "Continue"

Write-Host "1. Ensure Table Exists"
try {
    aws dynamodb create-table --table-name SWAPNOW_Users --attribute-definitions AttributeName=email,AttributeType=S --key-schema AttributeName=email,KeyType=HASH --billing-mode PAY_PER_REQUEST | Out-Null
} catch {}

Write-Host "2. Create Trust Policy"
$trustPolicy = '{"Version": "2012-10-17","Statement": [{"Action": "sts:AssumeRole","Principal": {"Service": "lambda.amazonaws.com"},"Effect": "Allow"}]}'
[System.IO.File]::WriteAllText("$PWD\trust-policy.json", $trustPolicy, [System.Text.Encoding]::ASCII)

Write-Host "3. Create IAM Role"
try {
    aws iam create-role --role-name swapnow-lambda-role --assume-role-policy-document file://trust-policy.json | Out-Null
} catch {}

Write-Host "4. Attach Policies"
aws iam attach-role-policy --role-name swapnow-lambda-role --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess | Out-Null
aws iam attach-role-policy --role-name swapnow-lambda-role --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole | Out-Null

$roleInfo = aws iam get-role --role-name swapnow-lambda-role | ConvertFrom-Json
$roleArn = $roleInfo.Role.Arn

Write-Host "5. Package Lambda"
Push-Location .\backend\lambda
npm install
if (Test-Path function.zip) { Remove-Item function.zip }
Compress-Archive -Path * -DestinationPath function.zip

Write-Host "6. Waiting 10s for IAM propagation..."
Start-Sleep -Seconds 10

Write-Host "7. Create/Update Lambda"
try {
    aws lambda create-function --function-name SwapNowAuth --zip-file fileb://function.zip --handler auth.handler --runtime nodejs18.x --role $roleArn --environment "Variables={USERS_TABLE=SWAPNOW_Users}" | Out-Null
} catch {
    aws lambda update-function-code --function-name SwapNowAuth --zip-file fileb://function.zip | Out-Null
    aws lambda update-function-configuration --function-name SwapNowAuth --environment "Variables={USERS_TABLE=SWAPNOW_Users}" | Out-Null
}

Write-Host "8. Enable Function URL"
try {
    aws lambda create-function-url-config --function-name SwapNowAuth --auth-type NONE --cors AllowOrigins="*",AllowMethods="*",AllowHeaders="*" | Out-Null
    aws lambda add-permission --function-name SwapNowAuth --action lambda:InvokeFunctionUrl --statement-id FunctionURLAllowPublicAccess --principal "*" --function-url-auth-type NONE | Out-Null
} catch {}

$urlInfo = aws lambda get-function-url-config --function-name SwapNowAuth | ConvertFrom-Json

Write-Host "`n========================"
Write-Host "DEPLOYMENT COMPLETE!"
Write-Host "Your Function URL is:"
Write-Host $urlInfo.FunctionUrl
Write-Host "========================"

Pop-Location
