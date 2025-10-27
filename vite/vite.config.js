// vite/vite.config.js
import { defineConfig } from 'vite';
//import { resolve } from 'path';
import { fullPath } from '../fullPath';
import { vitePluginHtmlTransform } from './plugin-handler/vite-plugin-html-transform';
import { vitePluginInclude } from './plugin-handler/vite-plugin-include';
export default defineConfig({
  root: fullPath('vite'),
  build: {
    emptyOutDir: true,
    //outDir: '../public',
    outDir: fullPath('public'),
    rollupOptions: {
      // Chỉ định các file HTML sẽ là điểm vào (entry points)
      input: {
        // Tên điểm vào (có thể đặt tùy ý, ví dụ: 'main', 'gioi-thieu', 'admin-dashboard')
        main: fullPath('vite/index.html'),
        post: fullPath('vite/post/index.html'),
        // Đối với thư mục con, bạn vẫn dùng hàm resolve
        //dashboard: resolve(__dirname, 'admin/dashboard.html'),
      },
      // output: {
      //   dir: 'public'
      // }
    },
  },
  plugins: [
    vitePluginHtmlTransform(),
    vitePluginInclude()
  ]
})