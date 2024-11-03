import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';

Swiper.use([Pagination]);

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
