$(function() {
    // ie fix
    if ($.browser.msie && $.browser.version == 9) {
        $('input, textarea').placeholder();
    }

    // select
    if ($('.js-select').length) {
        $('.js-select').selectbox({
            effect: "fade"
        });
    }

    if ($('.js-go-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.js-go-to-top').addClass('show');
                } else {
                    $('.js-go-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.js-go-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    //close hidden menu in select modal car page (click out of area)
    $(document).mouseup(function (e){
        var hiddenItem = $(".pr-select-model-list .list-item");
        if (!hiddenItem.is(e.target)
            && hiddenItem.has(e.target).length === 0) {
            hiddenItem.find('.hidden-list').hide();
            $(".pr-select-model-list .toggle-link").removeClass('active');
        }
    });

    $('.pr-account-menu-overlay').on('click', function () {
        if($('body').width() < 750){
            $(".pr-block-account-page").removeClass('opened-menu');
            $("body").removeClass('overflow-content');
            $('.js-account-menu-toggle').removeClass('active');

            $('.pr-block-account-page').removeClass('no-left-menu');
            $('.left-account-layer').hide();
        }
    });

    $(document).mouseup(function (e){
        var hiddenFilter = $(".pr-aside-filters.removed-mob-content");
        if (!hiddenFilter.is(e.target) && hiddenFilter.has(e.target).length === 0) {

            if(!$('.pr-block-mobile-sorting .filter-button').is(e.target)){
                hiddenFilter.hide();
                $('.pr-block-mobile-sorting .filter-button').removeClass('active');
            }
        }
    });

    $(document).mouseup(function (e){
        var hiddenSort = $(".js-top-products-sort");
        if (!hiddenSort.is(e.target) && hiddenSort.has(e.target).length === 0) {

            if(!$('.pr-block-mobile-sorting .sorting-button').is(e.target) && $('body').width() < 1200){
                hiddenSort.hide();
                $('.pr-block-mobile-sorting .sorting-button').removeClass('active');
            }
        }
    });

    $(document).mouseup(function (e){
        var hiddenDrop = $(".pr-dropdown-menu");
        if (!hiddenDrop.is(e.target)
            && hiddenDrop.has(e.target).length === 0) {
            hiddenDrop.find('.inner-list').hide();
            hiddenDrop.closest('.pr-dropdown-menu').find('.js-dropdown-toggle').removeClass('active');
        }
    });

    $('.js-drop-selected').on('click', function () {
        var selectedVal = $(this).text();
        $(this).closest('.pr-dropdown-menu').find('.js-dropdown-toggle').text(selectedVal);
        $(this).closest('.inner-list').hide();
        $(this).closest('.pr-dropdown-menu').find('.js-dropdown-toggle').removeClass('active');
    });
    $('.js-dropdown-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    //radio
    if ($('.js-radio-style').length) {
        $('.js-radio-style').uniform({
            radioClass: 'pr-radio-wrap'
        });
    }

    $('.pr-block-order-form input[type="radio"]').on('change', function () {
        $(this).closest('.radio-list-group').find('.label').removeClass('active');
        $(this).closest('.label').addClass('active');
    });

    // tabs
    $('.js-tabs-elements a').on('click', function () {
        var links, tabs, currentTab, currentClass;
        links = $(this).closest('.js-tabs-elements').find('a');
        tabs = $(this).closest('.pr-block-prod-tabs').find('.js-tab');
        currentClass = $(this).data('tab');
        currentTab =$(this).closest('.pr-block-prod-tabs').find('.tab-'+currentClass);

        links.removeClass('selected');
        $(this).addClass('selected');
        tabs.hide();
        currentTab.show();
    });

    $('.js-order-latest-row').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.order-list-item').toggleClass('active');
        $(this).next().slideToggle();
    });



   $('.pr-select-model-list .toggle-link').on('click', function () {
        $(this).toggleClass('active');
       $(this).next().slideToggle();

   });

    $('.js-account-menu-toggle').on('click', function () {

        if(($('body').width() + 5) < 750){
            $('body').toggleClass('overflow-content');
        }
        $(this).toggleClass('active');
        $(this).closest('.pr-block-account-page').toggleClass('no-left-menu');
        $(this).closest('.pr-block-account-page').toggleClass('opened-menu');

        $(this).closest('.pr-block-account-page').find('.left-account-layer').slideToggle();
    });

    $('.js-account-menu-close').on('click', function () {
        $('body').removeClass('overflow-content');
        $('.js-account-menu-toggle').toggleClass('active');
        $(this).closest('.pr-block-account-page').toggleClass('no-left-menu');
        $(this).closest('.pr-block-account-page').toggleClass('opened-menu');

        $(this).closest('body').find('.left-account-layer').hide();
    });

    $('.js-form-field input').focus(function() {
        $(this).next().addClass('active');
    });

    $('.js-form-field input').blur(function() {
        if(!($(this).val()).length) {
            $(this).next().removeClass('active');
        }
    });

    //checkbox
    if ($('.js-checkbox-style').length) {
        $('.js-checkbox-style').uniform({
            checkboxClass: 'pr-checkbox-wrap'
        });
    }

    //toggle filter block in mob
    $('.js-block-mob-filters-holder .filter-button').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.js-block-mob-filters-holder').find('.js-filter-block-wrap').slideToggle();
    });
    //toggle top sort block in mob
    $('.js-block-mob-filters-holder .sorting-button').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.js-block-mob-filters-holder').next().slideToggle();
    });

    $('.js-catalog-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.js-category-link-wrap').find('.category-list').slideToggle();
    });

    //category tree click
    $('.js-aside-filter-tree .expand').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    //filter toggle
    $('.js-filter-toggle').on('click', function () {
        $(this).toggleClass('opened');
        $(this).next().slideToggle();
    });

    // tablet contacts toggle
    $('.js-header-contacts-toggle').click(function(){
        $(this).toggleClass('open');
        $('.js-header-contacts').fadeToggle(300);

        if ($('body').width() < 750) {
            $('.js-block-currency').hide();
        }
    });

    // close target
    $(document).on('click touchstart', function (event) {
        var $target = $(event.target);

        if (!$target.closest('.block-cabinet').length) {
            $('.js-cabinet-toggle').closest('li').removeClass('open');
        }

        if (!$('.js-catalog-toggle').is(event.target) && !$('.category-link').is(event.target)  && !$target.closest('.category-list').length) {
            $('.js-catalog-toggle').removeClass('active');
            $('.js-catalog-toggle').closest('.js-category-link-wrap').find('.category-list').slideUp();
        }

        if (!$target.closest('.block-menu.tablet').length) {
            $('.js-tablet-menu-toggle').removeClass('open').next('.js-tablet-menu').fadeOut(300);
            $('.js-tablet-menu').find('.level-1, .level-2').fadeOut(300);
        }

        if ($('body').width() < 1200) {
            if (!$target.closest('.block-contacts').length && !$target.is('.js-header-contacts-toggle')) {
                $('.js-header-contacts-toggle').removeClass('open');
                $('.js-header-contacts').fadeOut(300);
            }
        }

        if ($('body').width() < 750) {
            if (!$target.closest('.js-block-currency').length && !$target.is('.js-block-currency-toggle')) {
                $('.js-block-currency').fadeOut(300);
            }
        }
    });

    // cabinet menu toggle
    $('.js-block-currency-toggle').click(function(){
        $('.js-block-currency').fadeToggle(300);
    });

    // mobile currency toggle
    $('.js-cabinet-toggle').click(function(){
        $(this).closest('li').toggleClass('open');
    });

    // tablet menu toggle
    $('.js-tablet-menu-toggle').click(function(){
        $(this).toggleClass('open').next('.js-tablet-menu').fadeToggle(300);
        $('.js-tablet-menu').find('.level-1, .level-2').fadeOut(300);

        tabletMenuSync();
    });
    $('.js-tablet-menu .expand').click(function(){
        if ($(this).closest('.level-1').length) {
            $('.js-tablet-menu .level-2').hide()
        } else {
            $('.js-tablet-menu .level-1').hide()
        }
        $(this).closest('li').find('ul').first().show();
        tabletMenuSync();

        if (!$(this).hasClass('clicked-link')) {
            $(this).addClass('clicked-link');
        } else {
            $(this).removeClass('clicked-link');
            $(this).closest('li').find('ul').hide();
        }
    });
    $('.js-tablet-menu .back').click(function(){
        $(this).closest('ul').hide();
        tabletMenuSync();
    });

    // count block
    $('.js-block-count .plus, .js-block-count .minus').click(function(){
        var $blockValue = $(this).parent().find('.value');
        var value = parseFloat($blockValue.val());
        if ($(this).hasClass('plus')) {
            value = value + 1;
        } else {
            if (value > 1) {
                value = value - 1;
            }
        }
        $blockValue.val(value);
    });

    // product carousel
    if ($('.js-full-width-slider').length) {
        $('.js-full-width-slider .block-line').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true
        });
    }

    // product carousel
    if ($('.js-block-product-carousel').length) {
        $('.js-block-product-carousel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1340,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 750,
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
    }

    // brand carousel
    if ($('.js-block-brand-carousel').length) {
        $('.js-block-brand-carousel').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1340,
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
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //fixed layer in product card
    if ($('.js-order-fixed-table').length) {
        var fBlockPadding = 60;
        var fBlock = $('.js-order-fixed-table');
        var fBlockWidth = $('.js-order-fixed-table').width();
        var fBlockPosition = fBlock.offset().top;

        if($(window).width() > 1200) {
            fixedBlock();
        }else{
            fBlock.css({
                'position':'static',
                'width':'auto',
                'max-height': '100%'
            });
        }

        $(window).scroll(function(){
            var fTopPos = $(window).scrollTop() + fBlock.height();
            var fBottomPos = fTopPos < $('.pr-makeorder-page .left-layer').height() + $('.pr-makeorder-page .left-layer').offset().top + 100;


            if($(window).width() > 1200) {
                fixedBlock(fBottomPos);
            }else{
                fBlock.css({
                    'position':'static',
                    'width':'auto',
                    'max-height': '100%'
                });
            }
        });

        $(window).bind('resize', function() {
            var windowHeight = $(window).height();

            if($(window).width() > 1200) {
                fixedBlock(windowHeight);
            }else{
                fBlock.css({
                    'position':'static',
                    'width':'auto',
                    'max-height': '100%'
                });
            }
        });

        function fixedBlock(a,e){
            if ($(window).scrollTop() + fBlockPadding > fBlockPosition && a) {
                fBlock.css({
                    'position':'fixed',
                    'width': fBlockWidth,
                    'max-height': e,
                    'z-index':'12',
                    'top':fBlockPadding
                });
            }else{
                fBlock.css({
                    'position':'static',
                    'width':'auto',
                    'max-height': '100%'
                });
            }
        }
    }
});

$(window).bind('load ready resize', function(){
    // search placeholder change
    if ($('.js-search-input').length) {
        if ($('body').width() > 750) {
            $('.js-search-input').attr('placeholder', 'поиск по артикулу, номеру детали');
        } else {
            $('.js-search-input').attr('placeholder', 'поиск');
        }
    }

    //refactor content in catalog for mobile
    if ($(window).width() < 1200 ) {
        if (!$('.js-filter-block-wrap').hasClass('.removed-mob-content')) {
            $('.js-filter-block-wrap').appendTo('.js-block-mob-filters-holder').addClass('removed-mob-content');
        }

        if (!$('.js-block-balance-form').hasClass('.removed-mob-content')) {
            $('.js-block-balance-form').appendTo('.js-block-balance-mob-holder').addClass('removed-mob-content');
        }
    } else {
        $('.js-filter-block-wrap').appendTo('.pr-block-page-grid .left-column').removeClass('removed-mob-content');
        $('.js-block-balance-form').appendTo('.js-block-balance-desktop-holder').removeClass('removed-mob-content');

        if ($('.js-filter-block-wrap').is(':hidden') ) {
            $('.js-filter-block-wrap').removeAttr('style');
        }

        if ($('.js-top-products-sort').is(':hidden') ) {
            $('.js-top-products-sort').removeAttr('style');
        }

        if ($('.pr-block-account-page .left-account-layer').is(':hidden') ) {
            $('.pr-block-account-page .left-account-layer').removeAttr('style');
        }
    }

    if ($(window).width() < 750 ) {
        if (!$('.js-product-title').hasClass('.removed-mob-content')) {
            $('.js-product-title').appendTo('.js-mob-prod-title-holder').addClass('removed-mob-content');
        }
    } else {
        $('.js-product-title').prependTo('.pr-block-product-card').removeClass('removed-mob-content');
    }
});

$(window).bind('load ready scroll', function(){
    fixedHeader();
});

function tabletMenuSync() {
    $('.js-tablet-menu').find('.level-0, .level-1, .level-2').css({'height':'auto'});

    var level0 = $('.js-tablet-menu').find('.level-0:visible');
    var level1 = $('.js-tablet-menu').find('.level-1:visible');
    var level2 = $('.js-tablet-menu').find('.level-2:visible');

    if (level2.height() > level1.height()) {
        $('.js-tablet-menu').find('.level-1:visible').height(level2.height());
    }
    if (level1.height() > level0.height()) {
        $('.js-tablet-menu').find('.level-0:visible').height(level1.height());
    }
}

function fixedHeader() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll > 147 && $('body').width() > 1200) {
        $('.js-block-main-nav').addClass('fixed-nav');
        $('.js-block-main-nav-place').addClass('active');
    } else {
        $('.js-block-main-nav').removeClass('fixed-nav');
        $('.js-block-main-nav-place').removeClass('active');
    }
}

function popupOpen(e) {
    $(e).fadeIn();
    var scrltp = $(window).scrollTop();
    var popupBlock = $(e).find('.block-popup');
    var popupHeight = popupBlock.height();
    popupBlock.css({
        'top' : - popupHeight
    });
    popupBlock.animate({
        'top': 0
    }, 500);
}

function popupClose(e) {
    var scrltp = $(window).scrollTop();
    var popupBlock = $(e).find('.block-popup');
    var popupHeight = popupBlock.height();
    var popupTopPadding = 100;
    popupBlock.animate({
        'top': - popupHeight - popupTopPadding
    }, 500);
    setTimeout(function(){
        $(e).fadeOut();
    }, 500);
}