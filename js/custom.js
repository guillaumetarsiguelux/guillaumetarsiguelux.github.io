
/********************************************************
*
*	Animation du header au scroll
*
********************************************************/

var cbpAnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.headerhome' ),
        didScroll = false,
        changeHeaderOn = 300;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'headerstandard-shrink' );
        }
        else {
            classie.remove( header, 'headerstandard-shrink' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();




$(function() {



/********************************************************
*
*	gestion de la mobilité
*
********************************************************/


	function toggleMobileMenu(){
		$('.menumobile').slideToggle();
	}
	

	$('#releaseMenu').click(function(){
		toggleMobileMenu();
	});
	$('.menumobile a').click(function(){
		toggleMobileMenu();
	});
	$('.menumobile span').click(function(){
		toggleMobileMenu();
	});
	



/********************************************************
*
*	Changements au scroll
*
********************************************************/


	
	$('nav.menu a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
	});
	
	var currentSection = "section_home";
				
	function change($section){
		console.log($section);
		$('nav.menu a').removeClass('current');
		currentSection = $section.attr('id');
		console.log(currentSection);
		$('body').removeClass();
		$('body').addClass( $section.attr('id') + '-visible' );
		$('.target-'+currentSection).addClass('current');
	}
	
	$("#main section").waypoint( function( direction ) {
		if( direction === 'down' ) {
			change( $( this ) ); 
		}
	}, { offset: '20%' } ).waypoint( function( direction ) {
		if( direction === 'up' ) {
			change( $( this ) ); 
		}
	}, { offset: '-20%' } );			

	
	$( window ).on( 'debouncedresize', function() {
		$('html, body').animate({
			scrollTop: $("#"+currentSection).offset().top
		}, 500);
	} );
	
	
	
	
	

/********************************************************
*
*	Magnific Popup
*
********************************************************/

	$('.image-popup').magnificPopup({type:'image'});
	
	
	



/********************************************************
*
*	Home — typed.js
*
********************************************************/

var typed = new Typed('#main_punchline.french', {
  /*strings: ["Construisons ensemble votre future application mobile", "Construisons ensemble votre future plateforme e-commerce", "Construisons ensemble votre future application métier", "Construisons ensemble un projet qui plaira à vos utilisateurs" ],*/
  /*strings: ["Pour une expérience utilisateur intuitive",  "Pour une expérience utilisateur fun",  "Pour une expérience utilisateur mémorable", "Pour une expérience utilisateur efficace"],*/
   strings: ["<span id=\"bonjour\">Bonjour,</span></br> je suis Guillaume Tarsiguel, UX designer"],
  typeSpeed: 30
});




/********************************************************
*
*	Case studies
*
********************************************************/

	
	var $elements = $('#elements');
		// initialize isotope
	$elements.isotope({
		// options...
	});
	
	$elements.isotope({ filter: '.tous' });

	// filter items when filter link is clicked

	

$("#section_casestudies li").click(function(){
   window.location=$(this).find("a").attr("href"); 
   return false;
});
	










	
});