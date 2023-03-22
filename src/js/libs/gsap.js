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
    index_circles_text_tl.add(gsap.to("#puzzle_middle_text", { duration: 0.5, delay: 0.5, y: 50 }));
    index_circles_text_tl.add(gsap.to("#puzzle_right_text", { duration: 0.5, y: -50 }));

    let index_circles_tl = gsap.timeline({ paused: true });
    index_circles_tl.add(gsap.to("#puzzle_left", { duration: 0.5, y: -50 }));
    index_circles_tl.add(gsap.to("#puzzle_middle", { duration: 0.5, y: 80 }));
    index_circles_tl.add(gsap.to("#puzzle_right", { duration: 0.5, y: -150 }));

    let puzzle = document.getElementById('puzzle');

    puzzle.addEventListener('mouseover', () => {
      index_circles_text_tl.play();
      index_circles_tl.play();
    })
    puzzle.addEventListener('mouseleave', () => {
      index_circles_text_tl.reverse();
      index_circles_tl.reverse();
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
  }
})

let container = document.querySelector('.about-mobile__team-wrapper');
let setX = window.width() / 2 - demoDiv.outerWidth() / 2;
let setY = window.height() / 2 - demoDiv.outerHeight() / 2;

animation
  .set(".demo", { x: setX, y: setY })
  .from(".text-final", { y: 80, opacity: 0, ease: "back.out(5)", duration: 1 })
  .to(".demo", { x: 0, y: 0, scale: 0.6, ease: "power1.out", duration: 1 }, "+=.5");

window.addEventListener('load', () => {
  if (document.getElementById('team-item') === null) {
    return;
  }
  else {
    let team_items = document.querySelectorAll('#team-item');

    team_items.forEach((item) => {
      window.addEventListener('scroll', () => {
        if (isInViewport(item)) {
          gsap.to('#team-item', { duration: 5, css: { position: 'relative', left: 0 } });
        }
      })
    })
  }
})