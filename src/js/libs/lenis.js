import Lenis from '@studio-freight/lenis';

window.addEventListener('load', () => {
  if (window.innerWidth < 767) {
    return;
  }
  else {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.getElementById('map').addEventListener('mouseover', () => {
      lenis.stop();
    })

    document.getElementById('map').addEventListener('mouseleave', () => {
      lenis.start();
    })
  }
})