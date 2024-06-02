import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      'views': fileURLToPath(new URL('./src/views', import.meta.url)),
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      'boot': fileURLToPath(new URL('./src/boot', import.meta.url)),
      'callers': fileURLToPath(new URL('./src/callers', import.meta.url)),
      'utilities': fileURLToPath(new URL('./src/utilities', import.meta.url)),
    }
  }
})
