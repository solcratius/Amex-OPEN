OPEN.namespace( 'landing.bgimg' );

OPEN.landing.bgimg = (function() {
	
	var winW,
		winH,
		imgW,
		imgH,
		winAspectRatio,
		imgAspectRatio,
		$bgImg = $('#bg .page .bg img');
	
	var init = function init() {
		imgW = 1400;
		imgH = 900;
		imgAspectRatio = (imgH*100)/imgW;
		console.log("YO");
	};
	
	var setImg = function setImg() {
		winW = $(window).width();
		winH = $(window).height();
		
		winAspectRatio = winH/winW;
		
		if (winAspectRatio >= imgAspectRatio) $bgImg.css({'width': 'auto', 'height': winH+'px'});
		else $bgImg.css({'width': winW+'px', 'height': 'auto'});
	};
	
	return {
		init: init,
		setImg: setImg
	};

})();