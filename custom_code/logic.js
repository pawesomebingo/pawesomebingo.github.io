// <script src="/custom_code/logic.js"></script>

// console.log({
//     text: [...document.body.children]
//         .map(e =>
//             e.textContent ? e.textContent.trim().replace(/ {3,}/g, '') : ''
//         )
//         .map(t => (t ? t.split(/\n{2,}/) : []))
//         .map(arr => arr.map(s => s.trim()))
//         .map(arr => arr.map(s => s.split(/\n/)))
//         .map(arr =>
//             arr.map(sub => sub.map(x => x.trim()).filter(x => x.length > 0))
//         )
//         .reduce((all, arr) => all.concat(...arr), [])
//         .filter(t => t.length > 0),

//     images: [...document.body.querySelectorAll('*')]
//         .filter(e => e.tagName === 'IMG')
//         .map(e => {
//             try {
//                 const u = new URL(e.src);
//                 return u.hostname === location.hostname
//                     ? u.pathname + u.search + u.hash
//                     : u.href;
//             } catch {
//                 return e.src;
//             }
//         })
//         .filter(src => src && src.length > 0),

//     links: [...document.querySelectorAll('*')]
//         .filter(e => e.href)
//         .map(e => {
//             try {
//                 const u = new URL(e.href);
//                 return u.hostname === location.hostname
//                     ? u.pathname + u.search + u.hash
//                     : u.href;
//             } catch {
//                 return e.href;
//             }
//         })
//         .filter(href => href && href.length > 0)
// });
