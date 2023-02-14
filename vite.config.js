import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'static',
    rollupOptions: { input: 'static/src/js/script.js' },
    manifest: true,
    emptyOutDir: false,
  },
  optimizeDeps: { include: [] },
})