setTimeout(() => {
    const b = document.querySelector('.w-webflow-badge');

    b
        ? (() => {
              b.style.setProperty('display', 'none', 'important');
              b.style.setProperty('visibility', 'hidden', 'important');
          })()
        : null;
}, 10);
