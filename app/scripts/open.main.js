/*	
		=========================================================================================
 		*
		*	American Express - OPEN
 		*
 		=========================================================================================
		*----------------------------------------------------------------------------------------
 		*
 		*	
 		*
 		=========================================================================================
		*
		*   author          >>  Christopher Miles
		*   title			>>  Principal Creative Engineer, Labs @ DigitasLBi
		*   site            >>  www.ChristopherMil.es
		*   created         >>  22 April 2014
		*   updated         >>  22 April 2014
		*
		=========================================================================================
*/

//===============================================================================================
//-----------------------------------------------------------------------------------------------

'use strict';

var OPEN = OPEN || {};

(function() {

    OPEN.namespace = function( nsString ) {

	    var parts 	= nsString.split( '.' ),
	        parent 	= OPEN,
	        i;

	    if ( parts[0] === 'OPEN' ) {
	    	parts = parts.slice(1);
	    }

	    for ( i = 0; i < parts.length; i += 1 ) {
	    	if ( typeof parent[ parts[i] ] === 'undefined' ) {
	        	parent[ parts[i] ] = {};
	      	}
	      	parent = parent[ parts[i] ];
	    }

	    return parent;

	};
}());


//-----------------------------------------------------------------------------------------------

OPEN.namespace( 'controller' );

OPEN.controller = (function() {

  	var init = function init() {
  		handlers();

    	var doc = document.documentElement;
    	doc.setAttribute( 'data-useragent', navigator.userAgent );
	};

    function handlers() {
    	$( window ).load( function() {
      		OPEN.nav.init();
      		OPEN.landing.init();
      		OPEN.features.init();
    	});
    };

	return {
		init: init
	};

})();


//-----------------------------------------------------------------------------------------------

$( document ).ready(function() {
	OPEN.controller.init();
});