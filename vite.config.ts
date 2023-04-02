import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/system': {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/system/, '')
      },
      '/daily': {
        target: "http://localhost:9999",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/daily/, '')
      }
    }
  }
})
