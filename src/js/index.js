import { lock, unlock } from 'tua-body-scroll-lock'

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
    lock(mobile_menu);
    console.log('opa');
  }
  else {
    unlock(mobile_menu);
    console.log('nihuya');
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
    unlock(mobile_menu);
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
  page_cover.classList.remove('cover-default--active');
  unlock(mobile_menu);
};

// - Закрытие при сколле на ширине экрана от 1024 до 1280
window.addEventListener('load', () => {
  if (window.innerWidth < 1023 && window.innerWidth > 1280) {
    return;
  }
  else {
    window.addEventListener('scroll', () => {
      if (mobile_menu.classList.contains('main-nav__nav-menu--mobile--active')) {
        mobile_menu.classList.remove('main-nav__nav-menu--mobile--active');
        burger.classList.remove('main-nav__burger--active');
        page_cover.classList.remove('cover-default--active');
        unlock(mobile_menu);
      }
    })
  }
})

// --- Анимация печатающегося текста на главной странице
window.addEventListener('load', () => {
  if (document.getElementById('index_typing_text') === null) {
    return;
  }
  else {
    let i = 0;
    let txt = document.querySelector('#index_typing_text').dataset.typing;
    let speed = 100;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById('index_typing_text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    setTimeout(() => {
      typeWriter();
    }, 6000)

  }
})

// --- Отключение неактивных элементов в слайдере
window.addEventListener('load', () => {
  if (document.querySelector('.index-projects__slider-slide') === null) {
    return;
  }
  else {
    let project_items = document.querySelectorAll('.index-projects__slider-slide');

    project_items.forEach((item) => {
      switch (item.getAttribute('data-status')) {
        case 'ready':
          item.querySelector('.index-projects__slide-caption').innerHTML = 'Реализован';
          break;
        case 'active':
          item.querySelector('.index-projects__slide-caption').innerHTML = 'В стадии реализации';
          break;
        case 'disabled':
          item.classList.add('disabled');
          item.setAttribute('href', '');
          item.querySelector('.index-projects__slide-caption').innerHTML = 'В стадии проектирования';
          break;
      }
    })
  }
})

// --- Добавление интерактивного класса для всех ссылок на странице
window.addEventListener('load', () => {
  if (document.querySelector('a') === null) {
    return;
  }
  else {
    document.querySelectorAll('a').forEach((link) => {
      link.classList.add('follow-change');
    })
  }
})

// --- Жёлтая подложка для заголовков на главных экранах
window.addEventListener('load', () => {
  if (document.querySelector('#page-title') === null) {
    return;
  }
  else {
    window.addEventListener('scroll', () => {
      document.getElementById('page-title').classList.add('active-title');
    })
  }
})

// --- Вращение графического элемента на странице about при скролле
window.addEventListener('load', () => {
  if (document.querySelector('.about-body__top-graphic') === null) {
    return;
  }
  else {
    function scrollRotate() {
      let element = document.querySelector('.about-body__top-graphic');
      element.style.transform = `translateX(-50%) translateY(-50%) rotate(${window.pageYOffset / 2}deg)`
    }

    window.addEventListener('scroll', () => {
      scrollRotate();
    });
  }
})

// --- Бегущая строка
window.addEventListener('load', () => {
  if (document.querySelector('#marquee') === null) {
    return;
  }
  else {

    $(function () {
      $('.marquee-1').marquee({
        delayBeforeStart: -5000,
        duration: 20000,
        startVisible: true,
        duplicated: true
      });

      $('.marquee-2').marquee({
        delayBeforeStart: -5000,
        duration: 30000,
        startVisible: true,
        duplicated: true
      });

      $('.marquee-3').marquee({
        delayBeforeStart: -5000,
        duration: 55000,
        startVisible: true,
        duplicated: true
      });

      $('.marquee-4').marquee({
        delayBeforeStart: -5000,
        duration: 25000,
        startVisible: true,
        duplicated: true
      });

      $('.marquee-5').marquee({
        delayBeforeStart: -5000,
        duration: 75000,
        startVisible: true,
        duplicated: true
      });

      $('.marquee-6').marquee({
        delayBeforeStart: -5000,
        duration: 35000,
        startVisible: true,
        duplicated: true
      });
    });

    let marquees = document.querySelectorAll('#marquee');
    marquees.forEach((item) => {
      item.classList.add(`marquee-${Math.floor(Math.random() * (6) + 1)}`)
    })
  }
})

// --- Анимация смены описания и фотографий на десктопной версии страницы "команда"
window.addEventListener('load', () => {
  if (document.querySelector('.team-body') === null ||
    (document.querySelector('.team-body') !== null && window.innerWidth <= 1279)) {
    return;
  }
  else {

    let team_items = document.querySelectorAll('.team-body__item');

    function handlePersonContent(value, index) {
      let team_item_contents = value.querySelectorAll('.team-body__item-content')

      Array.from(team_item_contents).forEach((content) => {
        content.classList.remove('team-body__item-content--active');
      })

      team_item_contents[index].classList.add('team-body__item-content--active')
    }

    team_items.forEach((team_item) => {
      let team_item_figure = team_item.querySelector('.team-body__item-image');
      let team_item_height = team_item.offsetHeight;
      let team_item_offset_top = team_item.offsetTop;
      let team_item_figure_height = team_item_figure.offsetHeight;


      window.addEventListener('scroll', () => {
        let team_item_figure_offset_top = team_item_figure.offsetTop;
        let team_item_final_figure_offset_top = team_item_figure_offset_top + team_item_offset_top;
        let team_item_diff = team_item_final_figure_offset_top - team_item_offset_top;
        let team_item_percent_scrolled = Math.floor((team_item_diff / (team_item_height - team_item_figure_height)) * 100)

        let team_item_segments = Array.from(team_item.querySelectorAll('.team-body__item-content')).length;
        let team_item_segment_threshold = Math.floor(100 / team_item_segments);
        let team_item_segment_current_index = Math.min(Math.floor(team_item_percent_scrolled / team_item_segment_threshold), team_item_segments - 1);

        handlePersonContent(team_item, team_item_segment_current_index);
      })
    })
  }
})

// --- Задержка появления элементов на главной странице
window.addEventListener('load', () => {
  if (document.querySelector('.index-projects') === null) {
    return;
  }
  else {
    let index_projects_items_initial = Array.from(document.querySelectorAll('.index-projects__slider-slide'));

    const chunk = (arr, size) =>
      Array.from({
        length: Math.ceil(arr.length / size)
      }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    let index_projects_items = chunk(index_projects_items_initial, 3);

    index_projects_items.forEach((item) => {
      item[0] ? item[0].setAttribute('data-aos-delay', 0) : console.log('');
      item[1] ? item[1].setAttribute('data-aos-delay', 500) : console.log('');
      item[2] ? item[2].setAttribute('data-aos-delay', 1000) : console.log('');
    })
  }
})

// --- Задержка появления элементов на странице архива новостей
window.addEventListener('load', () => {
  if (document.querySelector('.press-body') === null) {
    return;
  }
  else {
    let press_items_initial = Array.from(document.querySelectorAll('.press-body__slider-slide'));

    const chunk = (arr, size) =>
      Array.from({
        length: Math.ceil(arr.length / size)
      }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    let press_items = chunk(press_items_initial, 3);

    press_items.forEach((item) => {
      item[0] ? item[0].setAttribute('data-aos-delay', 0) : console.log('');
      item[1] ? item[1].setAttribute('data-aos-delay', 100) : console.log('');
      item[2] ? item[2].setAttribute('data-aos-delay', 200) : console.log('');
    })
  }
})

// --- Поиск
let search_form = document.querySelector('.is-search-form');
let search_input = document.querySelector('.is-search-input');
let search_button = document.querySelector('.is-search-submit');

// - Создание иконки
let search_icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
search_icon.classList.add('search-icon');
search_icon.setAttribute('width', '16');
search_icon.setAttribute('height', '16');
search_icon.innerHTML = '<use href="img/icon/sprite.svg#search-icon"></use>';

search_button.appendChild(search_icon);

// - miscellaneous
search_form.classList.add('follow-change');
search_input.setAttribute('placeholder', '');

search_form.addEventListener('mouseover', () => {
  search_input.classList.add('search-open');
})
search_form.addEventListener('mouseleave', () => {
  search_input.classList.remove('search-open');
  search_input.blur();
})
