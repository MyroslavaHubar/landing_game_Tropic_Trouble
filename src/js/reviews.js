import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.reviews-swiper', {
  slidesPerView: 1,

  spaceBetween: 18,

  autoplay: {
    delay: 4000,
  },

  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 44,
      centeredSlides: true,
    },
  },
});
