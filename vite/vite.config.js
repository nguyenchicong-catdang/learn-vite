// vite/vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './vite',
  build: {
    emptyOutDir: true,
    //outDir: '../public',
    outDir: resolve(__dirname, '..', 'public') ,
    rollupOptions: {
      // Chỉ định các file HTML sẽ là điểm vào (entry points)
      input: {
        // Tên điểm vào (có thể đặt tùy ý, ví dụ: 'main', 'gioi-thieu', 'admin-dashboard')
        main: resolve(__dirname, 'index.html'),
        post: resolve(__dirname, 'post', 'index.html'),
        // Đối với thư mục con, bạn vẫn dùng hàm resolve
        //dashboard: resolve(__dirname, 'admin/dashboard.html'),
      },
      // output: {
      //   dir: 'public'
      // }
    },
  },
})