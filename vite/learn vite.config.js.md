# [text](vite.config.js)
https://vite.dev/config/

## thay đổi: [text](../package.json)
```bash
"dev": "vite --config vite/vite.config.js",
```
## Config Intellisense
https://vite.dev/config/#config-intellisense
```bash
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
})
```
### root
https://vite.dev/config/shared-options.html

Type: string
Default: process.cwd()

```bash
// vite/vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  root: 'vite'
})
```

### [text](../package.json)
```bash
{
  "name": "learn-vite",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite --config vite/vite.config.js",
    "build": "vite build",
    "preview": "vite preview"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nguyenchicong-catdang/learn-vite.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/nguyenchicong-catdang/learn-vite/issues"
  },
  "homepage": "https://github.com/nguyenchicong-catdang/learn-vite#readme",
  "devDependencies": {
    "vite": "^7.1.12"
  }
}

```