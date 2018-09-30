$(document).ready(function(){
    $('.faq .item .ico').on('click', function() {
        $(this).closest('.faq').find('.item').removeClass('active');
        $(this).closest('.item').addClass('active');
    });

    $('.link').click(function() {
        $('.link .popup').removeClass('shown');
        $(this).find('.popup').addClass('shown');
    })

    $('.link .popup .close').click(function(e) {
        e.stopPropagation();
        $(this).closest('.popup').removeClass('shown');
    });
    
    $('.face .more').click(function(){
        $('.people > div').removeClass('active');
        $(this).closest('.face').parent('div').addClass('active');
    });

    $('.team .popup .close').click(function(e) {
        e.stopPropagation();
        $(this).closest('.active').removeClass('active');
    });

    $('.apps').length > 0 ? $('.apps').carousel({
        num: 4,
        maxWidth: 371,
        maxHeight: 803,
        distance: 60,
        scale: 0.9,
        animationTime: 400,
        autoPlay: false
    }) : null;

    $('.menu_responsive').click(function(){
        $('body').addClass('menu_shown');
    })

    $('.hide_nav img, nav li a, nav .logo img').click(function(){
        $('body').removeClass('menu_shown');
    })

    $('.dropdown .selected').click(function(e) {
        e.stopPropagation();
        $(this).closest('.dropdown').toggleClass('opened');
        $('body').on('click', function(e) {
            $('body').off('click');
            e.stopPropagation();
            $('.dropdown').removeClass('opened');
        })
    })

    if($('.carousel').length > 0) {
        $('.carousel').bxSlider({
            minSlides: 1,
            maxSlides: 15,
            slideWidth: 273,
            pager: false,
            slideMargin: 24,
            onSliderLoad: function() {
                $('.slide').prepend('<div class="prev_slide"></div>');
                $('.prev_slide').on('click', function(){
                    $('.bx-next').click();
                });
            }
        });
    }

    $('header, .open_tomorrow, .how_it_works, .phone, .earn, .sales, .token, .team, .medeum, .mission, .world, .partners, .faq, .join_us,footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });
});
