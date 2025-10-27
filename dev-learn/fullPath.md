## fullPaht dùng lam root dự án
fullPath(string)
## code
```bash
// fullPath.js
// https://nodejs.org/docs/latest/api/url.html#urlfileurltopathurl-options
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
function fullPath(path = '') {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const __fullPath = resolve(__dirname, `${path}`);
    return __fullPath;
}

export {fullPath}
```
## sử dụng trong vite.config.js
```bash
// vite/vite.config.js
import { defineConfig } from 'vite';
//import { resolve } from 'path';
import { fullPath } from '../fullPath';
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
})
```