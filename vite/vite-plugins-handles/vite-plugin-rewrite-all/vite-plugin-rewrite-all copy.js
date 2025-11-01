// vite/vite-plugins-handles/vite-plugin-rewrite-all/vite-plugin-rewrite-all.js
// https://github.com/ivesia/vite-plugin-rewrite-all/blob/master/src/index.ts
// https://vite.dev/guide/api-plugin.html#configureserver

function vite_plugin_rewrite_all() {
    return {
        name: "vite-plugin-rewrite-all",
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                // custom handle request...
                // string.startsWith(searchValue, start) => @return: boolean
                if (req.url.startsWith('/post/')) {
                    req.url = '/post/index.html'
                }
                next();
            })
        },
    }
}

export { vite_plugin_rewrite_all }