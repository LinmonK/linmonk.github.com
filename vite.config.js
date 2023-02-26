import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'comps': path.resolve(__dirname, 'src/components'),
      "@": path.resolve(__dirname, "src"),
    }
  },
  css:{
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // math:"always"
      }
    }
  }
})
