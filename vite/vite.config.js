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