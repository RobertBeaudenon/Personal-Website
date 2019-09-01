/* services */

$(function(){
    
    //animate on scroll
	new WOW().init();

});

/*work*/

$(function(){

	$("#work").magnificPopup({
		 delegate: 'a', // child items selector, by clicking on it popup will open
         type: 'image',
         // other options
            gallery: {
          enabled:true
        } 

	}); 

});

/*team*/

$(function(){
	 $("#team-members").owlCarousel({
      items: 2,
      autoplay:true,
      smartSpeed:700,
      loop: true,
	  autoplayHoverPause: true,
	  responsive :{
		  0 : {
			  items: 1
		  },

		  480 : {
			  items: 2
		  }
	  }

	 });
  
});

/* testimonials */

$(function(){
	 $("#customers-testimonials").owlCarousel({
      items: 1,
      autoplay:true,
      smartSpeed:700,
      loop: true,
      autoplayHoverPause: true

	 });
  
});

/* navigation */

 //show and hide navigation bar
$(function(){

	$(window).scroll(function(){

		if ($(this).scrollTop() < 50) {
			//hide nav
			$("nav").removeClass("vesco-top-nav");
			//hide back-to-top-btn
			$("#back-to-top").fadeOut();

		} else {
			//show
			$("nav").addClass("vesco-top-nav");
			$("#back-to-top").fadeIn();

		}

	});
});

/*smooth scrolling*/

$(function(){

	$("a.smooth-scroll").click(function(event){
		event.preventDefault();
		//get/return section id line #about, #work..
		var section = $(this).attr("href");

		$('html, body').animate({scrollTop: $(section).offset().top - 64},1250, "easeInOutExpo");
	});

});

/* Close mobile meny on click */

$(function(){
   $(".navbar-collapse ul li a").on("click touch", function(){

      $(".navbar-toggle").click();

   });
});












