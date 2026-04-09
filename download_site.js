const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const url = process.argv[2];
const OUTS = [
    ['index.html', 'index_files', ''],
    ['404.html', '404_files', '/___this_should_trigger_404___'],
    ['contact.html', 'contact_files', '/contact']
];

!url ? (console.error('Usage: node savePage.js <url>'), process.exit(1)) : null;

const download = async (u, p) =>
    fetch(u)
        .then(r => r.arrayBuffer())
        .then(b => fs.writeFileSync(p, Buffer.from(b)));

const clean = () =>
    OUTS.forEach(
        ([h, d]) => (
            fs.existsSync(h) ? fs.unlinkSync(h) : null,
            fs.existsSync(d)
                ? fs.rmSync(d, { recursive: true, force: true })
                : null,
            fs.mkdirSync(d)
        )
    );

const processPage = async (html, base, outHtml, outDir) => {
    const $ = cheerio.load(html);
    const sels = [
        ['img', 'src'],
        ['link', 'href'],
        ['script', 'src']
    ];

    for (const [tag, attr] of sels)
        for (const el of $(tag).toArray()) {
            const src = $(el).attr(attr);

            !src || src.startsWith('data:')
                ? null
                : await (async () => {
                      const assetUrl = new URL(src, base).href;
                      const filename = path.basename(assetUrl.split('?')[0]);
                      const local = path.join(outDir, filename);

                      try {
                          await download(assetUrl, local);

                          $(el).attr(attr, `${outDir}/${filename}`);
                      } catch {
                          console.log('Failed:', assetUrl);
                      }
                  })();
        }

    fs.writeFileSync(outHtml, $.html());
};

const saveVariant = async (base, htmlPath, outHtml, outDir) =>
    fetch(base + htmlPath)
        .then(r => r.text())
        .then(t => processPage(t, base, outHtml, outDir));

const save = async u => {
    clean();

    for (const [html, dir, path] of OUTS) await saveVariant(u, path, html, dir);

    console.log(OUTS.map(([h, d]) => `${h} + ${d}/`).join(', '));
};

save(url);
