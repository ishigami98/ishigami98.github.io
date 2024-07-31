document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('nav ul.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('open');
    });

    // Smooth scrolling to 'Popular Forums' (if necessary)
    // const scrollToForumsBtn = document.querySelector('.some-button-class');
    // scrollToForumsBtn.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     document.querySelector('.popular-forums').scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // });
});
