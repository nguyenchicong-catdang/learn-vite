# learn handles vite-include-html-plugin
https://github.com/lassejlv/vite-include-html-plugin/blob/main/plugin.js

# code

```bash
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
```
# use vite.config.js
```bash
// vite/vite.config.js
import { defineConfig } from 'vite'
import { vite_include_html_plugin } from './vite-plugins-handles/vite-include-html-plugin/vite-include-html-plugin'
export default defineConfig({
  // ...
  plugins: [vite_include_html_plugin()]
})
```