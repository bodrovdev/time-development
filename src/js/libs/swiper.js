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

let project_single_slider = new Swiper('.single-projects__slider', {
  speed: 500,
  slidesPerView: "auto",
  spaceBetween: 57,


  navigation: {
    nextEl: '.single-projects__arrows-arrow--next',
    prevEl: '.single-projects__arrows-arrow--prev',
  },

  pagination: {
    el: ".single-projects__slider-pagination",
    clickable: true,
  },

})

var init = false;

function archiveSlider() {
  if (window.innerWidth <= 1279) {
    if (!init) {
      init = true;
      var archiveSlider = new Swiper(".press-body__slider", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 31,
        // centeredSlides: true,

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

let project_page_slider = new Swiper('.project-slider__slider', {
  speed: 500,
  slidesPerView: "auto",
  spaceBetween: 82,
});