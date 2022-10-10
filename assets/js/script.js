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