// <script src="/custom_code/logic.js"></script>

function setNewestDate() {
    const e = document.querySelector('.heading_event');
    const eventDate = new Date(2026, 4, 8);
    const today = new Date();

    e.textContent =
        today < eventDate
            ? `LIVE IN ${Math.floor((eventDate - today) / (1000 * 60 * 60 * 24))} DAYS`
            : today.toDateString() === eventDate.toDateString()
              ? 'LIVE NOW!'
              : 'EVENT HAS PASSED';
}

setTimeout(setNewestDate, 10);
setTimeout(setNewestDate, 1000);
