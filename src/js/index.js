import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');
let search_bar = document.getElementById('search_bar');
let page_cover = document.querySelector('.cover-default');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
  page_cover.classList.toggle('cover-default--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobile_menu);
  }
  else {
    enableBodyScroll(mobile_menu);
  }
})

// - Закрытие по клику на неактивную часть меню
window.addEventListener('click', (e) => {
  if (!mobile_menu.classList.contains('main-nav__nav-menu--mobile--active')) {
    return;
  }
  else if (
    e.target !== mobile_menu &&
    e.target.parentElement !== mobile_menu &&
    e.target !== burger &&
    e.target.parentElement !== burger &&
    e.target !== search_bar &&
    e.target.parentElement !== search_bar) {

    mobile_menu.classList.remove('main-nav__nav-menu--mobile--active');
    burger.classList.remove('main-nav__burger--active');
    page_cover.classList.remove('cover-default--active');
    enableBodyScroll(mobile_menu);
  }
})

// - Закрытие по клику на пункт меню
nav_list.onclick = function (event) {
  let target = event.target;

  if (target.tagName != 'A') {
    return;
  }

  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
  enableBodyScroll(mobile_menu);
};

// --- Плавный скроллинг до якорных ссылок
// $('a[href^="#"]').on('click', function (e) {
//   e.preventDefault();

//   var id = $(this).attr('href'),
//     top = $(id).offset().top;

//   $('body,html').animate({
//     scrollTop: top
//   }, 0);
// });