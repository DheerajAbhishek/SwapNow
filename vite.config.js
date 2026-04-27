import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // Keep auth endpoints on the auth API Gateway
      '/api/auth': {
        target: 'https://9k89rrvfn9.execute-api.ap-south-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/PROD'),
      },

      // Route meal planner APIs to the meal-planner API Gateway
      // /api/calculate-bmr -> https://nwneniqthj.execute-api.ap-south-1.amazonaws.com/Prod/calculate-bmr
      '/api': {
        target: 'https://nwneniqthj.execute-api.ap-south-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/Prod'),
      }
    }
  }
})
