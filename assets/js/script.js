if ($('.partners__list').length) {
    var swiperPartners = new Swiper(".partners__list", {
        slidesPerView: 6,
        spaceBetween: 3,
        mousewheel: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            481: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 7,
            },
        },
    });
}
if ($('.hero__big-slider').length) {
    var swiperHero = new Swiper(".hero__big-slider", {
        mousewheel: true,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        preloadImages: false,
        lazy: true,
        navigation: {
            nextEl: ".swiper-button-next vertical",
            prevEl: ".swiper-button-prev vertical",
        },
    });
}

document.querySelectorAll('.switch-item').forEach(x=>{
    x.addEventListener("click", function() {
        $( ".switch-item.switch-active" ).removeClass('switch-active');
        $( this ).addClass( 'switch-active');
      })
});

if ($('.main-swiper').length) {
    var swiper = new Swiper(".main-swiper", {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
    });
}