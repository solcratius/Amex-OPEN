OPEN.namespace( 'landing' );

OPEN.landing = (function() {
	
	var $firstBg	= $( '#bg .page.front' ),
		$startCopy 	= $firstBg.find( '.copy' ),
		$startBtn 	= $firstBg.find( '.startBtn' ),
		$bgImg      = $('#bg .page .bg img'),
		$landingImg      = $('#bg .page .landingBg img'),
		$titleImg      = $('#bg .title .bg img');
	
	var winW,
		winH,
		newImgW,
		imgW = 1400,
		imgH = 900,
		winAspectRatio,
		imgAspectRatio = (imgH*100)/imgW;
	
	var NAV,
		LANDING_NAV,
		LANDING_ANIM,
		VPLAYER,
		SECTIONS;
	
	var init = function init() {
		NAV = OPEN.nav;
		LANDING_NAV = OPEN.landing.nav;
		LANDING_ANIM = OPEN.landing.animate;
		VPLAYER = OPEN.landing.vplayer;
		SECTIONS = OPEN.landing.sections;
		
		$(window).resize( function() {
			getWinSize();
			setBgImg();
			LANDING_NAV.setWinH(winH);
			LANDING_ANIM.setWinSize(winW, winH);
			VPLAYER.setWinSize(winW, winH);
			winResizeReset();
		} );
		
		getWinSize();
		setBgImg();
		LANDING_NAV.setWinH(winH);
		LANDING_ANIM.setWinSize(winW, winH);
		VPLAYER.setWinSize(winW, winH);
		winResizeReset();
		
		LANDING_NAV.disableNav('#btn-prev');
		TweenMax.set( $startCopy, { marginTop: ((winH*.5)-105)+'px' } );
		TweenMax.set( $startCopy.find('.landing-middle'), { scale: 0 } );
		TweenMax.set( $startCopy.find('.landing-top .logo-amex'), { top: 20, scale: .2, marginLeft: 40 } );
		TweenMax.set( $startCopy.find('.landing-top .logo-open'), { scale: 0, marginLeft: -200 } );
		
		LANDING_NAV.init();
		SECTIONS.init();
		handler();
		
		animation( 1 );
	};
	
	var winResizeReset = function winResizeReset() {
		$startCopy.css({ 'marginTop': ((winH*.5)-225)+'px' });
		$( '#bg .page.end .copy' ).css({ 'marginTop': ((winH*.5)-225)+'px' });
		$('#bg .page.aj').css('height', (winH-131)+'px');
		if ( $( '#s-features' ).css( 'visibility' ) == 'visible' )
		{
			$( '.sf-item a' ).each(function(i){
				$( '.sf-item' ).eq(i).find('a span').css( 'margin-top', ($( '.sf-item' ).eq(i).find('a span').height()*-.5)+'px' );
			});
		}
	}
	
	var setBgImg = function setBgImg() {
		if (winW >= 1024 && winH >= 650)
		{
			winAspectRatio = (winH/winW)*100;
			
			if (winAspectRatio >= imgAspectRatio)
			{
				$bgImg.css({'width': 'auto', 'height': winH+'px'});
				$titleImg.css({'width': 'auto', 'height': winH+'px'});
				$landingImg.css({'width': 'auto', 'height': winH+'px'});
				
				newImgW = (imgW*winH)/imgH;
				$bgImg.css({'margin-left': ((winW-newImgW)*.5)+'px'});
				$titleImg.css({'margin-left': ((winW-newImgW)*.5)+'px'});
				$landingImg.css({'margin-left': ((winW-newImgW)*.5)+'px'});
			}
			else
			{
				$bgImg.css({'width': winW+'px', 'height': 'auto'});
				$titleImg.css({'width': winW+'px', 'height': 'auto'});
				$landingImg.css({'width': winW+'px', 'height': 'auto'});
				$bgImg.css({'margin-left': '0'});
				$titleImg.css({'margin-left': '0'});
				$landingImg.css({'margin-left': '0'});
			}
		}
	};
	
	var getWinSize = function getWinSize() {
		winW = $(window).width();
		winH = $(window).height();
	};
	
	function handler() {
		$startCopy.find('.landing-middle a').on('mouseover', function(e) {
			e.stopPropagation();
			var id;
			if ($(this).hasClass('btn-manage')) id = 0;
			if ($(this).hasClass('btn-more')) id = 1;
			if ($(this).hasClass('btn-find')) id = 2;
			$firstBg.find( '.landingBg' ).eq(id).show();
			TweenMax.set( $firstBg.find( '.landingBg' ).eq(id), { scale: 1, opacity: 0 } );
			TweenMax.to( $firstBg.find( '.landingBg' ).eq(id), .5, { scale: 1.02, opacity: .35, ease: Quad.easeOut, overwrite: 0 } );
		});
		
		$startCopy.find('.landing-middle a').on('mouseout', function(e) {
			e.stopPropagation();
			var id;
			if ($(this).hasClass('btn-manage')) id = 0;
			if ($(this).hasClass('btn-more')) id = 1;
			if ($(this).hasClass('btn-find')) id = 2;
			TweenMax.to( $firstBg.find( '.landingBg' ).eq(id), .5, { scale: 1, opacity: 0, ease: Quad.easeOut, overwrite: 0, onComplete: function(){ $firstBg.find( '.landingBg' ).eq(id).hide(); } });
		});
		
		$startBtn.find('.btnBase').mouseover( function( e ) {
			e.stopPropagation();
			TweenMax.to( $startBtn.find('.btnBase'), .15, { top: 0, backgroundColor: "#12a9cc", ease: Cubic.easeInOut, overwrite: 0 } );
			TweenMax.to( $startBtn.find('.btnBg'), .15, { backgroundColor: "#12a9cc", ease: Quad.easeOut } );
		});

		$startBtn.find('.btnBase').mouseout( function( e ) {
			e.stopPropagation();
			TweenMax.to( $startBtn.find('.btnBase'), .25, { top: '4px', backgroundColor: "#009bbb", ease: Cubic.easeIn, overwrite: 0 } );
			TweenMax.to( $startBtn.find('.btnBg'), .25, { backgroundColor: "#009bbb", ease: Quad.easeOut } );
		});

		$startBtn.find('.btnBase').click( function( e ) {
			e.stopPropagation();
			TweenMax.to( $startBtn.find('.btnBase'), .2, { top: '12px', ease: Cubic.easeOut, overwrite: 0 } );
			TweenMax.to( $startBtn.find('.btnBase'), .25, { top: 0, delay:.1, ease: Cubic.easeIn, overwrite: 0 } );
			SECTIONS.next();
		});
		
		$firstBg.find('.arrowBtn').click( function( e ) {
			e.stopPropagation();
			TweenMax.to( $firstBg.find('.arrowBtn'), .1, { bottom: '80px', ease: Cubic.easeOut, overwrite: 0 } );
			TweenMax.to( $firstBg.find('.arrowBtn'), .25, { bottom: '90px', delay:.1, ease: Cubic.easeIn, overwrite: 0 } );
			SECTIONS.next();
		});
	};
	
	var animation = function animation( id ) {
		switch ( id ) {
			case 1:
				$firstBg.show();
				TweenMax.set( $firstBg, { scale: 1.2, opacity: 0 } );
				TweenMax.set( $firstBg.find( '.bg' ), { top: 0 } );
				TweenMax.to( $firstBg, 1, { opacity: 1, ease: Quad.easeOut, overwrite:0 } );
				TweenMax.to( $firstBg, 1, { scale: 1, ease: Quad.easeInOut, overwrite:0 } );
				TweenMax.delayedCall(.5, animation, [2]);
				break;	
			case 2:
				NAV.show(true);
				LANDING_NAV.show();
				TweenMax.to( $startCopy.find('.landing-top .logo-amex'), .2, { top: 0, delay:.25, scale: 1, opacity: 1, onComplete: animation, onCompleteParams: [ 3 ] } );
				break;
			case 3:
				$startCopy.show();
				TweenMax.to( $startCopy.find('.landing-top .logo-amex'), .4, { marginLeft: 0 } );
				TweenMax.to( $startCopy.find('.landing-top .logo-open'), .4, { scale: 1, opacity: 1, marginLeft: 0 } );
				
				TweenMax.delayedCall(.4, animation, [4]);
				break;
			case 4:
				TweenMax.to( $startCopy, .4, { marginTop: ((winH*.5)-225)+'px' } );
				TweenMax.to( $startCopy.find('.landing-middle'), .4, { transformOrigin: '50% 100%', opacity: 1, scale: 1 } );
				
				TweenMax.to( $startBtn, .3, { height: '68px', delay: 0, ease: Quad.easeOut } );
				TweenMax.to( $startBtn.find('.btnBg'), .5, { top: '8px', delay: .2, ease: Back.easeOut } );
				TweenMax.to( $startBtn.find('.btnBase'), .35, { top: '4px', delay: .5, ease: Cubic.easeOut } );
				
				$firstBg.find('.arrowBtn').show();
				TweenMax.set( $firstBg.find('.arrowBtn'), { bottom:160, opacity: 0 } );
				TweenMax.to( $firstBg.find('.arrowBtn'), 1, { bottom: 90, opacity: 1, delay: 0, ease: Cubic.easeOut } );
				break;
		}
	};

	return {
		init: init,
		nav: OPEN.landing.nav,
		sections: OPEN.landing.sections
	};

})();