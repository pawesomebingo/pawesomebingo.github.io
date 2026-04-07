const FS = require('fs');

// index — CSS (head)

const css_parent_index = 'index.html';
const css_pattern_index =
    '<link href="/custom_code/style.css" rel="stylesheet" type="text/css" />';
const css_data_index = FS.readFileSync(css_parent_index, 'utf8');

css_data_index.includes(css_pattern_index)
    ? (() => {
          console.log('\nindex — CSS (head) | ALREADY EXISTS...');

          //   FS.writeFileSync(
          //       css_parent_index,
          //       css_data_index.replace(css_pattern_index, ''),
          //       'utf8'
          //   );

          //   console.log('\nindex — CSS | ALREADY EXISTS... REVERTING...');
      })()
    : (() => {
          FS.writeFileSync(
              css_parent_index,
              css_data_index.replace('</head', `${css_pattern_index}</head`),
              'utf8'
          );

          console.log('\nindex — CSS (head) | DOES NOT EXIST: EXECUTING!');
      })();

// index — JS (head)

const js_parent_index_head = 'index.html';
const js_pattern_index_head = `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "557899bdab3645b286aa7aaa60e96ff3"}'></script>`;
const js_data_index_head = FS.readFileSync(js_parent_index_head, 'utf8');

js_data_index_head.includes(js_pattern_index_head)
    ? console.log('\nindex — JS (head) | ALREADY EXISTS...')
    : (() => {
          FS.writeFileSync(
              js_parent_index_head,
              js_data_index_head.replace(
                  '</head',
                  `${js_pattern_index_head}</head`
              ),
              'utf8'
          );

          console.log('\nindex — JS (head) | DOES NOT EXIST: EXECUTING!');
      })();

// index — JS (body)

const js_parent_index_body = 'index.html';
const js_pattern_index_body = '<script src="/custom_code/logic.js"></script>';
const js_data_index_body = FS.readFileSync(js_parent_index_body, 'utf8');

js_data_index_body.includes(js_pattern_index_body)
    ? console.log('\nindex — JS (body) | ALREADY EXISTS...')
    : (() => {
          FS.writeFileSync(
              js_parent_index_body,
              js_data_index_body.replace(
                  '</body',
                  `${js_pattern_index_body}</body`
              ),
              'utf8'
          );

          console.log('\nindex — JS (body) | DOES NOT EXIST: EXECUTING!');
      })();

// 404 — CSS (head)

const css_parent_404 = '404.html';
const css_pattern_404 =
    '<link href="/custom_code/style.css" rel="stylesheet" type="text/css" />';
const css_data_404 = FS.readFileSync(css_parent_404, 'utf8');

css_data_404.includes(css_pattern_404)
    ? (() => {
          console.log('\n404 — CSS (head) | ALREADY EXISTS...');

          //   FS.writeFileSync(
          //       css_pattern_404,
          //       css_data_404.replace(css_pattern_404, ''),
          //       'utf8'
          //   );

          //   console.log('\n404 — CSS | ALREADY EXISTS... REVERTING...');
      })()
    : (() => {
          FS.writeFileSync(
              css_parent_404,
              css_data_404.replace('</head', `${css_pattern_404}</head`),
              'utf8'
          );

          console.log('\n404 — CSS (head) | DOES NOT EXIST: EXECUTING!');
      })();

// 404 — JS (head)

const js_parent_404_head = '404.html';
const js_pattern_404_head = `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "557899bdab3645b286aa7aaa60e96ff3"}'></script>`;
const js_data_404_head = FS.readFileSync(js_parent_404_head, 'utf8');

js_data_404_head.includes(js_pattern_404_head)
    ? console.log('\n404 — JS (head) | ALREADY EXISTS...')
    : (() => {
          FS.writeFileSync(
              js_parent_404_head,
              js_data_404_head.replace(
                  '</head',
                  `${js_pattern_404_head}</head`
              ),
              'utf8'
          );

          console.log('\n404 — JS (head) | DOES NOT EXIST: EXECUTING!');
      })();

// 404 — JS (body)

const js_parent_404 = '404.html';
const js_pattern_404 = '<script src="/custom_code/logic.js"></script>';
const js_data_404 = FS.readFileSync(js_parent_404, 'utf8');

js_data_404.includes(js_pattern_404)
    ? console.log('\n404 — JS (body) | ALREADY EXISTS...')
    : (() => {
          FS.writeFileSync(
              js_parent_404,
              js_data_404.replace('</body', `${js_pattern_404}</body`),
              'utf8'
          );

          console.log('\n404 — JS (body) | DOES NOT EXIST: EXECUTING!');
      })();
