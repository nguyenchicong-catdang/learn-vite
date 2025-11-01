// vite/vite-plugins-handles/vite-plugin-rewrite-all/vite-plugin-rewrite-all.js
// https://github.com/ivesia/vite-plugin-rewrite-all/blob/master/src/index.ts
// https://vite.dev/guide/api-plugin.html#configureserver

function vite_plugin_rewrite_all(prefixes) {
    return {
        name: "vite-plugin-rewrite-all",
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                // Kiểm tra xem req.url có tồn tại không trước khi xử lý
                if (!req.url) {
                    return next(); 
                }

                // Dùng .some() để lặp qua mảng và dừng ngay lập tức 
                // khi điều kiện viết lại được đáp ứng (tiết kiệm hiệu năng).
                // array.some(function(value, index, arr), this) => @return: boolean
                prefixes.some(prefix => {
                    const prefixPath = `/${prefix}/`;

                    if (req.url.startsWith(prefixPath)) {
                        // **SỬA LỖI LOGIC TẠI ĐÂY:** Thực hiện gán lại URL
                        // Ví dụ: /blog/post/123 sẽ thành /blog/index.html
                        req.url = `${prefixPath}index.html`; 
                        
                        // Trả về true để dừng vòng lặp .some()
                        return true; 
                    }
                    // Trả về false để tiếp tục vòng lặp
                    return false;
                });
                
                // Chuyển tiếp request đến middleware tiếp theo hoặc Vite
                next();
            })
        },
    }
}

export { vite_plugin_rewrite_all }