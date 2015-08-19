OPEN.namespace( 'landing.animate' );

OPEN.landing.animate = (function() {
	var $pageBg	 = $( '#bg .page' ),
		$endCopy = $( '#bg .page.end .copy' ),
		$endBtn  = $( '#bg .page.end .endBtn' );
	
	var winW,
		winH,
		maxId,
		maxTitle,
		hasContentInit,
		pageCopyMarginLeft = [];
	
	var LANDING_NAV, 
		CONTENTS,
		SECTIONS;
	
	var animateOut = function animateOut( prevAt, type, dir, titleID ) {
		var pageTopVal;
		var pageHeightVal;
		var bgTopVal;
		var copyTopVal;
		
		if ( dir == 'up' )
		{
			pageTopVal = 0;
			pageHeightVal = '100%';
			bgTopVal = '-20%';
			copyTopVal = (winH*-.65)+'px';
		}
		else
		{
			pageTopVal = '100%';
			pageHeightVal = 0;
			bgTopVal = '-20%';
			copyTopVal = (winH*.25)+'px';
		}
		
		if (type == 'title')
		{
			if ( dir == 'up' )
			{
				TweenMax.to( $pageBg.eq(prevAt), .75, { top: pageTopVal, height: '23px', ease: Quad.easeInOut, overwrite: 0 } );
				TweenMax.to( $pageBg.eq(prevAt).find( '.cover' ), .75, { opacity: 1, ease: Quad.easeOut, overwrite: 0 } );
				TweenMax.to( $pageBg.eq(prevAt).find( '.bg' ), .75, { top: bgTopVal, ease: Quad.easeInOut, overwrite: 0, onComplete: function() { $pageBg.eq(prevAt).find( '.bg' ).hide(); } } );
			}
			else
			{
				if ( titleID > 0 )
				{
					$( '#bg .title' ).eq( titleID-1 ).show();
					$( '#bg .title' ).eq( titleID-1 ).find('.bg').hide();
					TweenMax.set( $( '#bg .title' ).eq( titleID-1 ), { top: '-100%', height: '23px', opacity: 1 } );
					TweenMax.to( $( '#bg .title' ).eq( titleID-1 ), .25, { top: 0, ease: Quad.easeOut, overwrite: 0 } );
				}
				
				TweenMax.to( $pageBg.eq(prevAt), .75, { top: pageTopVal, height: pageHeightVal, ease: Quad.easeInOut, overwrite: 0, onComplete: function() { $pageBg.eq(prevAt).hide(); } } );
				TweenMax.to( $pageBg.eq(prevAt).find( '.bg' ), .75, { top: bgTopVal, ease: Quad.easeInOut, overwrite: 0 } );
			}
			
			TweenMax.to( $pageBg.eq(prevAt).find('.copy'), 1, { top:'50%', marginTop: copyTopVal, opacity: 1, ease: Cubic.easeInOut } );
		}
		
		if (type == 'titlePrev')
		{
			if (hasContentInit == true) TweenMax.delayedCall( 1.5, CONTENTS.contentReset, [prevAt]);
			if (prevAt > 0 && prevAt < (maxId-2)) TweenMax.to( $pageBg.eq(prevAt).find('.copy'), .5, { opacity: 0, ease: Cubic.easeInOut } );
			
			TweenMax.to( $pageBg.eq(prevAt).find('.content'), .5, { opacity: 0, ease: Cubic.easeInOut } );
			TweenMax.delayedCall( 1.5, function() { $pageBg.eq(prevAt).hide(); } );
		}
		
		if (type == 'normal')
		{
			if (hasContentInit == true) TweenMax.delayedCall( .75, CONTENTS.contentReset, [prevAt]);
			
			TweenMax.to( $pageBg.eq(prevAt), .75, { top: pageTopVal, height: pageHeightVal, ease: Quad.easeInOut, onComplete: function() { $pageBg.eq(prevAt).hide(); } } );
			TweenMax.to( $pageBg.eq(prevAt).find( '.bg' ), .75, { top: bgTopVal, ease: Quad.easeInOut } );
//			TweenMax.to( $pageBg.eq(prevAt).find('.copy'), 1, { marginTop: copyTopVal, opacity: 1, ease: Cubic.easeInOut } );
			if ( dir != 'up' ) TweenMax.to( $pageBg.eq(prevAt).find('.copy'), .75, { top:'-50%', ease: Cubic.easeIn } );
			TweenMax.to( $pageBg.eq(prevAt).find('.copy'), 1, { marginTop: '-166px', opacity: 0, ease: Cubic.easeInOut } );
		}
		
		if (type == 'end')
		{
			TweenMax.to( $pageBg.eq(prevAt), .75, { top: pageTopVal, height: pageHeightVal, ease: Quad.easeInOut, onComplete: function() { $pageBg.eq(prevAt).hide(); } } );
		}
		
		if (type == 'aj')
		{
			TweenMax.to( $pageBg.eq(prevAt), .75, { top: '100%', ease: Quad.easeInOut, overwrite: 0, onComplete: function() { $pageBg.eq(prevAt).hide(); } } );
		}
	};

	var animateIn = function animateIn( at, type, dir, titleID, fromFeature ) {
		var pageTopVal;
		var bgTopVal;
		var copyTopVal;
		var copyTopVal2;
		var myDelay;
		
		hasContentInit = false;
		
		if ( dir == 'up' )
		{
			pageTopVal = '100%';
			bgTopVal = '-50%';
			copyTopVal = (winH*.5)+'px';
			copyYVal = '-50%';
		}
		else
		{
			pageTopVal = '-100%';
			bgTopVal = '50%';
			copyTopVal = (winH*-.5)+'px';
			copyYVal = '150%';
		}
		
		$pageBg.eq(at).show();
		$pageBg.eq(at).find( '.bg' ).show();
		if (at < (maxId-2)) $pageBg.eq(at).find('.copy').show();
//		TweenMax.set( $pageBg.eq(at).find('.copy'), { opacity: 1 } );
//		if (at > 0 && at < (maxId-2)) TweenMax.set( $pageBg.eq(at).find( '.copy' ), { marginTop: copyTopVal, marginLeft:pageCopyMarginLeft[at], opacity: 1 } );
		if (at > 0 && at < (maxId-2)) TweenMax.set( $pageBg.eq(at).find( '.copy' ), { top: copyYVal, marginTop: '-166px', opacity: 0, marginLeft:pageCopyMarginLeft[at] } );
		
		$pageBg.eq(at).find('.content').css({'width': 0, 'opacity': 1});
		myDelay = .75;
		
		if (type == 'front')
		{
			for (var i = 0; i < maxTitle; i ++)
			{
				if ( $( '#bg .title' ).eq(i).height() == 23 )
				{
					var $tempTitle1 = $( '#bg .title' ).eq(i);
					TweenMax.to( $tempTitle1, .25, { top: '-23px', delay: 0, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $tempTitle1.hide(); } } );
				}
			}
			
			TweenMax.set( $pageBg.eq(at), { top: pageTopVal, height: '100%', opacity: 1 } );
			TweenMax.to( $pageBg.eq(at), .75, { top: 0, ease: Quad.easeInOut } );
		}
		
		if (type == 'title')
		{
			myDelay = 1.5;
			$pageBg.eq(at).find('.breadCrumb').hide();
			TweenMax.set( $pageBg.eq(at).find( '.copy' ), { top: '50%', marginTop: copyTopVal, opacity: 1 } );
			
			if ( dir == 'up' )
			{
				TweenMax.set( $pageBg.eq(at), { top: pageTopVal, height: '100%', opacity: 1 } );
				if ( titleID > 1 ) TweenMax.to( $( '#bg .title' ).eq( titleID-2 ), .25, { top: '-23px', delay: .65, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $( '#bg .title' ).eq( titleID-2 ).hide(); } } );
			}
			else
			{
				TweenMax.set( $pageBg.eq(at), { top: 0, height: '23px', opacity: 1 } );
				if ( titleID < maxTitle ) TweenMax.to( $( '#bg .title' ).eq( titleID ), .25, { top: 0, delay: .65, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $( '#bg .title' ).eq( titleID ).hide(); } } );
			}
			
			TweenMax.set( $pageBg.eq(at).find( '.bg' ), { top: 0, opacity: 0, scale: 1.1 } );
			TweenMax.to( $pageBg.eq(at), .75, { top: 0, height: '100%', ease: Quad.easeInOut, overwrite: 0 } );
			TweenMax.to( $pageBg.eq(at).find( '.cover' ), .75, { opacity: .8, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $pageBg.eq(at).find( '.bg' ), .75, { opacity: 1, scale: 1, delay:.75, ease: Quad.easeOut, overwrite: 0 } );
			
			TweenMax.to( $pageBg.eq(at).find('.copy'), 1.25, { marginTop: '-166px', ease: Cubic.easeInOut, overwrite: 0 } );
		}
		
		if (type == 'normal')
		{
			if (fromFeature && titleID > 0)
			{
				$( '#bg .title' ).hide();
				$( '#bg .title' ).eq( titleID-1 ).show();
				$( '#bg .title' ).eq( titleID-1 ).find('.bg').hide();
				TweenMax.set( $( '#bg .title' ).eq( titleID-1 ), { top: '-100%', height: '23px', opacity: 1 } );
				TweenMax.set( $( '#bg .title' ).eq( titleID-1 ).find( '.cover' ), { opacity: 1 } );
				TweenMax.to( $( '#bg .title' ).eq( titleID-1 ), .25, { top: 0, ease: Quad.easeOut, overwrite: 0 } );
			}
			setTimeout(function(){ $( '#bg .title' ).eq( titleID-1 ).find('.breadCrumb').html( $( '#bg .title' ).eq( titleID-1 ).find('.copy h3').html() + " &mdash; " + $pageBg.eq(at).find('.pageTitle').html() ) }, 500);
			if ($( '#bg .title' ).eq( titleID-1 ).find('.breadCrumb').css('display') == 'none') $( '#bg .title' ).eq( titleID-1 ).find('.breadCrumb ').delay(500).fadeIn(250);
			
			TweenMax.set( $pageBg.eq(at), { top: pageTopVal, height: '100%', opacity: 1 } );
			TweenMax.set( $pageBg.eq(at).find( '.bg' ), { top: bgTopVal } );
			TweenMax.to( $pageBg.eq(at), .75, { top: 0, ease: Quad.easeInOut, overwrite: 0 } );
			TweenMax.to( $pageBg.eq(at).find( '.bg' ), .75, { top: 0, ease: Quad.easeInOut, overwrite: 0 } );
			
			if (at > 0 && at < (maxId-2))
			{
				TweenMax.to( $pageBg.eq(at).find('.copy'), .75, { top: '50%', ease: Quad.easeInOut, overwrite: 0 } );
				TweenMax.to( $pageBg.eq(at).find('.copy'), 1, { opacity: 1, ease: Quad.easeOut, overwrite: 0 } ); //1.25
			}
			
			TweenMax.delayedCall( 1, contentBuildIn, [at]);
		}
		
		if (type == 'end')
		{
			for (var j = 0; j < maxTitle; j ++)
			{
				if ( $( '#bg .title' ).eq(j).height() == 23 )
				{
					var $tempTitle2 = $( '#bg .title' ).eq(j);
					TweenMax.to( $tempTitle2, .25, { top: '-23px', delay: 0, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $tempTitle2.hide(); } } );
				}
			}
			
			TweenMax.set( $pageBg.eq(at), { top: pageTopVal, height: '100%', opacity: 1 } );
			TweenMax.to( $pageBg.eq(at), .75, { top: 0, ease: Quad.easeInOut } );
			if ($endCopy.css('display') == 'none') endCopyAnim(1);
		}
		
		if (type == 'aj')
		{
			TweenMax.to( $( '#bg .title' ).eq( titleID-1 ), .25, { top: '-23px', delay: .5, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $( '#bg .title' ).eq( titleID-1 ).hide(); } } );
			TweenMax.to( $pageBg.eq(at), .75, { top: 0, delay: .25, ease: Quad.easeInOut, overwrite: 0 } );
		}
		
//		if (at > 0 && at < (maxId-2)) TweenMax.to( $pageBg.eq(at).find('.copy'), 1.25, { marginTop: '-166px', ease: Cubic.easeInOut, overwrite: 0 } );
		
		TweenMax.delayedCall(myDelay, function(){
			if ( at < (maxId-1) ) LANDING_NAV.enableNav('#btn-next');
			if ( at > 0 && at < (maxId-1) ) LANDING_NAV.enableNav('#btn-prev');
			
			SECTIONS.setTransitioning( false );
		});
	};
	
	var contentBuildIn = function contentBuildIn( at ) {
		hasContentInit = true;
		CONTENTS.contentInit(at);
		$pageBg.eq(at).find('.content').show();
		TweenMax.to( $pageBg.eq(at).find('.copy'), .75, { marginLeft: (-1*(winW*.4))+'px', delay:0, ease: Cubic.easeInOut } );
		TweenMax.to( $pageBg.eq(at).find('.content'), .5, { width: '426px', ease: Quad.easeInOut } );
	};
	
	var stopContentAnimCall = function stopContentAnimCall() {
		TweenMax.killDelayedCallsTo(contentBuildIn);
	};
	
	var endCopyAnim = function endCopyAnim(id) {
		switch ( id ) {
			case 1:
				TweenMax.to( $endCopy.find('.landing-top .logo-amex'), .2, { top: 0, delay:.5, scale: 1, opacity: 1, onComplete: endCopyAnim, onCompleteParams: [2] } );
				break;
			case 2:
				TweenMax.set( $endCopy, { marginTop: ((winH*.5)-105)+'px' } );
				$endCopy.show();
				TweenMax.to( $endCopy.find('.landing-top .logo-amex'), .4, { marginLeft: 0 } );
				TweenMax.to( $endCopy.find('.landing-top .logo-open'), .4, { scale: 1, opacity: 1, marginLeft: 0 } );
				
				TweenMax.delayedCall(.4, endCopyAnim, [3]);
				break;
			case 3:
				TweenMax.to( $endCopy, .4, { marginTop: ((winH*.5)-225)+'px' } );
				TweenMax.to( $endCopy.find('.landing-middle'), .4, { transformOrigin: '50% 100%', opacity: 1, scale: 1 } );
				
				TweenMax.to( $endBtn, .3, { height: '68px', delay: 0, ease: Quad.easeOut } );
				TweenMax.to( $endBtn.find('.btnBg'), .5, { top: '8px', delay: .2, ease: Back.easeOut } );
				TweenMax.to( $endBtn.find('.btnBase'), .35, { top: '4px', delay: .5, ease: Cubic.easeOut } );
				break;
		}
	};
	
	function handler() {
		$endBtn.find('.btnBase').mouseover( function( e ) {
			e.stopPropagation();
			TweenMax.to( $endBtn.find('.btnBase'), .15, { top: 0, backgroundColor: "#12a9cc", ease: Cubic.easeInOut, overwrite: 0 } );
			TweenMax.to( $endBtn.find('.btnBg'), .15, { backgroundColor: "#12a9cc", ease: Quad.easeOut } );
		});

		$endBtn.find('.btnBase').mouseout( function( e ) {
			e.stopPropagation();
			TweenMax.to( $endBtn.find('.btnBase'), .25, { top: '4px', backgroundColor: "#009bbb", ease: Cubic.easeIn, overwrite: 0 } );
			TweenMax.to( $endBtn.find('.btnBg'), .25, { backgroundColor: "#009bbb", ease: Quad.easeOut } );
		});

		$endBtn.find('.btnBase').click( function( e ) {
			e.stopPropagation();
			TweenMax.to( $endBtn.find('.btnBase'), .2, { top: '12px', ease: Cubic.easeOut, overwrite: 0 } );
			TweenMax.to( $endBtn.find('.btnBase'), .25, { top: 0, delay:.1, ease: Cubic.easeIn, overwrite: 0 } );
			SECTIONS.next();
		});
	};
	
	var setWinSize = function setWinSize(x, y) {
		winW = x;
		winH = y;
	};
	
	var init = function init(max, titleMax) {
		LANDING_NAV	 = OPEN.landing.nav;
		SECTIONS 	 = OPEN.landing.sections;
		CONTENTS 	 = OPEN.landing.contents;
		
		CONTENTS.init();
		maxId = max;
		maxTitle = titleMax;
		
		for (var i = 0; i < maxId; i ++) pageCopyMarginLeft.push($pageBg.eq(i).find( '.copy' ).css('margin-left'));
		
		TweenMax.set( $endCopy.find('.landing-middle'), { scale: 0 } );
		TweenMax.set( $endCopy.find('.landing-top .logo-amex'), { top: 20, scale: .2, marginLeft: 40 } );
		TweenMax.set( $endCopy.find('.landing-top .logo-open'), { scale: 0, marginLeft: -200 } );
		handler();
	};

	return {
		setWinSize: setWinSize,
		stopContentAnimCall: stopContentAnimCall,
		animateIn: animateIn,
		animateOut: animateOut,
		init: init
	};

})();