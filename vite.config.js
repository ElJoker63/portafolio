import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages publica el repo "portafolio" en https://eljoker63.github.io/portafolio/
export default defineConfig({
  plugins: [vue()],
  base: '/portafolio/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096
  }
})
