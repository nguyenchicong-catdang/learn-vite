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
            // string.matchAll(match)
            const matches = Array.from(html.matchAll(includeTagRegex));
            // Promise.all(iterable)
            const replacedHtml = await Promise.all(
                // array.map(function(currentValue, index, arr), thisValue)
                matches.map(async ([match, src]) => {
                    try {
                        // https://www.w3schools.com/nodejs/nodejs_filesystem.asp
                        // import { readFile, writeFile } from 'fs/promises';
                        const content = await readFile(src, 'utf8');
                        return {match, content}
                    } catch (err) {
                        console.error(`Error reading: ${src}: ${err}`);
                        return {match, content:`<p style="color:red">include - src: ${src} - error</p>`}
                    }
                })
            );
            // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
            let newHtml = replacedHtml.reduce((acc, {match, content})=> {
                return acc.replace(match, content)
            }, html)
            
            return newHtml
            ///console.log(replacedHtml)
        }
    }

}

export {vite_include_html_plugin}