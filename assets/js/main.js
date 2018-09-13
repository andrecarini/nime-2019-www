/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = 	$(window),
		$body = 	$('body'),
		$header = 	$('#header'),
		$banner = 	$('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
	
	// Custom stuff
		$(document).ready( function() {
			
			var youtube_welcome = document.getElementById('youtube-video-welcome');
			var youtube_placeholder = document.getElementById('youtube-video-welcome-placeholder');
			var youtube_spinner = document.getElementById('yt-spinner');
			var youtube_button = document.getElementById('yt-button');
			
			// Lazy loading of the embed thumbnail
				var youtube_placeholder_img = document.createElement( "img" );
			
				youtube_placeholder_img.onload = function() {
					this.style.opacity = '100';
				}
				
				youtube_placeholder_img.setAttribute( "class", "yt-thumbnail" );
				youtube_placeholder_img.setAttribute( "src", "images/PZ-ArsElectronica01small.jpg" );

				youtube_placeholder.appendChild( youtube_placeholder_img );
			// --------	
			
			// Lazy loading of the video iframe
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
		});
	
	// NavPanel.

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

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);
