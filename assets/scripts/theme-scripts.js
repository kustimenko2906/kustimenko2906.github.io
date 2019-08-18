var widthW = $(window).width(), heightW = $(window).height();

// function initLogoSlider() {
//     if((($('body').width()) < 992) && (!$('.js-logo-list-slider').hasClass('slick-initialized'))){
//         $('.js-logo-list-slider').slick({
//             infinite: true,
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 3000,
//             pauseOnHover: false,
//             pauseOnFocus: false,
//             dots: false,
//             arrows: false,
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });
//     } else {
//         if ($('.js-logo-list-slider').hasClass('slick-initialized')){
//             if($(window).width() != widthW && $(window).height() != heightW){
//                 $('.js-logo-list-slider').slick('unslick');
//             }
//         }
//     }
// }

function removeClass() {
    var cl =  $('.bg-panel').attr("class").split(" ");
    var newcl =[];
    for(var i=0;i<cl.length;i++){
        r = cl[i].search(/bkg+/);
        if(r)newcl[newcl.length] = cl[i];
    }
    $('.bg-panel').removeClass().addClass(newcl.join(" "));
}

function addAnimateClass(id) {
    $('#'+id).closest('.animate-icons-wrap').addClass(id);
}

function startCounter(){
    $('.js-counter').each(function (index) {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(parseFloat(now).toFixed(size));
            }
        });
    });
}

function animateSvg(id) {
    if(id === 'arrow-icon') {
        new Vivus(id,   {
            type: "scenario-sync",
            duration: 30,
            start: "inViewport",
            dashGap: 30,
            forceRender: false
        });
    } else {
        new Vivus(id,   {
            type: "scenario-sync",
            duration: 20,
            start: "inViewport",
            dashGap: 20,
            forceRender: false
        });
    }
}

function reinitSlider(e) {
    setTimeout(function(){
        $(e).slick('setPosition');
    }, 1000);
}

function regionLoad(id) {
    $('#region-loaded').load("ajax/"+id+".html", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success") {
            console.log("External content loaded successfully!");
        }
    });
}

$(document).ready(function () {
    $('.js-bg-tabs a').on('click', function (e) {
        $('.bg-panel').removeClass('fade-in');
        var getBg = $(this).data("bg");

        removeClass();

        $('.bg-panel').addClass(getBg);
        setTimeout(function(){
            $('.bg-panel').addClass('fade-in');
        }, 10);
    });

    $('.js-adv-info-slider-2').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('.js-adv-info-slider-3').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('.js-adv-info-slider-4').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('.js-adv-info-slider-5').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('.js-adv-info-slider-6').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('.js-adv-info-slider-7').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('.js-adv-info-slider-8').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1,
    });

    $('.js-adv-info-slider').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    // js-section-region-slider
    $('.js-section-region-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1
    });

    $('#vmap').vectorMap({
        map: 'ukraine_ua',
        backgroundColor: 'transparent',
        borderColor: '#fff',
        color: '#FFE300',
        hoverColor: '#00C6D7',
        selectedColor: '#00C6D7',
        borderWidth: 3,
        borderOpacity: 1,
        // selectedRegions: '18',
        enableZoom: false,
        showTooltip: false,
        pins: {
            "05": "\u003cstrong\u003eВінницька\u003c/strong\u003e область",
            "07": "\u003cstrong\u003eВолинська\u003c/strong\u003e область",
            "09": "\u003cstrong\u003eЛуганська\u003c/strong\u003e область",
            "12": "\u003cstrong\u003eДніпропетровська\u003c/strong\u003e область",
            "14": "\u003cstrong\u003eДонецька\u003c/strong\u003e область",
            "18": "\u003cstrong\u003eЖитомирська\u003c/strong\u003e область",
            "21": "\u003cstrong\u003eЗакарпатська\u003c/strong\u003e область",
            "23": "\u003cstrong\u003eЗапорізька\u003c/strong\u003e область",
            "26": "\u003cstrong\u003eІвано-Франківська\u003c/strong\u003e область",
            "32": "\u003cstrong\u003eКиївська\u003c/strong\u003e область",
            "35": "\u003cstrong\u003eКіровоградська\u003c/strong\u003e область",
            "43": "\u003cstrong\u003eАРК\u003c/strong\u003e",
            "46": "\u003cstrong\u003eЛьвівська\u003c/strong\u003e область",
            "48": "\u003cstrong\u003eМиколаївська\u003c/strong\u003e область",
            "51": "\u003cstrong\u003eОдеська\u003c/strong\u003e область",
            "53": "\u003cstrong\u003eПолтавська\u003c/strong\u003e область",
            "56": "\u003cstrong\u003eРівненська\u003c/strong\u003e область",
            "59": "\u003cstrong\u003eСумська\u003c/strong\u003e область",
            "61": "\u003cstrong\u003eТернопільська\u003c/strong\u003e область",
            "63": "\u003cstrong\u003eХарківська\u003c/strong\u003e область",
            "65": "\u003cstrong\u003eХерсонська\u003c/strong\u003e область",
            "68": "\u003cstrong\u003eХмельницька\u003c/strong\u003e область",
            "71": "\u003cstrong\u003eЧеркаська\u003c/strong\u003e область",
            "74": "\u003cstrong\u003eЧернігівська\u003c/strong\u003e область",
            "77": "\u003cstrong\u003eЧернівецька\u003c/strong\u003e область",
        },
        pinMode: 'content',
        onRegionClick: function(element, code, region) {
            // regionLoad(code.toUpperCase())
        }
    });

    $('#fullpage').fullpage({
        controlArrows: true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
        menu: '#menu',
        lockAnchors: false,
        verticalCentered: false,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: false,
        normalScrollElements: '.modal-dialog .modal-content, #vmap',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        onLeave: function(origin, destination, direction){
            if(origin == 2 && direction =='down'){
                setTimeout(function(){
                    animateSvg('money-icon');
                    startCounter();
                }, 200);
            }
        },
    });

    $('#moveSectionDown').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    $('.js-top-section-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true
    });
});