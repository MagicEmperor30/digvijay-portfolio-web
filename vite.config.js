import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base:"/digvijay-portfolio-web/",
  build: {
    outDir: 'dist', // Ensures build output goes into the 'dist' folder
  },
})
