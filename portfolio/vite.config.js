import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // IMPORTANTE: deve corrispondere al nome della repo GitHub
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
