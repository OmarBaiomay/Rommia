/*global $, window, WOW, document, Typed*/

$(window).on('load', function () {
    "use strict";

    ////////// Loader

    $('.loader div').fadeOut(800, function () {
        $('.loader').fadeOut(1000);
        $('body').css({
            "overflow-y": "scroll"
        });
    });
});

$(document).ready(function () {
    "use strict";

    /// Navbar

    var scrollTop = $(window).scrollTop();
    if (scrollTop > 90) {
        $('.rommia-navbar').addClass('bg-white shadow');
        $('.rommia-navbar .navbar-brand').removeClass('text-white');
        $('.navbar-nav .nav-item .nav-link').removeClass('text-white');
    } else {
        $('.rommia-navbar').removeClass('bg-white shadow');
        $('.rommia-navbar .navbar-brand').addClass('text-white');
        $('.navbar-nav .nav-item .nav-link').addClass('text-white');
    }

    $('.nav-item').on('click', function () {
        $('.navbar-collapse').removeClass('show');
    });

    /// magnificPopUp

    $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /// Flilter 

    $('.button').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var value = $(this).attr("data-filter");

        if (value === "all") {
            $('.filter').removeClass('hide');
        } else {
            $('.filter').not('.' + value).addClass('hide');

            $('.filter').filter('.' + value).removeClass('hide');
        }
    });


    /// Owl Carousel

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 10000,
        center: false,
        dots: true,
        nav: false,
        rewind: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    });

});

$(window).scroll(function () {

    "use strict";

    ////////// Navbar

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 90) {
        $('.rommia-navbar').addClass('bg-white shadow');
        $('.rommia-navbar .navbar-brand').removeClass('text-white');
        $('.navbar-nav .nav-item .nav-link').removeClass('text-white');
    } else {
        $('.rommia-navbar').removeClass('bg-white shadow');
        $('.rommia-navbar .navbar-brand').addClass('text-white');
        $('.navbar-nav .nav-item .nav-link').addClass('text-white');
    }
});

//// WOW js 

new WOW().init();

/// ScrollIt

$(function () {

    "use strict";

    $.scrollIt({
        upKey: 60, 
        downKey: 60, 
        easing: 'ease-in-out', 
        scrollTime: 800, 
        activeClass: 'active', 
        onPageChange: null, 
        topOffset: -70 
    });
});

/// Typed.Js

var typed = new Typed(".type", {
    strings: ["Web Designer", "Web Developer", "Photographer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    backDelay: 1500,
    smartBackspace: true
});

