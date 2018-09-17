var youtube_welcome = document.getElementById('youtube-video-welcome');
var youtube_placeholder = document.getElementById('youtube-video-welcome-placeholder');
var youtube_spinner = document.getElementById('yt-spinner');
var youtube_button = document.getElementById('yt-button');

// Delayed loading of the embed thumbnail
if (youtube_placeholder) {
	var youtube_placeholder_img = document.createElement( "img" );

	youtube_placeholder_img.onload = function() {
		var img = this;
		setTimeout( function() {
		  img.style.opacity = '100';
		}, 1500);
	}
	
	youtube_placeholder_img.setAttribute( "class", "yt-thumbnail" );
	youtube_placeholder_img.setAttribute( "src", "images/photos/UFRGS-campus-centro.jpg" );

	youtube_placeholder.appendChild( youtube_placeholder_img );
};
// --------	

// Delayed loading of the hero banner background
var banner_bg_img_wrapper = document.getElementById('hero-bg-img-wrapper')

if (banner_bg_img_wrapper) {
  var banner_bg_img = document.createElement( "img" );

	banner_bg_img.onload = function() {
		setTimeout( function() {
		  banner_bg_img_wrapper.style.opacity = '100';
		}, 1500);
	}
	
	banner_bg_img.setAttribute( "src", "images/photos/hero_bg_antigo.jpg" );

	banner_bg_img_wrapper.appendChild( banner_bg_img );
};
// --------

// Lazy loading of the video iframe on user click
if (youtube_welcome) {
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
};
// --------

// Show hide sticky header on scrolling past the hero banner
	
	var currentScrollY = 0;
	var header_is_sticky = 0;
	var hero_banner_height = document.getElementById('banner').scrollHeight;
	var header_sticky = document.getElementById('header_sticky');

	document.addEventListener( "scroll", function() {
		currentScrollY = window.pageYOffset;
		if (header_is_sticky == 0 && currentScrollY > hero_banner_height) {
    		header_is_sticky = 9;
			header_sticky.style.display = 'block';
			setTimeout( function() {
				header_sticky.classList.add("visible");
				setTimeout( function() {
					header_is_sticky = 1;	
				}, 220);
			}, 20);
  		} else if (header_is_sticky == 1 && currentScrollY <= hero_banner_height) {
    		header_is_sticky = 9;
			header_sticky.classList.remove("visible");
			setTimeout( function() {
				header_sticky.style.display = 'none';
				header_is_sticky = 0;
			}, 220);
  		}
	}, false);

// --------

// Mobile navigation menu

	var navButton = document.getElementById('navButton');
	var navPanel = document.getElementById('navPanel');
	var panel_is_visible = 0;

	navButton.addEventListener( "click", function() {
		if (panel_is_visible == 0) {
			panel_is_visible = 9;
			navPanel.style.display = 'flex';
			setTimeout( function() {
				navPanel.classList.add("visible");
				setTimeout( function() {
					panel_is_visible = 1;
				}, 400);
			}, 20);
				
		} else if (panel_is_visible == 1) {
			panel_is_visible = 9;
			navPanel.classList.remove("visible");
			setTimeout( function() {
		  		navPanel.style.display = 'none';
				panel_is_visible = 0;
			}, 400);
		}
	}, false);