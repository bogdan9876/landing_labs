
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationList = document.querySelector('.navigation__list');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    if (navigationList.classList.contains('active')) {
        navigationList.classList.remove('active');
        body.style.overflowY = 'auto';
    } else {
        navigationList.classList.add('active');
        body.style.overflowY = 'hidden';
    }
});
