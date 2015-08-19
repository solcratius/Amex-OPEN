OPEN.namespace( 'features' );

OPEN.features = (function() {
	var SECTIONS;
	
	var $content		 = $( '#main' ),
		$features		 = $( '#s-features' ),
		$featuresContent = $( '#sf-content' ),
		$featuresBg		 = $( '#sf-bg' ),
		$divider		 = $( '.sf-divider' ),
		$chapter		 = $( '.sf-chapters' ),
		$items			 = $( '.sf-items' ),
		$item			 = $( '.sf-item' ),
		$moreBtn		 = $( '.sf-moreBtn' ),
		$exitBtn		 = $( '#sf-exit' );

	var reset = function reset() {
		$features.css( 'visibility', 'hidden' );
		TweenMax.set( $features, { top: 0, opacity: 1, rotationX: 0, scale: 1 } );
		TweenMax.set( $featuresBg, { rotationX: 15, scale: .72, opacity: 0, top: '100%' } );
		TweenMax.set( $featuresContent, { opacity: 0, marginTop: '250px' } );
		TweenMax.set( $exitBtn, { opacity: 0 } );
		TweenMax.set( $divider, { width: 0, marginLeft: '50%' } );
		TweenMax.set( $chapter, { opacity: 0 } );
		TweenMax.set( $items, { top: '100px' } );
		
		$item.each(function(i){
			$item.eq(i).find('a span').css( 'margin-top', ($item.eq(i).find('a span').height()*-.5)+'px' );
		});
		
		TweenMax.set( $item.eq(0), { marginTop: '100px', opacity: 0 } );
		TweenMax.set( $item.eq(1), { marginTop: '200px', opacity: 0 } );
		TweenMax.set( $item.eq(2), { marginTop: '300px', opacity: 0 } );
		TweenMax.set( $item.eq(3), { marginTop: '400px', opacity: 0 } );
		
		TweenMax.set( $item.eq(4), { marginTop: '100px', opacity: 0 } );
		TweenMax.set( $item.eq(5), { marginTop: '200px', opacity: 0 } );
		
		TweenMax.set( $item.eq(6), { marginTop: '100px', opacity: 0 } );
		TweenMax.set( $item.eq(7), { marginTop: '200px', opacity: 0 } );
		
		TweenMax.set( $moreBtn, { marginTop: '550px', opacity: 0 } );
	};

	var animateIn = function animateIn() {
		reset();
		$features.css( 'visibility', 'visible' );
		$featuresBg.css( 'opacity', '1' );
		TweenMax.to( $content, .5, { opacity: .8, rotationX: 25, transformOrigin: 'center bottom', ease: Cubic.easeInOut } );
		TweenMax.set( $featuresBg, { scale: 1, rotationX: 0 } );
		TweenMax.to( $featuresBg, .65, { delay: .35, top: '0%', ease: Cubic.easeInOut  } );
		TweenMax.to( $exitBtn, .35, { delay: 1, opacity: 1, ease: Cubic.easeOut } );
		TweenMax.to( $featuresContent, .5, { delay: .75, opacity: 1, marginTop:'100px', ease: Quad.easeOut } );
		TweenMax.to( $divider, .75, { delay: 1, width: '100%', marginLeft: 0, ease: Cubic.easeInOut } );
		
		TweenMax.to( $chapter, .5, { delay: 1.25, opacity: 1, ease: Cubic.easeOut } );
		
		TweenMax.to( $items, .5, { delay: .75, top: 0, ease: Cubic.easeOut } );
		TweenMax.to( $item.eq(0), .5, { delay: .75, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		TweenMax.to( $item.eq(1), .5, { delay: .85, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		TweenMax.to( $item.eq(2), .5, { delay: 1.05, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		TweenMax.to( $item.eq(3), .5, { delay: 1.35, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		
		TweenMax.to( $items.eq(1), .5, { delay: .9, top: 0, ease: Cubic.easeInOut } );
		TweenMax.to( $item.eq(4), .5, { delay: .9, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		TweenMax.to( $item.eq(5), .5, { delay: 1, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		
		
		TweenMax.to( $items.eq(2), .5, { delay: 1.05, top: 0, ease: Cubic.easeInOut } );
		TweenMax.to( $item.eq(6), .5, { delay: 1.05, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		TweenMax.to( $item.eq(7), .5, { delay: 1.15, marginTop: '1px', opacity: 1, ease: Cubic.easeOut } );
		
		TweenMax.to( $moreBtn, .5, { delay: 1.65, marginTop: '500px', opacity: 1, ease: Cubic.easeOut } );
	};

	var animateOut = function animateOut() {
		TweenMax.to( $featuresContent, .5, { opacity: 0 } );
		
		TweenMax.set( $features, { transformOrigin: 'center bottom', rotationX: 0, scale: 1 } );
		TweenMax.to( $features, .65, { delay: 0, top: '120%', ease: Cubic.easeInOut } );
		TweenMax.to( $content, .5, { delay: .35, rotationX: 0, transformOrigin: 'center bottom', opacity: 1, ease: Cubic.easeInOut, onComplete: function(){
			$content.removeAttr('style');
			$features.removeAttr('style');
			$featuresBg.removeAttr('style');
			$items.removeAttr('style');
			$item.removeAttr('style');
			$moreBtn.removeAttr('style');
			TweenMax.set( $content, { transformPerspective: 600 } );
			TweenMax.set( $features, { transformPerspective: 600 } );
			TweenMax.set( $featuresBg, { transformPerspective: 600, rotationX: 15, scale: .72, opacity: 0 } );
		}} );
	};

	var handlers = function handlers() {
		$( '#sf-exit' ).click( function( e ) {
			animateOut();
		});

		$item.find('a').mouseover( function( e ) {
			TweenMax.set( $(this).parent().find('.thumb img'), { scale: 1 } );
			TweenMax.to( $(this).parent().find('.thumb img'), .35, { scale: 1.05, ease: Quad.easeInOut, overwrite: 0 } );
		});

		$item.find('a').mouseout( function( e ) {
			e.stopPropagation();
			TweenMax.killTweensOf($(this).parent().find('.thumb img'));
			TweenMax.to( $(this).parent().find('.thumb img'), .5, { scale: 1, ease: Quad.easeInOut, overwrite: 0 } );
		});
		
		$item.find('a').click( function (e) {
			animateOut();
			
			var tempId = Number($(this).find('.pIndex').html());
			setTimeout( function() {
				SECTIONS.animateTo( tempId, 'next', true );
			}, 650 );
		});
	};
	
	var init = function init() {
		SECTIONS = OPEN.landing.sections;

		TweenMax.set( $content, { transformPerspective: 600 } );
		TweenMax.set( $features, { transformPerspective: 600 } );
		TweenMax.set( $featuresBg, { transformPerspective: 600, rotationX: 15, scale: .72, opacity: 0 } );

		handlers();
	};

	return {
		init: init,
		animateIn: animateIn
		/*animateOut: animateOut*/
	};

})();