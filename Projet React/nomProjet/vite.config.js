import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    globals: true, // pour ne pas avoir à importer expect, describe, etc.
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
