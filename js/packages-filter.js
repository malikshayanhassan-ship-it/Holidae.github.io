const filterBtn = document.getElementById('filterBtn');
const filterDestination = document.getElementById('filterDestination');
const filterBudget = document.getElementById('filterBudget');
const filterDuration = document.getElementById('filterDuration');
const cards = document.querySelectorAll('.package-card');
const grid = document.getElementById('packagesGrid');

filterBtn.addEventListener('click', function () {
    const region = filterDestination.value;
    const budget = filterBudget.value;
    const duration = filterDuration.value;

    let visibleCount = 0;

    cards.forEach(function (card) {
        const cardRegion = card.getAttribute('data-region');
        const cardPrice = parseInt(card.getAttribute('data-price'));
        const cardNights = parseInt(card.getAttribute('data-nights'));

        const regionMatch = region === 'all' || cardRegion === region;
        const budgetMatch = budget === 'all' || cardPrice <= parseInt(budget);
        const durationMatch =
            duration === 'all' ||
            (duration === 'short' && cardNights <= 5) ||
            (duration === 'medium' && cardNights >= 6 && cardNights <= 8) ||
            (duration === 'long' && cardNights >= 9);

        if (regionMatch && budgetMatch && durationMatch) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    updateUI(visibleCount, null);
});


// if the user came from the homepage search bar, filter by ?q=
function runHomepageSearch() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');

    if (!q) return;

    const query = q.toLowerCase().trim();
    const matched = [];
    const unmatched = [];

    cards.forEach(function (card) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const location = card.querySelector('.card-location').textContent.toLowerCase();

        if (title.includes(query) || location.includes(query)) {
            card.style.display = 'flex';
            matched.push(card);
        } else {
            card.style.display = 'none';
            unmatched.push(card);
        }
    });

    matched.forEach(function (card) { grid.appendChild(card); });
    unmatched.forEach(function (card) { grid.appendChild(card); });

    updateUI(matched.length, q);
}

runHomepageSearch();
