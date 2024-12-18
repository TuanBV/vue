import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      router: fileURLToPath(new URL('./src/router', import.meta.url)),
      views: fileURLToPath(new URL('./src/views', import.meta.url)),
      layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
      tests: fileURLToPath(new URL('./src/tests', import.meta.url))
    }
  },
  test: {
    globals: true,
    setupFiles: ['./src/tests/setup.js']
  }
})
