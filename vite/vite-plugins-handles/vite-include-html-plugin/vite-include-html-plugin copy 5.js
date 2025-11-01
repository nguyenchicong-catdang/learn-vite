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
import { match } from 'assert';
import { readFile } from 'fs/promises';
// 1. Tách logic xử lý thành hàm đệ quy
async function resolveFileIncludesRecursive(html) {
    // https://www.w3schools.com/js/js_regexp.asp
    const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;
    // string.matchAll(match)
    // const iterator = text.matchAll(/Cats/g);
    const iterator = html.matchAll(includeTagRegex);
    // Array.from(object, mapFunction, thisValue);
    const matchesArray = Array.from(iterator);
    // Điều kiện dừng: Không còn thẻ include nào, trả về HTML cuối cùng
    if (matchesArray.length === 0) {
        return html;
    }
    // array.map(function(currentValue, index, arr), thisValue) -> @return: An array; @param
    const includePromises = matchesArray.map(async ([match, src]) => {
        const content = await readIncludeFile(src)
        return { match, content }
    });

    // https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    // import { readFile, writeFile } from 'fs/promises';
    async function readIncludeFile(src) {
        let content = '';
        try {
            content = await readFile(src, 'utf8');
            return content;
        } catch (err) {
            console.error(`Error reading: ${src}: ${err}`);
            content = `<p style="color:red">include - src: ${src} - error</p>`;
            return content;
        }
    }
    // Promise.all(iterable) -> @return value: Object ; @parameters: iterable	An Array of promises
    const replacements = await Promise.all(includePromises);
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue) => @return: The accumulated result from the last call of the callback function.
    let newHtml = html;
    newHtml = replacements.reduce((total, {match, content}) => {
        // string.replace(searchValue, newValue) => @retrun: string
        return total.replace(match, content);
    }, newHtml)
    console.log(newHtml)
    return resolveFileIncludesRecursive(newHtml);
}
function vite_include_html_plugin() {
    return {
        name: "vite-include-html-plugin",
        async transformIndexHtml(html) {
            return await resolveFileIncludesRecursive(html);
        }
    }

}

export { vite_include_html_plugin }