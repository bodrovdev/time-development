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
  page_cover.classList.remove('cover-default--active');
  enableBodyScroll(mobile_menu);
};

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
    }, 7000)

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
$(function () {
  $('.marquee').marquee({
    delayBeforeStart: -5000,
    duration: 20000,
    startVisible: true,
    duplicated: true
  });
});

window.addEventListener('load', () => {
  if (document.querySelector('.team-body') === null ||
    (document.querySelector('.team-body') !== null && window.innerWidth <= 1279)) {
    return;
  }
  else {
    /**
     * TEAM
     */
    const firstPersonImages = [
      'https://picsum.photos/id/1/699/842',
      'https://picsum.photos/id/2/699/842',
      'https://picsum.photos/id/3/699/842'
    ]
    const firstPersonTexts = [
      {
        title: 'Иванов И.И',
        description: 'Ген директор',
      },
      {
        title: 'Иванов И.И 2',
        description: 'Ген директор 2',
      },
      {
        title: 'Иванов И.И 3',
        description: 'Ген директор 3',
      }
    ]

    const secondPersonImages = [
      'https://picsum.photos/id/4/699/842',
      'https://picsum.photos/id/5/699/842',
      'https://picsum.photos/id/6/699/842'
    ]
    const secondPersonTexts = [
      {
        title: 'Иванов И.И',
        description: 'Ген директор',
      },
      {
        title: 'Иванов И.И 2',
        description: 'Ген директор 2',
      },
      {
        title: 'Иванов И.И 3',
        description: 'Ген директор 3',
      }
    ]

    const thirdPersonImages = [
      'https://picsum.photos/id/7/699/842',
      'https://picsum.photos/id/8/699/842',
      'https://picsum.photos/id/9/699/842'
    ]
    const thirdPersonTexts = [
      {
        title: 'Иванов И.И',
        description: 'Ген директор',
      },
      {
        title: 'Иванов И.И 2',
        description: 'Ген директор 2',
      },
      {
        title: 'Иванов И.И 3',
        description: 'Ген директор 3',
      }
    ]

    const firstPerson = document.querySelector('.team-body__container .team-body__item:nth-of-type(1)')
    const firstPersonFigure = document.querySelector('.team-body__container .team-body__item:nth-of-type(1) .team-body__item-image')
    const firstPersonImg = document.querySelector('.team-body__container .team-body__item:nth-of-type(1) .team-body__item-img')
    const firstPersonTitle = document.querySelector('.team-body__container .team-body__item:nth-of-type(1) .team-body__label-title')
    const firstPersonText = document.querySelector('.team-body__container .team-body__item:nth-of-type(1) .team-body__label-text')
    const firstPersonHeight = firstPerson.offsetHeight
    const firstPersonOffsetTop = firstPerson.offsetTop
    const firstPersonFigureOffsetHeight = firstPersonFigure.offsetHeight

    const secondPerson = document.querySelector('.team-body__container .team-body__item:nth-of-type(2)')
    const secondPersonFigure = document.querySelector('.team-body__container .team-body__item:nth-of-type(2) .team-body__item-image')
    const secondPersonImg = document.querySelector('.team-body__container .team-body__item:nth-of-type(2) .team-body__item-img')
    const secondPersonTitle = document.querySelector('.team-body__container .team-body__item:nth-of-type(2) .team-body__label-title')
    const secondPersonText = document.querySelector('.team-body__container .team-body__item:nth-of-type(2) .team-body__label-text')
    const secondPersonHeight = secondPerson.offsetHeight
    const secondPersonOffsetTop = secondPerson.offsetTop
    const secondPersonFigureOffsetHeight = secondPersonFigure.offsetHeight

    const thirdPerson = document.querySelector('.team-body__container .team-body__item:nth-of-type(3)')
    const thirdPersonFigure = document.querySelector('.team-body__container .team-body__item:nth-of-type(3) .team-body__item-image')
    const thirdPersonImg = document.querySelector('.team-body__container .team-body__item:nth-of-type(3) .team-body__item-img')
    const thirdPersonTitle = document.querySelector('.team-body__container .team-body__item:nth-of-type(3) .team-body__label-title')
    const thirdPersonText = document.querySelector('.team-body__container .team-body__item:nth-of-type(3) .team-body__label-text')
    const thirdPersonHeight = thirdPerson.offsetHeight
    const thirdPersonOffsetTop = thirdPerson.offsetTop
    const thirdPersonFigureOffsetHeight = thirdPersonFigure.offsetHeight;

    // team_members.forEach((item), () => {
    //   let item_figure_offset_top = item.c
    // })

    document.addEventListener('scroll', () => {
      /**
       * 1
       */
      const firstPersonFigureOffsetTop = firstPersonFigure.offsetTop
      const finalFirstPersonFigureOffsetTop = firstPersonFigureOffsetTop + firstPersonOffsetTop
      const firstPersonDiff = finalFirstPersonFigureOffsetTop - firstPersonOffsetTop
      const firstPersonPercentScrolled = Math.floor((firstPersonDiff / (firstPersonHeight - firstPersonFigureOffsetHeight)) * 100)

      const firstPersonSegments = firstPersonImages.length
      const firstPersonSegmentThreshold = Math.floor(100 / firstPersonSegments)
      const firstPersonCurrentIndex = Math.min(Math.floor(firstPersonPercentScrolled / firstPersonSegmentThreshold), firstPersonSegments - 1)

      document.querySelectorAll('.team-body__item').forEach((item) => {
        Array.from(item.children[0].children).forEach((child) => {
          child.classList.remove('team-body__item-content--active');
        })
      })
      document.querySelector('.team-body__item').children[0].children[firstPersonCurrentIndex].classList.add('team-body__item-content--active');

      // firstPersonImg.src = firstPersonImages[firstPersonCurrentIndex]
      // firstPersonTitle.textContent = firstPersonTexts[firstPersonCurrentIndex].title
      // firstPersonText.textContent = firstPersonTexts[firstPersonCurrentIndex].description


      /**
       * 2
       */
      const secondPersonFigureOffsetTop = secondPersonFigure.offsetTop
      const finalSecondPersonFigureOffsetTop = secondPersonFigureOffsetTop + secondPersonOffsetTop
      const secondPersonDiff = finalSecondPersonFigureOffsetTop - secondPersonOffsetTop
      const secondPersonPercentScrolled = Math.floor((secondPersonDiff / (secondPersonHeight - secondPersonFigureOffsetHeight)) * 100)

      const secondPersonSegments = secondPersonImages.length
      const secondPersonSegmentThreshold = Math.floor(100 / secondPersonSegments)
      const secondPersonCurrentIndex = Math.min(Math.floor(secondPersonPercentScrolled / secondPersonSegmentThreshold), secondPersonSegments - 1)

      //???

      // secondPersonImg.src = secondPersonImages[secondPersonCurrentIndex]
      // secondPersonTitle.textContent = secondPersonTexts[secondPersonCurrentIndex].title
      // secondPersonText.textContent = secondPersonTexts[secondPersonCurrentIndex].description

      /**
       * 3
       */
      const thirdPersonFigureOffsetTop = thirdPersonFigure.offsetTop
      const finalThirdPersonFigureOffsetTop = thirdPersonFigureOffsetTop + thirdPersonOffsetTop
      const thirdPersonDiff = finalThirdPersonFigureOffsetTop - thirdPersonOffsetTop
      const thirdPersonPercentScrolled = Math.floor((thirdPersonDiff / (thirdPersonHeight - thirdPersonFigureOffsetHeight)) * 100)

      const thirdPersonSegments = thirdPersonImages.length
      const thirdPersonSegmentThreshold = Math.floor(100 / thirdPersonSegments)
      const currentIndex = Math.min(Math.floor(thirdPersonPercentScrolled / thirdPersonSegmentThreshold), secondPersonSegments - 1)

      //???

      // thirdPersonImg.src = thirdPersonImages[currentIndex]
      // thirdPersonTitle.textContent = thirdPersonTexts[currentIndex].title
      // thirdPersonText.textContent = thirdPersonTexts[currentIndex].description
    })
  }
})