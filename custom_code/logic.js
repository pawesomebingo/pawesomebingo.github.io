// <script src="/custom_code/logic.js"></script>

function setNewestDate() {
    const e = document.querySelector('.heading_event');

    e.textContent = e
        ? `LIVE IN ${-Math.floor(
              (Date.now() - new Date('2026-05-08')) / (1000 * 60 * 60 * 24)
          )} DAYS`
        : e.textContent;
}

setTimeout(() => setNewestDate(), 10);
setTimeout(() => setNewestDate(), 1000);
