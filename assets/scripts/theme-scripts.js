var widthW = $(window).width(), heightW = $(window).height();

function menuFixed() {
    var z = $('.js-navbar-fixed'),
        c = 'has-scroll';

    if (($(window).scrollTop() > 0) && ($(window).width() >= 992)) {
        z.addClass(c);
    }
    else {
        z.removeClass(c);
    }
}

function initLogoSlider() {
    if((($('body').width()) < 992) && (!$('.js-logo-list-slider').hasClass('slick-initialized'))){
        $('.js-logo-list-slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus: false,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    } else {
        if ($('.js-logo-list-slider').hasClass('slick-initialized')){
            if($(window).width() != widthW && $(window).height() != heightW){
                $('.js-logo-list-slider').slick('unslick');
            }
        }
    }
}

$(document).ready(function () {
    menuFixed();

    $(window).scroll(function () {
        menuFixed();
    });

    $('.js-testimonials-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true
    });

    if ($('.js-logo-list-slider').length) {
        initLogoSlider();
    }

    $(window).bind('resize', function(){
        if ($('.js-logo-list-slider').length) {
            initLogoSlider();
        }
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top) - 60
        }, 500);
    });
});