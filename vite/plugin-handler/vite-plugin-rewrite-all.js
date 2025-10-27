// vite-plugin-rewrite-all
// https://github.com/ivesia/vite-plugin-rewrite-all/blob/master/src/index.ts
// https://vite.dev/guide/api-plugin.html#configureserver

function vitePluginRewriteAll() {
    return {
        name: "rewrite-all",
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                // custom handle request...
                if (req.url.startsWith('/post/')) {
                    req.url = '/post/index.html'
                }
                next();
            })
        },
    }
}

export { vitePluginRewriteAll }