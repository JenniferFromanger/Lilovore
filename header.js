const burgerButton = document.querySelector('#hamburger');
const sideBar = document.querySelector('#deroulantBurger');
function clickLink() {
    sideBar.classList.toggle('open');
};

burgerButton.addEventListener('click', clickLink);