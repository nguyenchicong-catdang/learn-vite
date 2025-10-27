# built document
https://vite.dev/config/build-options.html
## build.rollupOptions
https://rollupjs.org/configuration-options/
## bash
```bash
// vite/vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './vite',
  build: {
    emptyOutDir: true,
    outDir: '../public',
    rollupOptions: {
      // Chỉ định các file HTML sẽ là điểm vào (entry points)
      input: {
        // Tên điểm vào (có thể đặt tùy ý, ví dụ: 'main', 'gioi-thieu', 'admin-dashboard')
        main: resolve(__dirname, 'index.html'),
        post: resolve(__dirname, 'post/index.html'),
        // Đối với thư mục con, bạn vẫn dùng hàm resolve
        //dashboard: resolve(__dirname, 'admin/dashboard.html'),
      },
      // output: {
      //   dir: 'public'
      // }
    },
  },
})

```

## build.emptyOutDir xóa file cũ
emptyOutDir: true,
## build.outDir thư mục đầu ra
outDir: '../public',