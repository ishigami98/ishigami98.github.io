// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el botón del menú y el panel del menú por su ID
    const menuButton = document.getElementById('menu-button');
    const menuPanel = document.getElementById('menu-panel');
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    // Agrega un evento de clic al botón del menú
    menuButton.addEventListener('click', () => {
        // Alterna la clase 'hidden' en el panel del menú
        menuPanel.classList.toggle('hidden');
    });

    // Agrega un evento de clic al botón de búsqueda
    searchButton.addEventListener('click', () => {
        // Alterna la visibilidad de la barra de búsqueda
        searchBar.classList.toggle('hidden');
        // Si la barra de búsqueda está visible, enfoca el campo de entrada
        if (!searchBar.classList.contains('hidden')) {
            searchBar.querySelector('input').focus();
        }
    });
});
