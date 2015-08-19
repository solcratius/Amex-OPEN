OPEN.namespace( 'nav' );

OPEN.nav = (function() {

	var init = function init() {
		$( '#nav #nav-top' ).css('top', '-100px');
		$( '#loginBox' ).fadeOut(0);
	};
	
	var show = function show(home) {
		if (home) $( '#loginBox' ).delay(200).fadeIn(250);
		else $( '#loginBox' ).fadeOut(250);
		TweenMax.to( $( '#nav #nav-top' ), .45, { top: 0, ease: Cubic.easeInOut, overwrite:0} );
	};
	
	var hide = function hide() {
		$( '#loginBox' ).delay(500).fadeOut(250);
		TweenMax.to( $( '#nav #nav-top' ), .5, { top: -100, overwrite:0, delay:.5, ease: Cubic.easeInOut } );
	};
	
	return {
		init: init,
		show: show,
		hide: hide
	};

})();