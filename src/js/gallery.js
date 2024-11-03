import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
