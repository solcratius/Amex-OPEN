OPEN.namespace( 'landing.nav' );

OPEN.landing.nav = (function() {
	var SECTIONS,
		FEATURES,
		NAV;
	
	var $nav			= $( '#sub-nav' ),
		$btnFeatures	= $( '#btn-features' ),
		$btnCards		= $( '#btn-cards' ),
		$btnChat		= $( '#btn-chat' ),
		$btnLearn		= $( '#btn-learn' ),
		$btnsRight		= $( '#sn-right' ),
		$btnLabel		= $( '#sub-nav .snb-label' ),
		$btnPrev		= $( '#sn-right #btn-prev' ),
		$btnPrevlabel	= $( '#sn-right #btn-prev .label' ),
		$btnNext		= $( '#sn-right #btn-next' ),
		$btnNextLabel	= $( '#sn-right #btn-next .label' ),
		$openLogo		= $( '#sn-openLogo' );
		
	var	cardNavShowed   = false,
		winH;
	
	var cardNavOn = function cardNavOn() {
		if ( cardNavShowed ) return;
		
		cardNavShowed = true;
		$('#sub-nav').addClass('outerShadow');
		$('.sn-btn').addClass('trans-btn');
		
		TweenMax.to( $btnsRight, .2, { delay: 0, overwrite:0, right: '-120px', ease: Cubic.easeInOut } );
		TweenMax.to( $btnFeatures, .5, { delay: .55, overwrite:0, marginLeft: '-335px', left: '49.5%', ease: Cubic.easeInOut } );
		TweenMax.to( $btnCards, .5, { delay: .65, overwrite:0, marginLeft: '-185px', left: '49.5%', ease: Cubic.easeInOut } );
		TweenMax.to( $btnChat, .5, { delay: .65, overwrite:0, marginLeft: '143px', left: '49.5%', ease: Cubic.easeInOut } )
		TweenMax.to( $btnLearn, .75, { delay: .65, overwrite:0, top: 0, ease: Cubic.easeOut } );
		
		TweenMax.to( $nav, .75, { height: winH-92, delay: .15, overwrite:0, ease: Cubic.easeInOut } );
		TweenMax.to( $nav, .75, { top: 92, delay: .15, overwrite:0, ease: Cubic.easeInOut, onStart: function() {
			$nav.css({
				"bottom": "auto",
				"top": (winH-39) + "px"
			});
		}} );
		TweenMax.to( $nav, .75, { height: '39px', delay: .9, overwrite:0, ease: Cubic.easeInOut } );
		TweenMax.to( $openLogo, .5, { delay: .9, overwrite:0, marginTop: '3px', marginBottom: '3px', ease: Cubic.easeInOut } );
		TweenMax.to( $btnLabel, .5, { delay: .9, overwrite:0, lineHeight: '39px', ease: Cubic.easeInOut } );
		
		TweenMax.delayedCall( 1.65, function(){
			$('.sn-btn').addClass('aj-btn');
			$('.sn-btn').removeClass('trans-btn');
			$btnCards.addClass('selected');
		} );
	};
	
	var cardNavOff = function cardNavOff() {
		if ( !cardNavShowed ) return;
		cardNavShowed = false;
		$('.sn-btn').removeClass('aj-btn');
		$('.sn-btn').removeClass('selected');	
		$('#sub-nav').removeClass('outerShadow');
		$('.sn-btn').addClass('trans-btn');
		
		TweenMax.to( $btnFeatures, .5, { delay: .3, overwrite:0, marginLeft: '-256px', left: '49.5%', ease: Cubic.easeInOut } );
		TweenMax.to( $btnCards, .5, { delay: .2, overwrite:0, marginLeft: '-93px', left: '49.5%', ease: Cubic.easeInOut } );
		TweenMax.to( $btnChat, .5, { delay: .2, overwrite:0, marginLeft: '118px', left: '49.5%', ease: Cubic.easeInOut } );
		TweenMax.to( $btnLearn, .5, { delay: 0, overwrite:0, top: '-100%', ease: Cubic.easeIn } );
		TweenMax.to( $btnsRight, .25, { delay: 1.15, overwrite:0, right: '0', ease: Cubic.easeInOut } );
		
		$nav.css({
			"bottom": (winH-131) + "px",
			"top": "auto"
		});
		
		TweenMax.to( $nav, .75, { height: winH-92, delay: 0, overwrite:0, ease: Cubic.easeInOut } );
		TweenMax.to( $nav, .75, { bottom: 0, delay: 0, overwrite:0, ease: Cubic.easeInOut } );
		TweenMax.to( $nav, .75, { height: '59px', delay: .55, overwrite:0, ease: Cubic.easeInOut } );
		
		TweenMax.to( $openLogo, .5, { delay: .55, overwrite:0, marginTop: '12px', marginBottom: '12px', ease: Cubic.easeInOut } );
		TweenMax.to( $btnLabel, .5, { delay: .55, overwrite:0, lineHeight: '59px', ease: Cubic.easeInOut } );
		
		TweenMax.delayedCall( .9, function(){
			$('.sn-btn').removeClass('trans-btn');
		} );
	};
	
	var show = function show() {
		TweenMax.to( $nav, .5, { bottom: 0 } );
	};
	
	var disableNav = function disableNav(mc) {
		TweenMax.to( $(mc).find('.label'), .2, { opacity: .5 } );
		$(mc).css('cursor', 'default');
	};

	var enableNav = function enableNav(mc) {
		TweenMax.to( $(mc).find('.label'), .2, { opacity: 1 } );
		$(mc).css('cursor', 'pointer');
	};
	
	var handlers = function handlers() {				
		$btnNext.mouseover( function( e ) {
			e.stopPropagation();
			if ($btnNextLabel.css('opacity') >= 1) TweenMax.to( $btnNext, .25, { backgroundColor: "#12a9cc", opacity: 1, ease: Cubic.easeOut});
		});

		$btnNext.mouseout( function( e ) {
			e.stopPropagation();
			TweenMax.to( $btnNext, .25, { backgroundColor: "#009bbb", opacity: 1, ease: Cubic.easeIn});
		});

		$btnNext.click( function( e ) {
			e.stopPropagation();
			if ($btnNextLabel.css('opacity') >= 1) SECTIONS.next();
		});
		
		$btnPrev.mouseover( function( e ) {
			e.stopPropagation();
			if ($btnPrevlabel.css('opacity') >= 1) TweenMax.to( $btnPrev, .25, { backgroundColor: "#12a9cc", opacity: 1, ease: Cubic.easeOut});
		});

		$btnPrev.mouseout( function( e ) {
			e.stopPropagation();
			TweenMax.to( $btnPrev, .25, { backgroundColor: "#009bbb", opacity: 1, ease: Cubic.easeIn});
		});

		$btnPrev.click( function( e ) {
			e.stopPropagation();
			if ($btnPrevlabel.css('opacity') >= 1) SECTIONS.prev();
		});
		
		var btnChatHovered = false;
		var btnLearnHovered = false;
		
		$btnChat.mouseover( function( e ) {
			e.stopPropagation();
			closeDropDownNav( $('.sub-drop.sd-features'), $btnFeatures );
			closeDropDownNav( $('.sub-drop.sd-learn'), $btnLearn );
			btnFeaturesHovered = false;
			btnLearnHovered = false;
			$('.sub-drop.sd-features').css('z-index', '200');
			$('.sub-drop.sd-learn').css('z-index', '200');
			
			if ( $btnChat.hasClass('aj-btn') )
			{
				if ( $('.sub-drop.sd-chat').height() < 121 )
				{
					$('.sub-drop.sd-chat').css('z-index', '300');
					$btnChat.addClass('subdrop-sel');
					TweenLite.to( $('.sub-drop.sd-chat'), .35, { height: "121px", ease: Quad.easeInOut } );
				}
					
				btnChatHovered = true;
				TweenMax.killDelayedCallsTo(closeDropDownNav);
			}
		});
		
		$('.sub-drop.sd-chat').mouseover( function( e ) {
			e.stopPropagation();
			btnChatHovered = true;
			TweenMax.killDelayedCallsTo(closeDropDownNav);
		});
		
		$btnChat.mouseout( function( e ) {
			e.stopPropagation();
			if (btnChatHovered)
			{
				btnChatHovered = false;
				if ( $btnChat.hasClass('aj-btn') )  TweenMax.delayedCall(.1, closeDropDownNav, [ $('.sub-drop.sd-chat'), $btnChat ]);
			}
		});
		
		$('.sub-drop.sd-chat').mouseout( function( e ) {
			e.stopPropagation();
			if (btnChatHovered)
			{
				btnChatHovered = false;
				if ( $btnChat.hasClass('aj-btn') )  TweenMax.delayedCall(.1, closeDropDownNav, [ $('.sub-drop.sd-chat'), $btnChat ]);
			}
		});
		
		$btnLearn.mouseover( function( e ) {
			e.stopPropagation();
			closeDropDownNav( $('.sub-drop.sd-features'), $btnFeatures );
			closeDropDownNav( $('.sub-drop.sd-chat'), $btnChat );
			btnFeaturesHovered = false;
			btnChatHovered = false;
			$('.sub-drop.sd-features').css('z-index', '200');
			$('.sub-drop.sd-chat').css('z-index', '200');
			
			if ( $btnLearn.hasClass('aj-btn') )
			{
				if ( $('.sub-drop.sd-learn').height() < 121 )
				{
					$('.sub-drop.sd-learn').css('z-index', '300');
					$btnLearn.addClass('subdrop-sel');
					TweenLite.to( $('.sub-drop.sd-learn'), .35, { height: "121px", ease: Quad.easeInOut } );
				}
				
				btnLearnHovered = true;
				TweenMax.killDelayedCallsTo(closeDropDownNav);
			}
		});
		
		$('.sub-drop.sd-learn').mouseover( function( e ) {
			e.stopPropagation();
			btnLearnHovered = true;
			TweenMax.killDelayedCallsTo(closeDropDownNav);
		});
		
		$btnLearn.mouseout( function( e ) {
			e.stopPropagation();
			if (btnLearnHovered)
			{
				btnLearnHovered = false;
				if ( $btnLearn.hasClass('aj-btn') )  TweenMax.delayedCall(.1, closeDropDownNav, [ $('.sub-drop.sd-learn'), $btnLearn ]);
			}
		});
		
		$('.sub-drop.sd-learn').mouseout( function( e ) {
			e.stopPropagation();
			if (btnLearnHovered)
			{
				btnLearnHovered = false;
				if ( $btnLearn.hasClass('aj-btn') )  TweenMax.delayedCall(.1, closeDropDownNav, [ $('.sub-drop.sd-learn'), $btnLearn ]);
			}
		});
		
		$btnFeatures.click( function( e ) {
			FEATURES.animateIn();
		});
		
		$btnCards.click( function( e ) {
			if (!SECTIONS.isTransitioning())
			{				
				if ( !cardNavShowed )
				{
					disableNav('#btn-next');
					disableNav('#btn-prev');
					SECTIONS.animateTo( 100, 'next', true );
				}
			}
		});
		
		$('#sn-openLogo').click( function( e ) {
			SECTIONS.animateTo( 0, 'prev', true );
		});
	};
	
	var closeDropDownNav = function closeDropDownNav(sel, id) {
		TweenLite.to( sel, .35, { height: 0, ease: Quad.easeInOut, onComplete: function() {
			id.removeClass('subdrop-sel');
		} } );
	};
	
	var setWinH = function setWinH(y) {
		winH = y;
	};
		
	var init = function init() {
		SECTIONS = OPEN.landing.sections;
		FEATURES = OPEN.features;
		NAV = OPEN.nav;
		
		handlers();
	};

	return {
		show: show,
		cardNavOn: cardNavOn,
		cardNavOff: cardNavOff,
		disableNav: disableNav,
		enableNav: enableNav,
		setWinH: setWinH,
		init: init
	};

})();