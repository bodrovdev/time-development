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
    let txt = 'ДЕВЕЛОПЕР БЕЗУПРЕЧНОГО ОБРАЗА ЖИЗНИ';
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
    });
    $(function () {
      $('.marquee-2').marquee({
        delayBeforeStart: -5000,
        duration: 30000,
        startVisible: true,
        duplicated: true
      });
    });
    $(function () {
      $('.marquee-3').marquee({
        delayBeforeStart: -5000,
        duration: 55000,
        startVisible: true,
        duplicated: true
      });
    });
    $(function () {
      $('.marquee-4').marquee({
        delayBeforeStart: -5000,
        duration: 25000,
        startVisible: true,
        duplicated: true
      });
    });
    $(function () {
      $('.marquee-5').marquee({
        delayBeforeStart: -5000,
        duration: 75000,
        startVisible: true,
        duplicated: true
      });
    });
    $(function () {
      $('.marquee-6').marquee({
        delayBeforeStart: -5000,
        duration: 35000,
        startVisible: true,
        duplicated: true
      });
    });

    let marquees = document.querySelectorAll('#marquee');
    marquees.forEach((item) => {
      item.classList.add(`marquee-${Math.floor(Math.random() * (6 - 1 + 1) + 1)}`)
    })
  }
})

window.addEventListener('load', () => {
  if (document.querySelector('.team-body') === null ||
    (document.querySelector('.team-body') !== null && window.innerWidth <= 1279)) {
    return;
  }
  else {
    const firstPerson = document.querySelector('.team-body__container .team-body__item:nth-of-type(1)')
    const firstPersonFigure = document.querySelector('.team-body__container .team-body__item:nth-of-type(1) .team-body__item-image')
    const firstPersonHeight = firstPerson.offsetHeight
    const firstPersonOffsetTop = firstPerson.offsetTop
    const firstPersonFigureOffsetHeight = firstPersonFigure.offsetHeight

    const secondPerson = document.querySelector('.team-body__container .team-body__item:nth-of-type(2)')
    const secondPersonFigure = document.querySelector('.team-body__container .team-body__item:nth-of-type(2) .team-body__item-image')
    const secondPersonHeight = secondPerson.offsetHeight
    const secondPersonOffsetTop = secondPerson.offsetTop
    const secondPersonFigureOffsetHeight = secondPersonFigure.offsetHeight

    const thirdPerson = document.querySelector('.team-body__container .team-body__item:nth-of-type(3)')
    const thirdPersonFigure = document.querySelector('.team-body__container .team-body__item:nth-of-type(3) .team-body__item-image')
    const thirdPersonHeight = thirdPerson.offsetHeight
    const thirdPersonOffsetTop = thirdPerson.offsetTop
    const thirdPersonFigureOffsetHeight = thirdPersonFigure.offsetHeight;

    const teamItems = document.querySelectorAll('.team-body__item')

    function handlePersonContent(teamItem, index) {
      const contents = teamItem.querySelectorAll('.team-body__item-content')

      Array.from(contents).forEach((child) => {
        child.classList.remove('team-body__item-content--active');
      })

      contents[index].classList.add('team-body__item-content--active')
    }

    document.addEventListener('scroll', () => {

      // --- Первый член команды
      const firstPersonFigureOffsetTop = firstPersonFigure.offsetTop
      const finalFirstPersonFigureOffsetTop = firstPersonFigureOffsetTop + firstPersonOffsetTop
      const firstPersonDiff = finalFirstPersonFigureOffsetTop - firstPersonOffsetTop
      const firstPersonPercentScrolled = Math.floor((firstPersonDiff / (firstPersonHeight - firstPersonFigureOffsetHeight)) * 100)

      const firstPersonSegments = 3
      const firstPersonSegmentThreshold = Math.floor(100 / firstPersonSegments)
      const firstPersonCurrentIndex = Math.min(Math.floor(firstPersonPercentScrolled / firstPersonSegmentThreshold), firstPersonSegments - 1)

      handlePersonContent(teamItems[0], firstPersonCurrentIndex)

      // --- Второй член команды
      const secondPersonFigureOffsetTop = secondPersonFigure.offsetTop
      const finalSecondPersonFigureOffsetTop = secondPersonFigureOffsetTop + secondPersonOffsetTop
      const secondPersonDiff = finalSecondPersonFigureOffsetTop - secondPersonOffsetTop
      const secondPersonPercentScrolled = Math.floor((secondPersonDiff / (secondPersonHeight - secondPersonFigureOffsetHeight)) * 100)

      const secondPersonSegments = 3
      const secondPersonSegmentThreshold = Math.floor(100 / secondPersonSegments)
      const secondPersonCurrentIndex = Math.min(Math.floor(secondPersonPercentScrolled / secondPersonSegmentThreshold), secondPersonSegments - 1)

      handlePersonContent(teamItems[1], secondPersonCurrentIndex)


      // --- Третий член команды
      const thirdPersonFigureOffsetTop = thirdPersonFigure.offsetTop
      const finalThirdPersonFigureOffsetTop = thirdPersonFigureOffsetTop + thirdPersonOffsetTop
      const thirdPersonDiff = finalThirdPersonFigureOffsetTop - thirdPersonOffsetTop
      const thirdPersonPercentScrolled = Math.floor((thirdPersonDiff / (thirdPersonHeight - thirdPersonFigureOffsetHeight)) * 100)

      const thirdPersonSegments = 3
      const thirdPersonSegmentThreshold = Math.floor(100 / thirdPersonSegments)
      const thirdPersonCurrentIndex = Math.min(Math.floor(thirdPersonPercentScrolled / thirdPersonSegmentThreshold), secondPersonSegments - 1)

      handlePersonContent(teamItems[2], thirdPersonCurrentIndex)
    })
  }
})
