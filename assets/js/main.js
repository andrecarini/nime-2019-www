var youtube_welcome = document.getElementById('youtube-video-welcome');
var youtube_placeholder = document.getElementById('youtube-video-welcome-placeholder');
var youtube_spinner = document.getElementById('yt-spinner');
var youtube_button = document.getElementById('yt-button');

// Delayed loading of the embed thumbnail
	var youtube_placeholder_img = document.createElement( "img" );

	youtube_placeholder_img.onload = function() {
		var img = this;
		setTimeout( function() {
		  img.style.opacity = '100';
		}, 250);
	}
	
	youtube_placeholder_img.setAttribute( "class", "yt-thumbnail" );
	youtube_placeholder_img.setAttribute( "src", "images/photos/UFRGS-campus-centro.jpg" );

	youtube_placeholder.appendChild( youtube_placeholder_img );
// --------	

// Delayed loading of the hero banner background
  var banner_bg_img_wrapper = document.getElementById('hero-bg-img-wrapper')
  var banner_bg_img = document.createElement( "img" );

	banner_bg_img.onload = function() {
		setTimeout( function() {
		  banner_bg_img_wrapper.style.opacity = '100';
		}, 250);
	}
	
	banner_bg_img.setAttribute( "class", "" );
	banner_bg_img.setAttribute( "src", "images/photos/hero_bg_antigo.jpg" );

	banner_bg_img_wrapper.appendChild( banner_bg_img );
// --------

// Lazy loading of the video iframe on user click
	youtube_welcome.addEventListener( "click", function _youtubeLazyLoad() {
		var iframe = document.createElement( "iframe" );

		// Placeholder fade-out and removel after the iframe has finished loading
		iframe.onload = function() {
			youtube_placeholder.style.opacity = '0';
			
			setTimeout( function() {
				youtube_placeholder.parentNode.removeChild(youtube_placeholder);
			}, 2100);
		};
		
		// Hide button, show loading spinner
		youtube_button.style.opacity = '0';
		youtube_spinner.style.opacity = '85';

		iframe.setAttribute( "frameborder", "0" );
		iframe.setAttribute( "allowfullscreen", "" );
		iframe.setAttribute( "allow", "encrypted-media" );
		iframe.setAttribute( "src", "https://www.youtube.com/embed/CMSripnGg9U?modestbranding=1&rel=0&autoplay=1" );

		this.removeEventListener( "click", _youtubeLazyLoad, true );
		this.appendChild( iframe );
	}, true);
// --------	

/*
// Button.
	$(
		'<div id="navButton">' +
			'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

// Panel.
	$(
		'<div id="navPanel">' +
			'<img class="panel-logo" src="images/NIME2019_v5_short_optimized.svg" />' +
			'<nav>' +
				$('#nav').navList() +
			'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});
		*/
