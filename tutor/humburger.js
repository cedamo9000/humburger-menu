const burger = document.querySelector('.humburger');
const menu = document.querySelector('.container');
burger.addEventListener('click', () => {
    menu.classList.toggle('showcontainer');
    console.log('burger clicked');
});