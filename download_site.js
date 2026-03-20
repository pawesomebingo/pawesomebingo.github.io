const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const url = process.argv[2];
const OUT_HTML = 'index.html';
const OUT_DIR = 'index_files';
const OUT_404_HTML = '404.html';
const OUT_404_DIR = '404_files';

!url ? (console.error('Usage: node savePage.js <url>'), process.exit(1)) : null;

async function download(assetUrl, filePath) {
    const res = await fetch(assetUrl);
    const buf = Buffer.from(await res.arrayBuffer());

    fs.writeFileSync(filePath, buf);
}

function clean() {
    fs.existsSync(OUT_HTML) ? fs.unlinkSync(OUT_HTML) : null;
    fs.existsSync(OUT_DIR)
        ? fs.rmSync(OUT_DIR, { recursive: true, force: true })
        : null;
    fs.existsSync(OUT_404_HTML) ? fs.unlinkSync(OUT_404_HTML) : null;
    fs.existsSync(OUT_404_DIR)
        ? fs.rmSync(OUT_404_DIR, { recursive: true, force: true })
        : null;
    fs.mkdirSync(OUT_DIR);
    fs.mkdirSync(OUT_404_DIR);
}

async function processPage(html, baseUrl, outHtml, outDir) {
    const $ = cheerio.load(html);
    const selectors = [
        ['img', 'src'],
        ['link', 'href'],
        ['script', 'src']
    ];

    for (const [tag, attr] of selectors) {
        for (const el of $(tag).toArray()) {
            const src = $(el).attr(attr);

            !src || src.startsWith('data:')
                ? null
                : await (async () => {
                      const assetUrl = new URL(src, baseUrl).href;
                      const filename = path.basename(assetUrl.split('?')[0]);
                      const localPath = path.join(outDir, filename);

                      try {
                          await download(assetUrl, localPath);

                          $(el).attr(attr, `${outDir}/${filename}`);
                      } catch {
                          console.log('Failed:', assetUrl);
                      }
                  })();
        }
    }

    fs.writeFileSync(outHtml, $.html());
}

async function save(url) {
    clean();

    const resIndex = await fetch(url);
    const htmlIndex = await resIndex.text();
    const res404 = await fetch(url + '/___this_should_trigger_404___');
    const html404 = await res404.text();

    await processPage(htmlIndex, url, OUT_HTML, OUT_DIR);
    await processPage(html404, url, OUT_404_HTML, OUT_404_DIR);

    console.log(
        `Saved ${OUT_HTML} and ${OUT_DIR}/, ${OUT_404_HTML} and ${OUT_404_DIR}/`
    );
}

save(url);
