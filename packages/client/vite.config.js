import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [ vue() ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/themes/default/variables.scss`
      }
    }
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@owd-client/core',
        replacement: path.resolve(__dirname, '../core')
      }
    ]
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false
  }
});