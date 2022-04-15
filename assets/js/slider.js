// slider

const swiper = new Swiper(".slider-item", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grapbCursor: true,
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  // end slider

// featured products
const swiper2 = new Swiper(".featured-slider", {
  spaceBetween: 50,
  grapbCursor: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
breakpoints:{
  400: {
    slidesPerView: 1,
  },

  450: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
}
});

// featured products
const swiper3 = new Swiper(".brand-slide", {
  spaceBetween: 50,
  grapbCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  slidesPerView: 1,
  loop:true,

  breakpoints:{

  450: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
}
});



