$(document).ready(function() {

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
    
    // Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});
});