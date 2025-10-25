# vite.config.js

vite --config vite/vite.config.js

## root
root: './vite'
## v1 "dev": "vite"

// vite/vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './vite'
});

    "dev": "vite --config ./vite/vite.config.js",


