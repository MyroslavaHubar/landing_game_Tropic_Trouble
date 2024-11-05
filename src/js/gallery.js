import Swiper from 'swiper/bundle';
import 'swiper/scss';

const swiper = new Swiper('.gallery-swiper', {
  loop: true,
  speed: 800,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
