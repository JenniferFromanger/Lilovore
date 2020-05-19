/*-------Burger Menu-------*/
const burgerButton = document.querySelector('#hamburger');
const sideBar = document.querySelector('#deroulantBurger');
function clickLink() {
    sideBar.classList.toggle('open');
};

burgerButton.addEventListener('click', clickLink);

const closeMenu = document.querySelectorAll('a.closeClic');

for (let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener('click', clickLink);
};


/*-------Main pictures-----*/
