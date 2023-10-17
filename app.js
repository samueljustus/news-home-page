const hamburgerMenu = document.querySelector('.hamburger')
const menuItem = document.querySelector('.menu-items')
const mainBody = document.querySelector('.container')

hamburgerMenu.addEventListener('click', () => {
    menuItem.classList.toggle('visible');

})