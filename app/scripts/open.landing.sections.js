OPEN.namespace( 'landing.sections' );

OPEN.landing.sections = (function() {
	var NAV,
		LANDING_ANIM,
		VPLAYER,
		LANDING_NAV;
	
	var $pageBg	= $( '#bg .page' );
	
	var at,
		max,
		prevAt,
		titleMax,
		titleID,
		transitioning = false;
	
	var mousewheelevt;

	var next = function next() {
		if ( transitioning || at + 1 >= max ) return;
		
		LANDING_ANIM.stopContentAnimCall();
		TweenMax.to( $( '#sn-right #btn-next .label' ), .1, { marginTop: '26px', ease: Cubic.easeOut, onComplete: function() {
			LANDING_NAV.disableNav('#btn-next');
			LANDING_NAV.disableNav('#btn-prev');
		} } );
		TweenMax.to( $( '#sn-right #btn-next .label' ), .25, { marginTop: '22px', delay: .1, ease: Cubic.easeIn } );
		animateTo( at + 1, 'next' );
	};

	var prev = function prev() {
		if ( transitioning || at - 1 < 0 ) return;
		
		LANDING_ANIM.stopContentAnimCall();
		TweenMax.to( $( '#sn-right #btn-prev .label' ), .1, { marginTop: '15px', ease: Cubic.easeOut, onComplete: function() {
			LANDING_NAV.disableNav('#btn-next');
			LANDING_NAV.disableNav('#btn-prev');
		} } );
		TweenMax.to( $( '#sn-right #btn-prev .label' ), .25, { marginTop: '19px', delay:.1, ease: Cubic.easeIn } );
		animateTo( at - 1, 'prev' );
	};

	var animateTo = function animateTo( dest, dir, fromFeature ) {
		transitioning = true;
		
		if (fromFeature)
		{
			if (dest > at )  dir = 'up';
			else dir = 'down';
		}
		else
		{
			if ( dir == 'next' ) dir = 'up';
			else dir = 'down';
		}
		
		prevAt = at;
		at = dest;
		
		if (dest >= (max-1))
		{
			at = (max-1);
			LANDING_NAV.disableNav('#btn-next');
			LANDING_NAV.disableNav('#btn-prev');
		}
		
		var type = 'normal';
		var prevType = 'normal';
		
		if (at == 0)
		{
			type = 'front';
			NAV.show(true);
		}
		if (at == (max-2)) type = 'end';
		if (at >= (max-1))
		{
			type = 'aj';
			NAV.show();
			document.removeEventListener( mousewheelevt, onMouseWheel );
			document.onkeydown = null;
		}
		
		if (prevAt == 0) prevType = 'front';
		if (prevAt == (max-2)) prevType = 'end';
		if (prevAt >= (max-1))
		{
			prevType = 'aj';
			document.addEventListener( mousewheelevt, onMouseWheel, false );
			document.onkeydown = onCheckKey;
		}
		
		if ($pageBg.eq(at).hasClass('title')) type = 'title';
		if ($pageBg.eq(prevAt).hasClass('title')) prevType = 'title';
		
		if (type == 'title')
		{
			titleID = Number($pageBg.eq(at).find('.tIndex').html());
			prevType = 'titlePrev';
		}
		
		if (dir == 'down' && prevType == 'title') titleID -= 1;
		
		if (fromFeature)
		{
			$pageBg.each(function(i){
				if ($(this).hasClass('title'))
					if (i < at) titleID = Number($pageBg.eq(i).find('.tIndex').html());
			});
		}
		
		if ( ( prevAt <= 0 || prevAt >= (max-1) ) && ( at > 0 && at < (max-1) ) ) NAV.hide();
		
		if ( prevAt == (max-1) && at != (max-1) ) LANDING_NAV.cardNavOff();
		if ( at >= (max-1) && prevAt != (max-1) ) LANDING_NAV.cardNavOn();
		
//		console.log("at:"+at+", type:"+type+", dir:"+dir+", titleID:"+titleID);
//		console.log("prevAt:"+prevAt+", prevType:"+prevType+", dir:"+dir+", titleID:"+titleID);
//		console.log("--------------------------------------------------------------------------");
		if (at != prevAt)
		{
			LANDING_ANIM.animateOut( prevAt, prevType, dir, titleID );
			LANDING_ANIM.animateIn( at, type, dir, titleID, fromFeature );
		}
	};
	
	var isTransitioning = function isTransitioning() {
		return transitioning;
	};
	
	var setTransitioning = function setTransitioning( bool ) {
		transitioning = bool;
//		console.log("transitioning:"+transitioning);
	};
	
	var onMouseWheel = function onMouseWheel(e) {
		if ( transitioning ) return;
		
		if (!e.wheelDelta) // FF3.x
		{
			if ( e.detail > 0 ) next();
			else prev();
		}
		else //WC3 browsers
		{
//			console.log(e.wheelDelta);
			if ( e.wheelDelta < 0 ) next();
			else prev();
		}
		
	    e.preventDefault();
	    e.stopPropagation();
	}
	
	var onCheckKey = function onCheckKey(e) {

	    e = e || window.event;

	    if (e.keyCode == '38') prev();
	    else if (e.keyCode == '40') next();
	    
	    e.preventDefault();
	    e.stopPropagation();
	}
	
	var handlers = function handlers() {
		mousewheelevt = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";
		//document.attachEvent("on"+mousewheelevt, function(e){alert('Mouse wheel movement detected!')}); //if IE (and Opera depending on user setting)
		document.addEventListener( mousewheelevt, onMouseWheel, false );
		document.onkeydown = onCheckKey;
	};
	
	var init = function init() {
		NAV  = OPEN.nav;
		LANDING_ANIM = OPEN.landing.animate;
		VPLAYER = OPEN.landing.vplayer;
		LANDING_NAV  = OPEN.landing.nav;
		
		at = 0;
		max = $pageBg.length;
		titleID = 0;
		titleMax = 0;
		for (var i = 0; i < max; i ++) if ($pageBg.eq(i).hasClass('title')) titleMax += 1;
		
		LANDING_ANIM.init(max, titleMax);
		VPLAYER.init();
		handlers();
	};

	return {
		next: next,
		prev: prev,
		animateTo: animateTo,
		isTransitioning: isTransitioning,
		setTransitioning: setTransitioning,
		init: init
	};

})();