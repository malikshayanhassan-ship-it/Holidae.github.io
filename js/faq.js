const faqItems = document.querySelectorAll('.faq-item');

function toggleItem(item) {
    const isAlreadyOpen = item.classList.contains('active');
    const answer = item.querySelector('.faq-answer');

    // close everything first
    faqItems.forEach(function (el) {
        el.classList.remove('active');
        el.querySelector('.faq-answer').style.maxHeight = '0';
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // then open the clicked one if it wasn't already open
    if (!isAlreadyOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');

        setTimeout(function () {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-question');

    btn.addEventListener('click', function () {
        toggleItem(item);
    });

    // arrow key navigation between questions
    btn.addEventListener('keydown', function (e) {
        const items = Array.from(faqItems);
        const idx = items.indexOf(item);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = items[idx + 1];
            if (next) next.querySelector('.faq-question').focus();
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = items[idx - 1];
            if (prev) prev.querySelector('.faq-question').focus();
        }
    });
});

// open first item by default
if (faqItems.length > 0) {
    toggleItem(faqItems[0]);
}
