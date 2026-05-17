const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

if (lightboxOverlay) {
    const galleryImgs = Array.from(document.querySelectorAll('[data-lightbox]'));
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        const img = galleryImgs[index];

        lightboxImg.src = img.getAttribute('data-full') || img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightboxCounter.textContent = (index + 1) + ' / ' + galleryImgs.length;

        lightboxPrev.style.visibility = index === 0 ? 'hidden' : 'visible';
        lightboxNext.style.visibility = index === galleryImgs.length - 1 ? 'hidden' : 'visible';

        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrev() {
        if (currentIndex > 0) openLightbox(currentIndex - 1);
    }

    function showNext() {
        if (currentIndex < galleryImgs.length - 1) openLightbox(currentIndex + 1);
    }

    galleryImgs.forEach(function (img, index) {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    // click the backdrop to close
    lightboxOverlay.addEventListener('click', function (e) {
        if (e.target === lightboxOverlay) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (!lightboxOverlay.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'Escape') closeLightbox();
    });
}
