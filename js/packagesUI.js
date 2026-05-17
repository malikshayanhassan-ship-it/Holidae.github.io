const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');

function updateUI(visibleCount, query) {
    const label = visibleCount === 1 ? 'package' : 'packages';
    resultsCount.textContent = 'Showing ' + visibleCount + ' ' + label;

    if (visibleCount === 0) {
        if (query) {
            noResults.innerHTML =
                '😕 Sorry, we don\'t have any packages for <strong>"' + query + '"</strong> yet. ' +
                'Try a different destination or <a href="contact.html" style="color:var(--clr-primary);font-weight:700;">contact us</a> and we\'ll see what we can do.';
        } else {
            noResults.textContent = '😕 No packages match your filters. Try adjusting your search.';
        }
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}
