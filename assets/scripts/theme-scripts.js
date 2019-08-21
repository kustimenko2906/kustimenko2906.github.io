var widthW = $(window).width(),
    heightW = $(window).height();

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

    if(id === 'car-icon') {
        $("#car-icon g").delay(500).each(function(i) {
            $(this).delay(200 * i).queue(function() {
                $(this).addClass("fade-show");
                $(this).dequeue();
            })
        })
    } else if(id === 'money-icon') {
        $("#money-icon path").delay(500).each(function(i) {
            $(this).delay(200 * i).queue(function() {
                $(this).addClass("fade-show");
                $(this).dequeue();
            })
        })
    }
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
    if(id === 'arrow-icon' || id === 'man-icon') {
        new Vivus(id,   {
            type: "scenario-sync",
            duration: 50,
            start: "inViewport",
            dashGap: 50,
            forceRender: false
        });
    }  else if (id === 'car-icon') {
        new Vivus(id,   {
            type: "scenario-sync",
            duration: 20,
            start: "inViewport",
            dashGap: 20,
            forceRender: true
        }, function doDone(obj) {
            console.log(obj);
            obj.el.classList.add('fill-1', 'fill-2', 'fill-3', 'fill-4', 'fill-5', 'fill-6', 'fill-7', 'clear-stroke');
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
    }, 300);
}

function scrollToMap() {
    $('html, body').animate({
        scrollTop: $("#region-loaded").offset().top
    }, 2000);
}

function regionLoad(id) {
    $('#region-loaded').load("ajax/"+id+".html", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success") {
            console.log("External content loaded successfully!");
        } else {
            alert('No data of this region');
        }
    });
}

$(window).on('load resize', function (e) {
    if($(window).width() < 992) {
        e.preventDefault();
        $.fn.fullpage.destroy('all');
    } else {
        if(!$('html').hasClass('fp-enabled')) {
            fpInint();
        }
    }
});

$(document).ready(function () {
    regionLoad('30');

    $('body').on('click', '.vmap-capital', function (e) {
        $('.vmap-capital').addClass('selected');
        regionLoad('30');
        $.fn.fullpage.moveSectionDown();
    });

    $('.js-feature-tabs a:not(.export-feature), .js-feature-tabs a:not(.money-feature)').on('click', function (e) {
        $("#car-icon g").removeClass("fade-show");
        $("#car-icon g").removeAttr("class");
        $("#money-icon path").removeClass("fade-show");
        $("#money-icon path").removeAttr("class");
    });

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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
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
        showTooltip: true,
        pins: {
        //     "05": "\u003cstrong\u003eВінницька\u003c/strong\u003e область",
        //     "07": "\u003cstrong\u003eВолинська\u003c/strong\u003e область",
        //     "09": "\u003cstrong\u003eЛуганська\u003c/strong\u003e область",
        //     "12": "\u003cstrong\u003eДніпропетровська\u003c/strong\u003e область",
        //     "14": "\u003cstrong\u003eДонецька\u003c/strong\u003e область",
        //     "18": "\u003cstrong\u003eЖитомирська\u003c/strong\u003e область",
        //     "21": "\u003cstrong\u003eЗакарпатська\u003c/strong\u003e область",
        //     "23": "\u003cstrong\u003eЗапорізька\u003c/strong\u003e область",
        //     "26": "\u003cstrong\u003eІвано-Франківська\u003c/strong\u003e область",
        //     "32": "\u003cstrong class='vmap-capital selected'\u003eКиїв\u003c/strong\u003e",
        //     "32": "\u003cstrong\u003eКиївська\u003c/strong\u003e область",
        //     "35": "\u003cstrong\u003eКіровоградська\u003c/strong\u003e область",
        //     "43": "\u003cstrong\u003eАРК\u003c/strong\u003e",
        //     "46": "\u003cstrong\u003eЛьвівська\u003c/strong\u003e область",
        //     "48": "\u003cstrong\u003eМиколаївська\u003c/strong\u003e область",
        //     "51": "\u003cstrong\u003eОдеська\u003c/strong\u003e область",
        //     "53": "\u003cstrong\u003eПолтавська\u003c/strong\u003e область",
        //     "56": "\u003cstrong\u003eРівненська\u003c/strong\u003e область",
        //     "59": "\u003cstrong\u003eСумська\u003c/strong\u003e область",
        //     "61": "\u003cstrong\u003eТернопільська\u003c/strong\u003e область",
        //     "63": "\u003cstrong\u003eХарківська\u003c/strong\u003e область",
        //     "65": "\u003cstrong\u003eХерсонська\u003c/strong\u003e область",
        //     "68": "\u003cstrong\u003eХмельницька\u003c/strong\u003e область",
        //     "71": "\u003cstrong\u003eЧеркаська\u003c/strong\u003e область",
        //     "74": "\u003cstrong\u003eЧернігівська\u003c/strong\u003e область",
        //     "77": "\u003cstrong\u003eЧернівецька\u003c/strong\u003e область",
        },
        pinMode: 'content',
        onRegionClick: function(element, code, region) {
            regionLoad(code.toUpperCase());
            $('.vmap-capital').removeClass('selected');
            $.fn.fullpage.moveSectionDown();
        }
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

function fpInint() {
    $('#fullpage').fullpage({
        controlArrows: true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
        menu: '#menu',
        lockAnchors: false,
        verticalCentered: false,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: false,
        normalScrollElements: '.modal-dialog .modal-content',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        onLeave: function(origin, destination, direction){
            var params = {
                origin: origin,
                destination:destination,
                direction: direction
            };

            if(params.origin === 2 && params.direction ==='down'){
                setTimeout(function(){
                    // animateSvg('money-icon');

                }, 200);
            }
            if (params.origin !== 0 && params.direction ==='down') {
                $('.fl-nav-arrow.naw-arrow-top').show();
            }
        },
        afterLoad: function(origin){
            if(origin === 'firstPage') {
                $('.fl-nav-arrow.naw-arrow-top').hide();
            } else if (origin === '4thpage') {
                $('.fl-nav-arrow.naw-arrow-bottom').hide();
            } else if (origin !== '4thpage') {
                $('.fl-nav-arrow.naw-arrow-bottom').show();
            }

            if (origin === '3rdPage') {
                addAnimateClass('money-icon');
                startCounter();
            } else {
                $("#money-icon path").removeClass("fade-show");
                $("#money-icon path").removeAttr("class");
            }
        }
    });
}