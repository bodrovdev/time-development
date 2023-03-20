import Swiper from 'swiper/bundle';

let project_slider = new Swiper('.index-projects__slider', {
  speed: 500,
  slidesPerView: "auto",

  breakpoints: {
    320: {
      spaceBetween: 28,
    },
    1024: {
      spaceBetween: 50,
    }
  }
});

var init = false;

function archiveSlider() {
  if (window.innerWidth <= 1023) {
    if (!init) {
      init = true;
      var archiveSlider = new Swiper(".press-body__slider", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 31,
        centeredSlides: true,

        pagination: {
          el: ".press-body__slider-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    archiveSlider.destroy();
    init = false;
  }
}
archiveSlider();
window.addEventListener("resize", archiveSlider);