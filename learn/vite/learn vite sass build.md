# vite sass + build
https://vite.dev/guide/features.html#css-pre-processors
```bash
npm add -D sass-embedded
```
# vite build
https://vite.dev/guide/build.html#multi-page-app

https://vite.dev/config/build-options.html#build-outdir
## code document
### build -> build.outDir
build.outDir -> @Type: string; @Default: dist

Specify the output directory (relative to project root).
### build -> build.emptyOutDir
build.emptyOutDir -> @Type: boolean; @Default: true if outDir is inside root

https://vite.dev/config/build-options.html#build-emptyoutdir

```bash
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})
```
## code vite.config.js
```bash
// vite/vite.config.js
import { defineConfig } from 'vite';
import { vite_include_html_plugin } from './vite-plugins-handles/vite-include-html-plugin/vite-include-html-plugin';
import { vite_plugin_rewrite_all } from './vite-plugins-handles/vite-plugin-rewrite-all/vite-plugin-rewrite-all';
export default defineConfig({
  // ...
  root: 'vite',
  plugins: [
    vite_include_html_plugin(),
    // @param: string []
    vite_plugin_rewrite_all(['post'])
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'vite/index.html',
        post: 'vite/post/index.html'
      }
    }
  }
})
```
