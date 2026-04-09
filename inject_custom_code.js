const FS = require('fs');
const files = ['index.html', '404.html', 'contact.html'];
const css =
    '<link href="/custom_code/style.css" rel="stylesheet" type="text/css" />';
const jsHead = `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "557899bdab3645b286aa7aaa60e96ff3"}'></script>`;
const jsBody = '<script src="/custom_code/logic.js"></script>';
const insert = (file, pattern, anchor) => {
    const data = FS.readFileSync(file, 'utf8');

    data.includes(pattern)
        ? console.log(
              `\n${file} — ${pattern.includes('style') ? 'CSS' : pattern.includes('logic') ? 'JS (body)' : 'JS (head)'} | ALREADY EXISTS...`
          )
        : (FS.writeFileSync(
              file,
              data.replace(anchor, `${pattern}${anchor}`),
              'utf8'
          ),
          console.log(
              `\n${file} — ${pattern.includes('style') ? 'CSS' : pattern.includes('logic') ? 'JS (body)' : 'JS (head)'} | DOES NOT EXIST: EXECUTING!`
          ));
};

files.forEach(f => {
    insert(f, jsHead, '</head');
    insert(f, css, '</head');
    insert(f, jsBody, '</body');
});
