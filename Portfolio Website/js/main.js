$(document).ready(function(){


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');

        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click'); //removes whitespace

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });

    // owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })

    /*sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();*/

    //nav

    $nav = $('mainnav');
    $toggleCollapse = $('.maintoggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })

    //click to scroll top
    $('.go-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000); 
    })

});