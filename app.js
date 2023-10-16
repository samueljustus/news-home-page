const hamburgerMenu = document.querySelector('.hamburger')
const menuItem = document.querySelector('.menu-items')

hamburgerMenu.addEventListener('click', () => {
    menuItem.classList.toggle('visible');
})