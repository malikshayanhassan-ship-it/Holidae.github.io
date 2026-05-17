// gallery thumbnails
const thumbs = document.querySelectorAll('.thumb');
const mainImg = document.getElementById('mainGalleryImg');

if (thumbs.length && mainImg) {
    thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
            mainImg.src = thumb.getAttribute('data-full');
            mainImg.alt = thumb.alt;
            thumbs.forEach(function (t) { t.classList.remove('active'); });
            thumb.classList.add('active');
        });
    });
}


// booking price calc
const bookingBox = document.querySelector('.booking-box');
const travellersSelect = document.getElementById('travellers');
const totalPriceDiv = document.getElementById('totalPrice');

const pricePerPerson = bookingBox ? parseInt(bookingBox.getAttribute('data-price')) : 799;

function updateTotal() {
    const num = parseInt(travellersSelect.value);
    const total = num * pricePerPerson;
    totalPriceDiv.innerHTML = 'Total: <strong>£' + total.toLocaleString() + '</strong>';
}

if (travellersSelect && totalPriceDiv) {
    updateTotal();
    travellersSelect.addEventListener('change', updateTotal);
}


// stop users picking a date in the past
const depDateInput = document.getElementById('depDate');

if (depDateInput) {
    const today = new Date().toISOString().split('T')[0];
    depDateInput.setAttribute('min', today);
}


// book now button
const bookBtn = document.getElementById('bookBtn');
const bookingConfirm = document.getElementById('bookingConfirm');

if (bookBtn && bookingConfirm) {
    bookBtn.addEventListener('click', function () {
        bookingConfirm.style.display = 'block';
        bookBtn.textContent = 'Request Sent ✓';
        bookBtn.style.background = '#2e7d32';
        bookBtn.disabled = true;
    });
}
