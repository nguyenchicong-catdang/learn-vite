// fullPath.js
// https://nodejs.org/docs/latest/api/url.html#urlfileurltopathurl-options
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
function fullPath(path = '') {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const __fullPath = resolve(__dirname, `${path}`);
    return __fullPath;
}

export {fullPath}