# vite-plugin-include
// vite/plugin-handler/vite-plugin-include.js
// https://github.com/lassejlv/vite-include-html-plugin/blob/main/plugin.js
// https://nodejs.org/docs/latest/api/fs.html#filehandlereadfileoptions
// fsPromises.readFile(path[, options]);
import { readFile } from 'node:fs/promises';
import { fullPath } from '../../../fullPath';
function vitePluginInclude() {
    return {
        name: "vite-plugin-include",
        async transformIndexHtml(html) {
            const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;
            const replacedHtml = await Promise.all(
                Array.from(html.matchAll(includeTagRegex), async ([match, src]) => {
                    try {
                        const filePath = fullPath(src);
                        const content = await readFile(filePath, { encoding: 'utf8' });
                        return { match, content };
                    } catch (error) {
                        console.error(`Error reading ${src}: ${error}`);
                        return { match, content: match }; // Return the original tag in case of an error
                    }
                })
            )
            return replacedHtml.reduce((acc, { match, content }) => {
                return acc.replace(match, content);
            }, html);
        }
    }
}

export { vitePluginInclude }