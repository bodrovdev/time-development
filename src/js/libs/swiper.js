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