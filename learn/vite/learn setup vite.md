# Vite Document
https://vite.dev/guide/
# tạo package.json
```bash
npm init
```
# add .gitignore
node_modules
# tạo dự án đơn giản
https://vite.dev/guide/#scaffolding-your-first-vite-project
```bash
npm create vite@latest
```
## chạy dự án mẫu
https://vite.dev/guide/#community-templates
```bash
cd my-project
npm run dev
```
# Cài đặt môi trường dev
```bash
npm install -D vite
```
# package.json
```bash
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```