// import Swiper from 'swiper';
// import 'swiper/css';
// import { Pagination, EffectCoverflow } from 'swiper/modules';

// import 'swiper/css/pagination';

// Swiper.use([Pagination, EffectCoverflow]);

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,

//   breakpoints: {
//     1200: {
//       // grabCursor: true,
//       // slidesPerView: auto,
//       slidesPerView: 3,
//       spaceBetween: 24,
//       centeredSlides: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 10,
//         modifier: 1,
//         slideShadows: true,
//       },
//     },
//   },

//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
// });

import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([EffectCoverflow, Pagination]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
      // effect: 'coverflow',
      // coverflowEffect: {
      //   rotate: 30,
      //   stretch: 100,
      //   depth: 200,
      //   modifier: 1,
      //   slideShadows: false,
      // },
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
