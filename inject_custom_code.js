const FS = require('fs');

// index — CSS

const css_parent_index = 'index.html';
const css_pattern_index =
    '<link href="/custom_code/style.css" rel="stylesheet" type="text/css" />';
const css_data_index = FS.readFileSync(css_parent_index, 'utf8');

css_data_index.includes(css_pattern_index)
    ? (() => {
          console.log('\nindex — CSS | ALREADY EXISTS...');

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

          console.log('\nindex — CSS | DOES NOT EXIST: EXECUTING!');
      })();

// index — JS

const js_parent_index = 'index.html';
const js_pattern_index = '<script src="/custom_code/logic.js"></script>';
const js_data_index = FS.readFileSync(js_parent_index, 'utf8');

js_data_index.includes(js_pattern_index)
    ? console.log('\nindex — JS | ALREADY EXISTS...')
    : (() => {
          FS.writeFileSync(
              js_parent_index,
              js_data_index.replace('</body', `${js_pattern_index}</body`),
              'utf8'
          );

          console.log('\nindex — JS | DOES NOT EXIST: EXECUTING!');
      })();

// 404 — CSS

const css_parent_404 = '404.html';
const css_pattern_404 =
    '<link href="/custom_code/style.css" rel="stylesheet" type="text/css" />';
const css_data_404 = FS.readFileSync(css_parent_404, 'utf8');

css_data_404.includes(css_pattern_404)
    ? (() => {
          console.log('\n404 — CSS | ALREADY EXISTS...');

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

          console.log('\n404 — CSS | DOES NOT EXIST: EXECUTING!');
      })();

// 404 — JS

const js_parent_404 = '404.html';
const js_pattern_404 = '<script src="/custom_code/logic.js"></script>';
const js_data_404 = FS.readFileSync(js_parent_404, 'utf8');

js_data_404.includes(js_pattern_404)
    ? console.log('\n404 — JS | ALREADY EXISTS...')
    : (() => {
          FS.writeFileSync(
              js_parent_404,
              js_data_404.replace('</body', `${js_pattern_404}</body`),
              'utf8'
          );

          console.log('\n404 — JS | DOES NOT EXIST: EXECUTING!');
      })();
