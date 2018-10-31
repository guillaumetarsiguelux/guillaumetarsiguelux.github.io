
/********************************************************
*
*	Animation du header au scroll
*
********************************************************/

var cbpAnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.headerstandard' ),
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
	
	var currentSection = "section1";
				
	function change($section){
		$('nav.menu a').removeClass('current');
		currentSection = $section.attr('id');
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

	$('.portfolio ul li a').magnificPopup({type:'image'});
	
	
	

/********************************************************
*
*	Portfolio
*
********************************************************/

	
	var $elements = $('#elements');
		// initialize isotope
	$elements.isotope({
		// options...
	});
	
	$elements.isotope({ filter: '.tous' });

	// filter items when filter link is clicked
	$('.portfolio nav a').click(function(){
		var selector = $(this).attr('data-filter');
		$elements.isotope({ filter: selector });
		
		$('.portfolio nav a').removeClass('current');
		$(this).addClass('current');
		
		return false;
	});

	
	

/********************************************************
*
*	Contact form
*
********************************************************/


	// Create input element for testing
	var inputs = document.createElement('input');
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
		
	}
	
	// Fallback for required attribute
	if(!supports.required) {
		
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
		
	}
	
	// Change text inside send button on submit
	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}


	
});