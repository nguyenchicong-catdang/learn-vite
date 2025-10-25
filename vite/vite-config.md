# vite config js
vite --config vite/vite.config.js
## v1 "dev": "vite"
// vite/vite.config.js 

import { defineConfig } from 'vite'

export default defineConfig({ root: './vite' });

## package.json
"dev": "vite --config ./vite/vite.config.js",