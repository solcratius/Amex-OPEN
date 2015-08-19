OPEN.namespace( 'landing.subnav' );

OPEN.landing.subnav = (function() {

	var $nextBtn		= $( '#ln-middle' ),
		$nextBtnBar 	= $( '#ln-middle .lnb-bar' ),
		$nextBtnLabel 	= $( '#ln-middle .lnb-label' );

	var animateIn = function animateIn() {

		var delay = 0; 

		TweenMax.to( $nextBtn, .3, { delay: delay, height: 50, ease: Quad.easeOut } );
		TweenMax.to( $nextBtnBar, .4, { delay: delay + .2, left: '0%', ease: Back.easeOut } );
		TweenMax.to( $nextBtnLabel, .4, { delay: delay + .2, top: 15, ease: Quad.easeOut } );

	};

	var $bgOverlay 		= $( '#bg-overlay' ),
		$bgHighlight 	= $( '#bg-highlight' ),
		
		$bgGrow 		= $( '#bg-grow' ),
		$bgGrow1		= $( '#bg-grow1' ),
		$bgGrow2		= $( '#bg-grow2' ),
		$bgGrow3		= $( '#bg-grow3' ),
		$bgManage		= $( '#bg-manage' ),
		$bgManage1		= $( '#bg-manage1' ),
		$bgManage2		= $( '#bg-manage2' ),
		$bgManage3		= $( '#bg-manage3' ),
		$bgConnect 		= $( '#bg-connect' ),
		$bgConnect1		= $( '#bg-connect1' ),
		$bgConnect2		= $( '#bg-connect2' ),
		$bgConnect3		= $( '#bg-connect3' ),
		$bgCard			= $( '#bg-card' );

	var $lastImage		= null,
		mouseover		= false;

	var showImage = function( which, onlyShow, dir ) {
		
		switch ( which ) {
			case 'grow':
				$lastImage = $bgGrow;
				break;
			case 'grow1':
				$lastImage = $bgGrow1;
				break;
			case 'grow2':
				$lastImage = $bgGrow2;
				break;
			case 'grow3':
				$lastImage = $bgGrow3;
				break;
			case 'manage':
				$lastImage = $bgManage;
				break;
			case 'manage1':
				$lastImage = $bgManage1;
				break;
			case 'manage2':
				$lastImage = $bgManage2;
				break;
			case 'manage3':
				$lastImage = $bgManage3;
				break;
			case 'connect':
				$lastImage = $bgConnect;
				break;
			case 'connect1':
				$lastImage = $bgConnect1;
				break;
			case 'connect2':
				$lastImage = $bgConnect2;
				break;
			case 'connect3':
				$lastImage = $bgConnect3;
				break;
			case 'card':
				$lastImage = $bgCard;
				break;
		}
		
		if (dir == 'fadeScale')
		{
			$lastImage.removeAttr('style').css({
				'background-position': 'center top',
				'height':  getWinHeight()+'px',
				'top': '0'
			});
			TweenMax.to( $lastImage, .5, { opacity: 1, scale: 1.03, ease: Cubic.easeInOut, overwrite:0 } );
		}
		else
		{
			if (!(dir == 'up' && which == "manage2")) TweenMax.to( $lastImage, .1, { opacity: 1, overwrite:0 } );
			
			if (dir == 'up') {
				if (which == "manage2")
				{
					$lastImage.removeAttr('style').css({
						'background-position': 'center bottom',
						'height': getWinHeight()+'px',
						'bottom': '0px',
						'opacity': '0'
					});
					TweenMax.to( $lastImage, .5, { opacity: 1, autoAlpha: 1, ease: Quad.easeOut, delay:.25, overwrite:0 } );
					TweenMax.to( $bgManage1, .5, { opacity: 0, autoAlpha: 0, ease: Quad.easeIn, delay:.65, overwrite:0 } );
				}
				else if (which == "card")
				{
					$lastImage.removeAttr('style').css({
						'background-position': 'center bottom',
						'height': '0px',
						'bottom': '-100px'
					});
					TweenMax.to( $lastImage, .5, { height: getWinHeight()+'px', top: 0, ease: Quad.easeOut, delay:.25, overwrite:0, onComplete: function(){
						$lastImage.css({
							'background-position': 'center top',
							'position': 'relative',
							'overflow-y': 'scroll'
						});
						
						$lastImage.scrollTop = 0;
						console.log($lastImage.find('img').position().top);
						
						$('#bg-overlay').css({'display':'none'});
						$('#bg-highlight').css({'display':'none'});
						$('#sections_').css({'display':'none'});
						
					} } );
				}
				else
				{
					$lastImage.removeAttr('style').css({
						'background-position': 'center bottom',
						'height': '0px',
						'bottom': '-100px'
					});
					TweenMax.to( $lastImage, .75, { height: getWinHeight()+'px', bottom: 0, ease: Cubic.easeInOut, delay:.25, overwrite:0 } );
				}
				
				if (which == "grow2" && SECTIONS.getVideoStatus() == 1)
				{
					var video = document.getElementsByTagName('video')[0];
					$('#openVideo').css({
						'opacity': '0',
						'display': 'block'
					});
					TweenMax.to( $('#openVideo'), .5, { opacity: 1, ease: Quad.easeOut, delay: .75, overwrite:0, onStart:function () {
						video.currentTime = 0;
						video.load();
						video.play();
						
					    video.onended = function(e) {
					    	TweenMax.to( $('#openVideo'), .5, { opacity: 0, ease: Quad.easeIn, overwrite:0, onComplete:function () {
					    		$('#openVideo').css('display','none');
					    		SECTIONS.videoEnded();
					    	} } );
					    };
					} } );
					
				}
			} else {
				if (which == "manage1")
				{
					$lastImage.removeAttr('style').css({
						'background-position': 'center top',
						'height': getWinHeight()+'px',
						'top': '0px',
						'opacity': '0'
					});
					TweenMax.to( $lastImage, .5, { opacity: 1, autoAlpha: 1, ease: Quad.easeOut, delay:.25, overwrite:0 } );
					TweenMax.to( $bgManage2, .5, { opacity: 0, autoAlpha: 0, ease: Quad.easeIn, delay:.65, overwrite:0 } );
				}
				else
				{
					$lastImage.removeAttr('style').css({
						'background-position': 'center top',
						'height': '0px',
						'top': '-100px'
					});
					TweenMax.to( $lastImage, .75, { height: getWinHeight()+'px', top: 0, ease: Cubic.easeInOut, delay:.25, overwrite:0 } );
				}
				
				if (which == "grow2" && SECTIONS.getVideoStatus() == 1)
				{
					var video = document.getElementsByTagName('video')[0];
					$('#openVideo').css({
						'opacity': '0',
						'display': 'block'
					});
					TweenMax.to( $('#openVideo'), .5, { opacity: 1, ease: Quad.easeOut, delay: .75, overwrite:0, onStart:function () {
						video.currentTime = 0;
						video.load();
						video.play();
						
					    video.onended = function(e) {
					    	TweenMax.to( $('#openVideo'), .5, { opacity: 0, ease: Quad.easeIn, overwrite:0, onComplete:function () {
					    		$('#openVideo').css('display','none');
					    		SECTIONS.videoEnded();
					    	} } );
					    };
					} } );
					
				}
			}
		}
		
		if ( onlyShow ) return;

		mouseover = true;
	};
	
	var hideHighlight = function hideHighlight() {
		TweenMax.to( $bgOverlay, .4, { opacity: 0 } );
		TweenMax.to( $bgHighlight, .4, { opacity: 0 } );
	};

	var showHighlight = function showHighlight() {
		TweenMax.to( $bgOverlay, .4, { opacity: .15 } );
		TweenMax.to( $bgHighlight, .4, { opacity: .7 } );
	};

	var hideImage = function( onlyHide, dir ) {
		mouseover = false;
		
		if(dir == 'fadeScale')
		{
			TweenMax.to( $lastImage, .5, { opacity: 0, scale: 1, ease: Cubic.easeInOut, overwrite:0 } );
		}
		else
		{
			if (dir == 'up') {
				$lastImage.removeAttr('style').css({
					'background-position': 'center bottom',
					'height': getWinHeight()+'px',
					'top': '0px',
					'opacity': 1
				});
				TweenMax.to( $lastImage, .75, { height: '0px', top: '-100px', ease: Cubic.easeInOut, delay: .5, overwrite:0 } );
				
			} else {
				if ($lastImage == $bgCard)
				{
					$('#bg-overlay').css({'display':'block'});
					$('#bg-highlight').css({'display':'block'});
					$('#sections_').css({'display':'block'});
					$lastImage.css({
						'background-position': 'center top',
						'position': 'absolute',
						'overflow': 'hidden'
					});
					TweenMax.to( $lastImage, .75, { height: '0px', bottom: '-100px', ease: Cubic.easeInOut, delay:.5, overwrite:0 } );
				}
				else
				{
					$lastImage.removeAttr('style').css({
						'background-position': 'center top',
						'height': getWinHeight()+'px',
						'bottom': '0px',
						'opacity': 1
					});
					TweenMax.to( $lastImage, .75, { height: '0px', bottom: '-100px', ease: Cubic.easeInOut, delay: .5, overwrite:0 } );
				}
			}
			
			TweenMax.to( $lastImage, .1, { opacity: 0, delay: 1, overwrite:0 } );
		}

		if ( onlyHide ) return;

		TweenMax.delayedCall( 1, function() {
			mouseover = false;
		} );
		
	};

	var disableNav = function disableNav() {
		//TweenMax.to( $applyBtn, .2, { opacity: .3 } );
		TweenMax.to( $nextBtn, .2, { opacity: .5 } );
	};

	var enableNav = function enableNav() {
		//TweenMax.to( $applyBtn, .2, { opacity: 1 } );
		TweenMax.to( $nextBtn, .2, { opacity: 1 } );
	};

	var handlers = function handlers() {

		$( '#slc-middle a' ).mouseover( function( e ) {
			var s = $( this ).attr( 'class' );
			showImage( s.split( '-' )[1], false, 'fadeScale' );
		});

		var clickedMiddle = false;

		$( '#slc-middle a' ).click( function( e ) {
			e.preventDefault();
			clickedMiddle = true;
			var s = $( this ).attr( 'class' );
			disableNav();
			LANDING_NAV.expand();
			SECTIONS.animateTo( s.split( '-' )[1], 'next' );
		});
		
		$( '#slc-middle a' ).mouseout( function( e ) {
			if ( clickedMiddle ) return;
			hideImage(false, 'fadeScale');
		});

		var nextBtnOver = false;

		$nextBtn.mouseover( function( e ) {
			e.stopPropagation();
			if ( nextBtnOver ) return;
			nextBtnOver = true;
			TweenMax.to( $nextBtnBar, .2, { left: '-100%', ease: Quad.easeOut, onComplete: function() {
				TweenMax.set( $nextBtnBar, { left: '110%' } );
				TweenMax.to( $nextBtnBar, .3, { left: '0%', ease: Quad.easeOut } );
				
			} } );

			TweenMax.to( $nextBtnLabel, .2, { left: 10 } );
		});

		$nextBtn.mouseout( function( e ) {
			e.stopPropagation();
			TweenMax.to( $nextBtnLabel, .3, { left: 0 } );
			nextBtnOver = false;
		});

		$nextBtn.click( function( e ) {
			e.preventDefault();
			SECTIONS.next();
			LANDING_NAV.expand();
			TweenMax.to( $nextBtnBar, .2, { left: '-100%', ease: Quad.easeOut, onComplete: function() {
				TweenMax.set( $nextBtnBar, { left: '110%' } );
				TweenMax.to( $nextBtnBar, .3, { left: '0%', ease: Quad.easeOut } );
			} } );
		});

	};
	
	var getWinHeight = function getWinHeight() {
		
		return $(document).height();
	};
	
	var SECTIONS,
		NAV,
		LANDING_NAV;

	var init = function init() {

		SECTIONS = OPEN.landing.sections;
		NAV = OPEN.nav;
		LANDING_NAV = OPEN.landing.nav;

		handlers();
	};

	return {
		animateIn: animateIn,
		showImage: showImage,
		hideImage: hideImage,

		hideHighlight: hideHighlight,
		showHighlight: showHighlight,
		disableNav: disableNav,
		enableNav: enableNav,

		init: init
	};

})();