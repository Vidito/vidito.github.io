const burger = document.querySelector('.burger');
const menuItems = document.querySelector('.menuItems');

burger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});
