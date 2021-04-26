'use strict';
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤 시 navbar 색상 변경
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});