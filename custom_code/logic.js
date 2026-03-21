// <script src="/custom_code/logic.js"></script>

function removeBadge() {
    document
        .querySelector('.w-webflow-badge')
        ?.style.setProperty('display', 'none', 'important');
}

setTimeout(() => removeBadge(), 10);
setTimeout(() => removeBadge(), 1000);
