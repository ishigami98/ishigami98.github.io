document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('nav ul.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('open');
    });

    // Scroll to 'Most Popular Forums' section
    const scrollToForumsBtn = document.querySelector('.hero-text input');
    scrollToForumsBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.querySelector('.popular-forums').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
