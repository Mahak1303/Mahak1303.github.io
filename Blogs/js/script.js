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
	});

});