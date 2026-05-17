const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

function setError(groupId, show) {
    const group = document.getElementById(groupId);
    if (!group) return;
    if (show) {
        group.classList.add('error');
    } else {
        group.classList.remove('error');
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    let isValid = true;

    const name = document.getElementById('fullName').value.trim();
    if (name === '') {
        setError('group-name', true);
        isValid = false;
    } else {
        setError('group-name', false);
    }

    const email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        setError('group-email', true);
        isValid = false;
    } else {
        setError('group-email', false);
    }

    const destination = document.getElementById('destination').value;
    if (destination === '') {
        setError('group-destination', true);
        isValid = false;
    } else {
        setError('group-destination', false);
    }

    const message = document.getElementById('message').value.trim();
    if (message.length < 20) {
        setError('group-message', true);
        isValid = false;
    } else {
        setError('group-message', false);
    }

    return isValid;
}

// clear error styling as the user types
['fullName', 'email', 'destination', 'message'].forEach(function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () {
        const groupId = 'group-' + (id === 'fullName' ? 'name' : id);
        setError(groupId, false);
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
        formSuccess.style.display = 'block';
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.background = '#2e7d32';
        submitBtn.disabled = true;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
