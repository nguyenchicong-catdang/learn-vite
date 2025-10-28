# v2 vite-plugin-include.js
// vite/plugin-handler/vite-plugin-include.js
// https://github.com/lassejlv/vite-include-html-plugin/blob/main/plugin.js
// https://nodejs.org/docs/latest/api/fs.html#filehandlereadfileoptions
// fsPromises.readFile(path[, options]);
// vite/plugin-handler/vite-plugin-include.js
import { readFile } from 'node:fs/promises';
import { fullPath } from '../../fullPath'; // Giả định fullPath hoạt động chính xác

const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;

// 1. Tách logic xử lý thành hàm đệ quy
async function resolveIncludes(html) {
    // 1.1. Tìm tất cả các thẻ include trong HTML hiện tại
    const matches = Array.from(html.matchAll(includeTagRegex));
    if (matches.length === 0) {
        return html; // Điều kiện dừng: Không còn thẻ include nào, trả về HTML cuối cùng
    }

    const replacedHtml = await Promise.all(
        matches.map(async ([match, src]) => {
            try {
                // Đọc nội dung file được chèn
                const filePath = fullPath(src);
                let content = await readFile(filePath, { encoding: 'utf8' });

                // 1.2. *QUAN TRỌNG:* Gọi đệ quy trên nội dung vừa đọc
                // Điều này xử lý thẻ include bên trong file được chèn (ví dụ: B.html)
                content = await resolveIncludes(content); 

                return { match, content };
            } catch (error) {
                console.error(`Error reading ${src}: ${error}`);
                return { match, content: match };
            }
        })
    );

    // 1.3. Thay thế các thẻ include ở cấp độ hiện tại
    let newHtml = replacedHtml.reduce((acc, { match, content }) => {
        return acc.replace(match, content);
    }, html);

    // 1.4. Sau khi thay thế, kiểm tra lại xem có còn thẻ nào không. 
    // Nếu không, hàm sẽ dừng ở lần gọi tiếp theo (Bước 1.1)
    return resolveIncludes(newHtml);
}


function vitePluginInclude() {
    return {
        name: "vite-plugin-include",
        async transformIndexHtml(html) {
            // 2. Gọi hàm đệ quy từ hook của Vite
            return await resolveIncludes(html); 
        }
    }
}

export { vitePluginInclude }