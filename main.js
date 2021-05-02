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



// Navbar 메뉴 클릭시 해당 섹션으로 스크롤 이동
// console.log(document.querySelectorAll('.navbar__menu__item'));
// console.log(document.getElementsByClassName('navbar__menu__item'));
/*
document.querySelectorAll('.navbar__menu__item').forEach((value) => {
    
    value.addEventListener('click', (e) => {
        document.querySelectorAll('.navbar__menu__item').forEach((value2) => {
            value2.classList.remove('active');
        });
        e.target.classList.add('active');
        switch (e.currentTarget.innerText) {
            case 'Home':
                window.scrollTo(0, document.querySelector('#home').offsetTop);
                break;
            case 'About':
                window.scrollTo(0, document.querySelector('#about').offsetTop-20);
                break;
            case 'Skills':
                window.scrollTo(0, document.querySelector('#skills').offsetTop-20);
                break;
            case 'My work':
                window.scrollTo(0, document.querySelector('#work').offsetTop-20);
                break;
            case 'Testimonial':
                window.scrollTo(0, document.querySelector('#testimonials').offsetTop-20);
                break;
            case 'Contact':
                window.scrollTo(0, document.querySelector('#contact').offsetTop-20);
                break;
            default:
                window.scrollTo(0, document.querySelector('#home').offsetTop-20);
                break;
          }
    });
});

document.querySelector('.home__contact').addEventListener('click', () => {
    window.scrollTo(0, document.querySelector('#contact').offsetTop);
    console.log('test');
});
*/

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return ;
    }

    scrollIntoView(link);
    //const scrollTo = document.querySelector(link);
    //scrollTo.scrollIntoView({behavior : 'smooth'});

});

document.querySelector('.home__contact').addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

// 스크롤 내릴때 home 섹션 투명하게 하기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1-(window.scrollY/homeHeight);
    arrowButton.style.opacity = (window.scrollY/homeHeight);
});

// 스크롤 시 위로 가기 버튼 생성
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// 위로 가기 버튼
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    document.querySelector(selector).scrollIntoView({behavior: 'smooth'});
}