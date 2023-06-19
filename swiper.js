const photoSwiper = new Swiper('.photo-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  touchRatio: 1,
  grabCursor: true,
  
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    2100: {
      slidesPerView:4,
    }
  }
});