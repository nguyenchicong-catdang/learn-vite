// vite/vite-plugins-handles/vite-include-html-plugin/vite-include-html-plugin.js
// https://github.com/lassejlv/vite-include-html-plugin/blob/main/plugin.js
// https://vite.dev/guide/api-plugin.html#transformindexhtml
// https://www.w3schools.com/js/js_regexp.asp
// https://www.w3schools.com/js/js_regexp_meta_characters.asp
// https://www.w3schools.com/js/js_regexp_quantifiers.asp

// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

// https://www.w3schools.com/jsref/jsref_promise_all.asp

// https://www.w3schools.com/jsref/jsref_from.asp
// import fs from "fs";

// Recursive function
import { readFile } from 'fs/promises';
// 1. Tách logic xử lý thành hàm đệ quy
async function resolveFileIncludesRecursive(html) {
    // https://www.w3schools.com/js/js_regexp.asp
    // Biểu thức chính quy: bắt <include src="đường dẫn bất kỳ">
    // Biểu thức hiện tại: /<include\s+src="([^"]+)"><\/include>/g
    // Gợi ý: Có thể tối ưu regex để chấp nhận khoảng trắng và thuộc tính khác
    // Tuy nhiên, nếu chỉ cần bắt src="...", regex hiện tại là ổn.
    const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;
    // string.matchAll(match) => @return: Iterator
    const matchesIterator = html.matchAll(includeTagRegex);
    // Array.from(object, mapFunction, thisValue) => @return: array;
    const matchesArray = Array.from(matchesIterator);
    // Điều kiện dừng: Không còn thẻ include nào, trả về HTML cuối cùng
    if (matchesArray.length === 0) {
        return html;
    }
    // https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    // import { readFile, writeFile } from 'fs/promises';
    // 2. Hàm đọc file, tách riêng để dễ quản lý lỗi
    async function readIncludeFile(src) {
        try {
            const content = await readFile(src, 'utf8');
            // Đệ quy sẽ xử lý include lồng nhau trong content này sau
            return content;
        } catch (err) {
            console.error(`Error reading include file: ${src}: ${err.message}`);
            return `<p style="color:red">ERROR: Could not include file "${src}"</p>`;
        }
    }
    // Lên lịch đọc tất cả các file cùng lúc
    // array.map(function(currentValue, index, arr), thisValue) => @return: array;
    const fileReadPromises = matchesArray.map(async ([match, src]) => {
        const content = await readIncludeFile(src)
        return { match, content }
    });
    // Chờ tất cả các file được đọc xong
    // Promise.all(iterable) -> @return value: Object ; @parameters: iterable	An Array of promises
    const replacements = await Promise.all(fileReadPromises);
    // Thay thế tất cả các thẻ include trong HTML ban đầu bằng nội dung đã đọc
    let processedHtml = html;
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue) => @return: The accumulated result from the last call of the callback function.
    processedHtml = replacements.reduce((total, { match, content }) => {
        // string.replace(searchValue, newValue) => @retrun: string
        return total.replace(match, content);
    }, processedHtml)
    return resolveFileIncludesRecursive(processedHtml);
}
function vite_include_html_plugin() {
    // https://vite.dev/guide/api-plugin.html#transformindexhtml
    return {
        name: "vite-include-html-plugin",
        async transformIndexHtml(html) {
            return await resolveFileIncludesRecursive(html);
        }
    }

}

export { vite_include_html_plugin }