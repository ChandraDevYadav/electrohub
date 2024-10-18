import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split vendor libraries into a separate chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set chunk size warning limit to 1MB
  },
})
