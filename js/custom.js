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


$(function(){

	$("#work2").magnificPopup({
		 delegate: 'a', // child items selector, by clicking on it popup will open
         type: 'image',
         // other options
            gallery: {
          enabled:true
        } 

	}); 

});


$(function(){

	$("#work3").magnificPopup({
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


/* Display/Hide content Software */

function displayArch() {
	var x = document.getElementById("Architecture");
	console.log(x.style.display);
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function displayInfra() {
	var x = document.getElementById("Infra");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function displayCI() {
	var x = document.getElementById("CI");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function displaySA() {
	var x = document.getElementById("SA");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }


  /* redirect when form submitted */

  /*const myForm = document.getElementById("form");

  myForm.addEventListener("submit", (e) => {
	  e.preventDefault();
	  
	  const request = new XMLHttpRequest();

	  request.open("post", "php/index.php");

	  request.onload = function () {
		  console.log(request.responseText);
	  }

	  request.send(new FormData(myForm));
  });
*/



//$("form").submit(function(){
//	alert("Your message was successfully sent to Robert.");

//  });

/*$(document).ready(function() {
$("#resetForm").click(function() {
	$("#myForm")[0].reset();
}); 
});*/

/*function clearForms()
{
  var i;
  for (i = 0; (i < document.forms.length); i++) {
	document.forms[i].reset();
  }
}*/







