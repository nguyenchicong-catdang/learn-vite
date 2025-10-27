// vite/plugin-handler/vite-plugin-html-transform.js
// https://vite.dev/guide/api-plugin.html
// https://vite.dev/guide/api-plugin.html
function vitePluginHtmlTransform() {
    return {
        name: 'html-transform',
        async transformIndexHtml(html) {
            return html.replace(
                /<title>(.*?)<\/title>/,
                `<title>Title replaced!</title>`,
            )
        }
    }
}

export { vitePluginHtmlTransform }