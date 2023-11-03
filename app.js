const hamburgerMenu = document.querySelector('.hamburger')
const menuItem = document.querySelector('.menu-items')
const mainBody = document.querySelector('.container')

hamburgerMenu.addEventListener('click', () => {
    menuItem.classList.toggle('visible');
})


// make the first section flex
// inside first section there will be two divs
// image hero and sub hero inside one
// aside inside the other one