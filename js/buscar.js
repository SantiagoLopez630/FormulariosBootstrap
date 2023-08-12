document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#menu input[type="search"]');
    const cardContainers = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        cardContainers.forEach((cardContainer) => {
            const cardTitle = cardContainer.querySelector('.card-title').textContent.toLowerCase();

            if (cardTitle.includes(searchTerm)) {
                cardContainer.style.display = 'block';
            } else {
                cardContainer.style.display = 'none';
            }
        });
    });
});