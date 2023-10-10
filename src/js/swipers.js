let swiper6 = undefined;

function initSwiperCategory() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 700 && swiper6 == undefined) {
        swiper6 = new Swiper('.we-do__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (screenWidth >= 700 && swiper6 !== undefined) {
        swiper6.destroy();
        swiper6 = undefined;
    }
}

$(document).ready(function () {
    initSwiperCategory();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
    initSwiperCategory();
}); //Запуск функции при изменении размера



const swiper = new Swiper('.reviews__slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

const swiper1 = new Swiper('.technologies__slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper2 = new Swiper('.construction-slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper3 = new Swiper('.pages-slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper4 = new Swiper('.we-can__slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        1000: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper5 = new Swiper('.interesting__slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,

    breakpoints: {
        // when window width is >= 320px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});