import { gsap } from "gsap";

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// --- Анимация для хедера на главной странице
window.addEventListener('load', () => {
  if (document.getElementById('puzzle') === null) {
    return;
  }
  else {
    let index_circles_text_tl = gsap.timeline({ paused: true });
    index_circles_text_tl.add(gsap.to("#puzzle_middle_text", { duration: 0.5, y: 50 }));
    index_circles_text_tl.add(gsap.to("#puzzle_right_text", { duration: 0.5, delay: -0.5, y: -50 }));

    let index_circles_tl = gsap.timeline({ paused: true });
    index_circles_tl.add(gsap.to("#puzzle_left", { duration: 0.5, y: -50 }));
    index_circles_tl.add(gsap.to("#puzzle_middle", { duration: 0.5, delay: -0.5, y: 80 }));
    index_circles_tl.add(gsap.to("#puzzle_right", { duration: 0.5, delay: -0.5, y: -150 }));

    let puzzle = document.querySelectorAll('.heading__puzzle-image');
    puzzle.forEach((item) => {
      item.addEventListener('mouseover', () => {
        index_circles_text_tl.play();
        index_circles_tl.play();
      })

      item.addEventListener('mouseleave', () => {
        index_circles_text_tl.reverse();
        index_circles_tl.reverse();
      })
    })
  }
})

// --- Анимация для иконки скролла
window.addEventListener('load', () => {
  if (document.getElementById('scroll_help') === null) {
    return;
  }
  else {
    let scroll_help_tl = gsap.timeline({ repeat: -1 });
    scroll_help_tl.add(gsap.to("#scroll_help", { y: 0, duration: 2, }));
    scroll_help_tl.add(gsap.to("#scroll_help", { y: -10, duration: 2, }));
    scroll_help_tl.add(gsap.to("#scroll_help", { y: 10, duration: 2, }));
    scroll_help_tl.add(gsap.to("#scroll_help", { y: 0, duration: 2, }));
  }
});


// --- Следяющий за курсором элемент
let circle = document.getElementById('circle_follow');
let circle_small = document.getElementById('circle_follow_small');
function moveCircle(e) {
  gsap.to(circle, { css: { left: e.clientX, top: e.clientY }, duration: 0.3, });
  gsap.to(circle_small, { css: { left: e.clientX, top: e.clientY }, duration: 0.1, });
}

window.addEventListener('mousemove', moveCircle);

// --- Изменение следящего курсора
window.addEventListener('load', () => {
  if (document.querySelector('.follow-change') === null) {
    return;
  }
  else {
    document.querySelectorAll('.follow-change').forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        e.target.classList.contains('button-yellow') ? circle.classList.add('circle--active-yellow') : circle.classList.add('circle--active');
      })
    })

    document.querySelectorAll('.follow-change').forEach((item) => {
      item.addEventListener('mouseleave', () => {
        circle.classList.remove('circle--active-yellow');
        circle.classList.remove('circle--active');
      })
    })

    document.querySelectorAll('.index-projects__slide-link').forEach((item) => {
      item.addEventListener('mouseenter', (e) => {

        if (e.target.classList.contains('index-projects__slide-link') || e.target.parent.classList.contains('index-projects__slide-link')) {
          circle.classList.add('circle--active-yellow');
        }

      })
      item.addEventListener('mouseleave', (e) => {
        circle.classList.remove('circle--active-yellow');
        circle.classList.remove('circle--active');
      })
    })
  }
})

// --- Изменение курсора в мобильном меню
window.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('main-nav__nav-menu--mobile--active')) {
    circle.classList.add('circle--active-yellow');

    document.querySelector('.main-nav__nav-menu--mobile--active').addEventListener('mouseleavse', () => {
      circle.classList.remove('circle--active-yellow');
      circle.classList.remove('circle--active');
    })
  }
  else {
    return;
  }
})

// --- Анимация для мобильной версии блока с командой
window.addEventListener('load', () => {
  if (document.getElementById('team-item') === null) {
    return;
  }
  else {
    let team_items = document.querySelectorAll('#team-item');

    team_items.forEach((item) => {
      window.addEventListener('scroll', () => {
        if (isInViewport(item)) {
          let team_mobile_tl = gsap.timeline({});
          team_mobile_tl.add(gsap.to(item.querySelector('picture'), { left: 0, transform: 'none', duration: 0.5, }));
          team_mobile_tl.add(gsap.to(item.querySelector('.about-mobile__team-img'), { borderRadius: 0, width: "100%", height: "100%", delay: -0.5, duration: 0.5 }));
          team_mobile_tl.add(gsap.to(item.querySelector('.about-mobile__team-desc'), { transform: "translateX(0)", width: "100%", opacity: 1, duration: 0.5, delay: -0.5 }));
        }
      })
    })
  }
})

// --- Прелоадер
window.addEventListener('load', () => {
  if (document.querySelector('.preloader') === null) {
    return;
  }
  else {
    // let preloader = document.querySelector('.preloader');

    // let preloader_tl = gsap.timeline({});
    // preloader_tl.add(gsap.to(preloader, { opacity: 0, duration: 1, ease: "power3.out", delay: 5.37 }));

    // let preloader_wrapper = document.querySelector('.preloader__wrapper');
    // let preloader_overlay = document.querySelector('.preloader__overlay');
    // let preloader_text_first = document.querySelector('.preloader__text-first');
    // let preloader_text_second = document.querySelector('.preloader__text-second');


    // let index_preloader_tl = gsap.timeline({});
    // index_preloader_tl.add(gsap.to(preloader_text_first, { opacity: 1, duration: 1, ease: "power3.out", }));
    // index_preloader_tl.add(gsap.to(preloader_text_first, { opacity: 0, duration: 1, ease: "power3.out", delay: 0.5 }));
    // index_preloader_tl.add(gsap.to(preloader_text_second, { opacity: 1, duration: 0.5, ease: "power3.out", }));
    // index_preloader_tl.add(gsap.to(preloader_overlay, { transform: "translate(-50%, -50%) scale(0)", duration: 3, ease: "power3.out", }))
    // index_preloader_tl.add(gsap.to(preloader_wrapper, { opacity: 0, duration: 1, ease: "power3.out", delay: -0.5 }))
  }
})