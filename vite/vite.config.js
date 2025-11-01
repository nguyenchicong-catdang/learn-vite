// vite/vite.config.js
import { defineConfig } from 'vite'
import { vite_include_html_plugin } from './vite-plugins-handles/vite-include-html-plugin/vite-include-html-plugin'
export default defineConfig({
  // ...
  root: 'vite',
  plugins: [vite_include_html_plugin()]
})