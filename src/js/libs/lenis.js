// import Lenis from '@studio-freight/lenis';

// window.addEventListener('load', () => {
//   if (window.innerWidth < 767) {
//     return;
//   }
//   else {
//     const lenis = new Lenis({
//       duration: 1.5,
//       easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
//       direction: "vertical",
//       gestureDirection: "vertical",
//       smooth: true,
//       smoothTouch: false,
//       touchMultiplier: 2,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     document.getElementById('map').addEventListener('mouseover', () => {
//       lenis.stop();
//     })

//     document.getElementById('map').addEventListener('mouseleave', () => {
//       lenis.start();
//     })

//     if (document.querySelector('#modal_form') !== null) {
//       document.querySelector('#modal_form').addEventListener('submit', () => {
//         console.log('Должен оставиться тут');
//         lenis.stop();
//       })

//       document.getElementById('modal_close').addEventListener('click', () => {
//         modal.classList.remove('modal--active');
//         lenis.start();
//       })

//       document.getElementById('modal').addEventListener('click', (e) => {
//         if (e.target !== e.currentTarget) {
//           return;
//         }
//         else {
//           lenis.start();
//         }
//       })
//     }
//   }
// })