import { gsap } from "gsap";

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