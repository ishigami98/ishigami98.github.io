document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const menuPanel = document.getElementById('menu-panel');
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    menuButton.addEventListener('click', () => {
        menuPanel.classList.toggle('hidden');
    });

    searchButton.addEventListener('click', () => {
        searchButton.classList.add('hidden');
        searchBar.classList.remove('hidden');
    });
});
