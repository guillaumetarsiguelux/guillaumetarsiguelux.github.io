function updateText() {
	'use strict';
	var i18n = $.i18n(), language, person, kittens, message, gender;

	message = 'kitten';
	language = $( '.language option:selected' ).val();


	i18n.locale = language;
	i18n.load( 'i18n/demo-' + i18n.locale + '.json', i18n.locale ).done(
		function () {
			var personName = $.i18n( person ), localizedMessage = $.i18n( message, personName);
			$( '.result' ).text( localizedMessage ).prop( 'title', i18n.localize( message ) );
		} );
}
// Enable debug
$.i18n.debug = true;

$( document ).ready( function ( $ ) {
	'use strict';
	updateText();
	$( '.language' ).on( 'change keyup', updateText );
} );
