import PATH from 'path';
import FS from 'fs';
import HTTP from 'http';
import URL from 'url';

const PORT = process.argv[2] || 80;
const WEBPAGES = ['/404', '/test'];
const MIME_TYPES = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    ico: 'image/vnd.microsoft.icon',
    svg: 'image/svg+xml',
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
    mp4: 'video/mp4',
    webm: 'video/webm',
    json: 'application/json'
};

HTTP.createServer(async (req, res) => {
    const URI = URL.parse(req.url).pathname;
    let fileName = PATH.join(process.cwd(), URI);

    fileName =
        URI === '' || URI === '/'
            ? 'index.html'
            : WEBPAGES.includes(URI)
              ? `${fileName}.html`
              : fileName;

    try {
        await FS.promises.access(fileName);

        const mimeType = MIME_TYPES[fileName.split('.').pop()] || 'text/plain';

        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(await FS.promises.readFile(fileName));
    } catch {
        const notFound = '404.html';

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(await FS.promises.readFile(notFound));
    }
}).listen(parseInt(PORT, 10));

console.log(`Server started on PORT: [${PORT}]`);
