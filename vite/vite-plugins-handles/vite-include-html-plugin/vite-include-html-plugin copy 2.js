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
import { readFile} from 'fs/promises';
function vite_include_html_plugin() {
    return {
        name: "vite-include-html-plugin",
        async transformIndexHtml(html) {
            const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;
            // Array.from(object, mapFunction, thisValue);
            const matches = Array.from(html.matchAll(includeTagRegex));
            const aray = matches.map(([match, src]) => {
                return {match, src}
            });
            const content = await readFile(`${aray[0].src}`, 'utf8');
            console.log(content)
            // 
            

        }
    }

}

export {vite_include_html_plugin}