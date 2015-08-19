OPEN.namespace( 'landing.contents' );

OPEN.landing.contents = (function() {
	var VPLAYER;
	
	var $pageBg	= $( '#bg .page' );
	
	var $thisContent;
	
	var init = function init() {
		VPLAYER = OPEN.landing.vplayer;
		contentReset(2);
		contentReset(3);
		contentReset(4);
		contentReset(5);
	};
	
	var rNumGenerator = function (num) {
		return Math.floor(Math.random()*num);
    };
	
	var contentInit = function contentInit(at) {
		//console.log("contentInit "+at+" called.");
		$thisContent = null;
		$thisContent = $pageBg.eq(at).find('.content'); 
		
		switch (at) {
		case 2:
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtn1'), .5, { top: '23px', delay: .5, ease: Back.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtn2'), .5, { top: '23px', delay: .65, ease: Back.easeOut, overwrite: 0 } );
			
			$thisContent.find('.bottomCard a').on('mouseover', function(e){
				e.stopPropagation();
				TweenMax.to( $(this), .15, { top: '8px', ease: Quad.easeOut, overwrite: 0 } );
			});
			$thisContent.find('.bottomCard a').on('mouseout', function(e){
				e.stopPropagation();
				TweenMax.to( $(this), .35, { top: '23px', ease: Quad.easeInOut, overwrite: 0 } );
			});
			
			$thisContent.find('.midVideo').on('mouseover', function(e){
				e.stopPropagation();
				TweenMax.set( $thisContent.find('.midVideo .thumb'), { scale: 1 } );
				TweenMax.to( $thisContent.find('.midVideo .thumb'), .35, { scale: 1.1, ease: Quad.easeInOut, overwrite: 0 } );
			});
			$thisContent.find('.midVideo').on('mouseout', function(e){
				e.stopPropagation();
				TweenMax.killTweensOf($thisContent.find('.midVideo .thumb'));
				TweenMax.to( $thisContent.find('.midVideo .thumb'), .5, { scale: 1, ease: Quad.easeInOut, overwrite: 0 } );
			});
			$thisContent.find('.midVideo').click(function(e){
				VPLAYER.startVideo(0);
			});
			break;
		case 3:
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtnMulti img.card0'), .5, { top: '15px', delay: .5, ease: Back.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtnMulti img.card1'), .5, { top: '15px', delay: .55, ease: Back.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtnMulti img.card2'), .5, { top: '15px', delay: .65, ease: Back.easeOut, overwrite: 0 } );
			
			$thisContent.find('.bottomCard a.cardBtnMulti').on('mouseover', function(e){
				e.stopPropagation();
				TweenMax.to( $(this).find('img.card0'), .15, { top: 0, delay:0, ease: Quad.easeOut, overwrite: 0 } );
				TweenMax.to( $(this).find('img.card1'), .15, { top: 0, delay:.1, ease: Quad.easeOut, overwrite: 0 } );
				TweenMax.to( $(this).find('img.card2'), .15, { top: 0, delay:.15, ease: Quad.easeOut, overwrite: 0 } );
			});
			$thisContent.find('.bottomCard a.cardBtnMulti').on('mouseout', function(e){
				e.stopPropagation();
				TweenMax.to( $(this).find('img.card0'), .35, { top: '15px', delay:0, ease: Quad.easeInOut, overwrite: 0 } );
				TweenMax.to( $(this).find('img.card1'), .35, { top: '15px', delay:.07, ease: Quad.easeInOut, overwrite: 0 } );
				TweenMax.to( $(this).find('img.card2'), .35, { top: '15px', delay:.1, ease: Quad.easeInOut, overwrite: 0 } );
			});
			
			$thisContent.find('.numAnim img').eq(0).attr('src', '');
			$thisContent.find('.numAnim img').eq(1).attr('src', '');
			$thisContent.find('.numAnim img').eq(2).attr('src', '');
			TweenMax.to( $thisContent.find('.numAnim img').eq(0), .5, { opacity: 1, delay: .4, ease: Quad.easeOut, overwrite: 0, onStart: function(){
				$thisContent.find('.numAnim img').eq(0).attr('src', 'app/images/content-3-numAnim0a.gif');
			} } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(0), .5, { opacity: 1, delay: 1.1, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.numAnim img').eq(0), .5, { opacity: 0, delay: 2.9, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(0), .5, { opacity: 0, delay: 2.9, ease: Quad.easeOut, overwrite: 0 } );
			
			TweenMax.to( $thisContent.find('.numAnim img').eq(1), .5, { opacity: 1, delay: 3.4, ease: Quad.easeOut, overwrite: 0, onStart: function(){
				$thisContent.find('.numAnim img').eq(1).attr('src', 'app/images/content-3-numAnim1a.gif');
			} } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(1), .5, { opacity: 1, delay: 4.1, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.numAnim img').eq(1), .5, { opacity: 0, delay: 5.9, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(1), .5, { opacity: 0, delay: 5.9, ease: Quad.easeOut, overwrite: 0 } );
			
			TweenMax.to( $thisContent.find('.numAnim img').eq(2), .5, { opacity: 1, delay: 6.4, ease: Quad.easeOut, overwrite: 0, onStart: function(){
				$thisContent.find('.numAnim img').eq(2).attr('src', 'app/images/content-3-numAnim2a.gif');
			} } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(2), .5, { opacity: 1, delay: 7.1, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.numAnim img').eq(2), .5, { opacity: 0, delay: 8.9, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(2), .5, { opacity: 0, delay: 8.9, ease: Quad.easeOut, overwrite: 0 } );
			
			TweenMax.to( $thisContent.find('.numAnim img').eq(3), .5, { opacity: 1, delay: 9.4, ease: Quad.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.labelAnim img').eq(3), .5, { opacity: 1, delay: 9.7, ease: Quad.easeOut, overwrite: 0 } );
			break;
		case 4:
			TweenMax.to( $thisContent.find('.bottomCard a'), .5, { top: '23px', delay: .5, ease: Back.easeOut, overwrite: 0 } );
			
			$thisContent.find('.bottomCard a').on('mouseover', function(e){
				e.stopPropagation();
				TweenMax.to( $(this), .15, { top: '8px', ease: Quad.easeOut, overwrite: 0 } );
			});
			$thisContent.find('.bottomCard a').on('mouseout', function(e){
				e.stopPropagation();
				TweenMax.to( $(this), .35, { top: '23px', ease: Quad.easeInOut, overwrite: 0 } );
			});
			
			$thisContent.find('.animFrame.input').show();
			TweenMax.set( $thisContent.find('.animFrame.input'), { opacity: 1 } );
			$thisContent.find('.animFrame.input input').on('focus', function(e){
				$thisContent.find('.animFrame.input input').val("$"+(rNumGenerator(10)+1)+","+(rNumGenerator(9)+1)+((rNumGenerator(9)+1)*10));
			});
			$thisContent.find('.animFrame.input input').on('blur', function(e){
				if ($thisContent.find('.animFrame.input input').val() == "" ) $thisContent.find('.animFrame.input input').val("Enter your expected monthly spend");
			});
			
			$thisContent.find('.animFrame.input input').on('keyup', function(e) {
				if (isNaN($thisContent.find('.animFrame.input input').val())) $thisContent.find('.animFrame.input input').addClass("error");
	    		else $thisContent.find('.animFrame.input input').removeClass("error");
			});
			
			$thisContent.find('.animFrame.input .submitBtn').on('click', function(e) {
				TweenMax.to( $thisContent.find('.animFrame.input'), .15, { opacity: 0, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $thisContent.find('.animFrame.input').hide(); } } );
				
				$thisContent.find('.animFrame.loading img').attr('src', 'app/images/content-4-loaderAnim2.gif');
				$thisContent.find('.animFrame.loading').show();
				TweenMax.set( $thisContent.find('.animFrame.loading'), { opacity: 0 } );
				TweenMax.to( $thisContent.find('.animFrame.loading'), .25, { opacity: 1, delay:.25, ease: Quad.easeOut, overwrite: 0 } );
				TweenMax.to( $thisContent.find('.animFrame.loading'), .15, { opacity: 0, delay:2.9, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $thisContent.find('.animFrame.loading').hide(); } } );
				
				$thisContent.find('.animFrame.result').show();
				TweenMax.set( $thisContent.find('.animFrame.result'), { opacity: 0 } );
				TweenMax.to( $thisContent.find('.animFrame.result'), .25, { opacity: 1, delay:3.3, ease: Quad.easeOut, overwrite: 0 } );
			});
			
			$thisContent.find('.animFrame.result').on('click', function(e) {
				TweenMax.to( $thisContent.find('.animFrame.result'), .25, { opacity: 0, ease: Quad.easeOut, overwrite: 0, onComplete: function() { $thisContent.find('.animFrame.result').hide(); } } );
				$thisContent.find('.animFrame.loading img').attr('src', 'app/images/content-4-loaderAnim.gif');
				$thisContent.find('.animFrame.input input').val("Enter your expected monthly spend");
				$thisContent.find('.animFrame.input input').removeClass('error');
				$thisContent.find('.animFrame.input').show();
				TweenMax.set( $thisContent.find('.animFrame.input'), { opacity: 0 } );
				TweenMax.to( $thisContent.find('.animFrame.input'), .25, { opacity: 1, delay:.35, ease: Quad.easeOut, overwrite: 0 } );
			});
			
			break;
		case 5:
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtn1'), .5, { top: '23px', delay: .5, ease: Back.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.bottomCard a.cardBtn2'), .5, { top: '23px', delay: .65, ease: Back.easeOut, overwrite: 0 } );
			
			$thisContent.find('.bottomCard a').on('mouseover', function(e){
				e.stopPropagation();
				TweenMax.to( $(this), .15, { top: '8px', ease: Quad.easeOut, overwrite: 0 } );
			});
			$thisContent.find('.bottomCard a').on('mouseout', function(e){
				e.stopPropagation();
				TweenMax.to( $(this), .35, { top: '23px', ease: Quad.easeInOut, overwrite: 0 } );
			});
			$thisContent.find('.iconAnim').show();
			
			TweenMax.to( $thisContent.find('.iconAnim img').eq(0), .5, { left: '40px', delay: .45, ease: Cubic.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.iconAnim img').eq(1), .5, { left: '126px', delay: .55, ease: Cubic.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.iconAnim img').eq(2), .5, { left: '212px', delay: .8, ease: Cubic.easeOut, overwrite: 0 } );
			TweenMax.to( $thisContent.find('.iconAnim img').eq(3), .5, { left: '298px', delay: 1.2, ease: Cubic.easeOut, overwrite: 0 } );
			break;
		}
	};
	
	var contentReset = function contentReset(at) {
		//console.log("contentReset "+at+" called.");
		$thisContent = null;
		$thisContent = $pageBg.eq(at).find('.content');
		
		switch (at) {
		case 2:
			$thisContent.find('.bottomCard a').css({'top': '62px'});
			TweenMax.set( $thisContent.find('.midVideo .thumb'), { scale: 1 } );
			$thisContent.find('.bottomCard a').off();
			$thisContent.find('.midVideo').off();
			break;
		case 3:
			$thisContent.find('.bottomCard a.cardBtnMulti img').css({'top': '54px'});
			TweenMax.killTweensOf($thisContent.find('.numAnim img'));
			TweenMax.killTweensOf($thisContent.find('.labelAnim img'));
			$thisContent.find('.numAnim img').show();
			$thisContent.find('.labelAnim img').show();
			TweenMax.set( $thisContent.find('.numAnim img'), { opacity: 0 } );
			TweenMax.set( $thisContent.find('.labelAnim img'), { opacity: 0 } );
			$thisContent.find('.bottomCard a.cardBtnMulti').off();
			break;
		case 4:
			TweenMax.killTweensOf($thisContent.find('.animFrame.input'));
			TweenMax.killTweensOf($thisContent.find('.animFrame.loading'));
			TweenMax.killTweensOf($thisContent.find('.animFrame.result'));
			$thisContent.find('.bottomCard a').css({'top': '62px'});
			$thisContent.find('.bottomCard a').off();
			$thisContent.find('.animFrame.input .submitBtn').off();
			$thisContent.find('.animFrame.input input').off();
			$thisContent.find('.animFrame.input input').val("Enter your expected monthly spend");
			$thisContent.find('.animFrame.loading img').attr('src', '');
			$thisContent.find('.animFrame.result').off();
			$thisContent.find('.animFrame').hide();
			break;
		case 5:
			TweenMax.killTweensOf($thisContent.find('.iconAnim img'));
			$thisContent.find('.iconAnim img').css({'left': '426px'});
			$thisContent.find('.bottomCard a').css({'top': '62px'});
			$thisContent.find('.bottomCard a').off();
			$thisContent.find('.iconAnim').hide();
			break;
		}
	};
	
	return {
		contentInit: contentInit,
		contentReset: contentReset,
		init: init
	};

})();