OPEN.namespace( 'landing.vplayer' );

OPEN.landing.vplayer = (function() {	
	var $vPlayer	= $( '#vPlayer' ),
		$vpCloseBtn	= $( '#vp-exit' ),
		video		= $vPlayer.find('video')[0];
	
	var winW,
		winH,
		vidW = 1280,
		vidH = 720;
	
	var startVideo = function startVideo(id) {
		video.currentTime = 0;
		video.play();
	    video.onended = function(e) {
	    	buildOut();
	    };
	    buildIn();
	};
	
	var buildIn = function buildIn() {
		$vPlayer.fadeIn(250);
	};
	
	var buildOut = function buildOut() {
		video.pause();
		$vPlayer.fadeOut(250);
	};
	
	var setPlayerSize = function setPlayerSize() {
		if (winW >= 1024 && winH >= 650)
		{
			$vPlayer.find('video').css({'width': '100%'});
			var vpH = (winW*vidH)/vidW;
			
			$vPlayer.find('video').css({'height': vpH+'px'});
			$vPlayer.find('video').css({'margin-top': (vpH*-.5)+'px', 'margin-left': (winW*-.5)+'px'});
			
			if (vpH > winH)
			{
				$vPlayer.find('video').css({'height': '100%'});
				var vpW = (winH*vidW)/vidH;
				
				$vPlayer.find('video').css({'width': vpW+'px'});
				$vPlayer.find('video').css({'margin-top': (winH*-.5)+'px', 'margin-left': (vpW*-.5)+'px'});
			}
		}
	};
	
	var setWinSize = function setWinSize(x, y) {
		winW = x;
		winH = y;
		setPlayerSize();
	};
	
	var init = function init() {
		$vpCloseBtn.click( function( e ) {
			buildOut();
		});
	};

	return {
		startVideo: startVideo,
		setWinSize: setWinSize,
		init: init
	};

})();