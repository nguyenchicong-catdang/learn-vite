// vite/index.js
import { template_header } from "./template/header/template-header"
function index() {
    template_header();
}


export {index}

document.addEventListener('DOMContentLoaded', () => {
    index();
})

