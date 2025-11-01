# vite-plugins-handles
https://vite.dev/guide/api-plugin.html
## vite.config.js
```bash
import vitePlugin from 'vite-plugin-feature'
import rollupPlugin from 'rollup-plugin-feature'

export default defineConfig({
  plugins: [vitePlugin(), rollupPlugin()],
})
```
