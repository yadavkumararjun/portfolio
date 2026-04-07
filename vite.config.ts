import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'docs',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    port: 3000,
    open: true,
  }
})
