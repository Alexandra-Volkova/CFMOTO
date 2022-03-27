new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    slidesPerView: 2.2,
    loop: true,
    speed: 1e3,
    spaceBetween: 15,
    slideToClickedSlide: true,
    lazy: { loadPrevNext: true },
    preloadImages: false,
    watchSlidesProgress: true,
    watchSlidesVisibillity: true,
    mousewheel:{
        sensitivity:1   ,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1.9, spaceBetween: 10 },
      768: { slidesPerView: 2.2, spaceBetween: 15 },
    },
   
});

new Swiper('.swiper-container--2', {
    slidesPerView: 2,
    observer: true,
    observeParents: true,
    loop: true,
    speed: 1e3,
    spaceBetween: 15,
    slideToClickedSlide: true,
    lazy: { loadPrevNext: true },
    preloadImages: false,
    watchSlidesProgress: true,
    watchSlidesVisibillity: true,
    mousewheel:{
        sensitivity:1   ,
    },
    pagination: {
      el: ".swiper-pagination--2",
      type: "bullets",
      clickable: true,
    },
});