const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    },

}


$(document).ready(function() {

    $nav = $('nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })

    //click to scroll top
    $('.go-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000); 
    });

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, //makes the carousel scroll by itself every 3 seconds
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive 
    });

    

    //AOS Instance
    AOS.init();

});