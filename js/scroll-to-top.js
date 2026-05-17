// fade-in animation on scroll
const animatables = document.querySelectorAll(
    '.package-card, .reason, .section-title, .section-subtitle'
);

animatables.forEach(function (el) {
    el.classList.add('fade-in');
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

animatables.forEach(function (el) {
    observer.observe(el);
});


// scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.classList.add('scroll-top-btn');
scrollBtn.setAttribute('aria-label', 'Scroll to top');
scrollBtn.textContent = '↑';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
