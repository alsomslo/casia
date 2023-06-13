$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    });

    $('.mainslide').slick({
        fade: true,
        dots: true,
        arrows: false,
        autoplay: 3000,
    })

    $('.mainvisual .arrows .left').on('click', function () {
        $('.mainslide').slick('slickPrev')
    });
    $('.mainvisual .arrows .right').on('click', function () {
        $('.mainslide').slick('slickNext')
    });



});
