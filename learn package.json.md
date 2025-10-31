# [text](package.json)
```bash
npm init
```
## default: [text](package.json)
```bash
{
  "name": "learn-vite",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
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
## vite
### Command Line Interface [text](package.json)
```bash
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```