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
		}, 1000);
	}
	
	youtube_placeholder_img.setAttribute( "class", "yt-thumbnail" );
	youtube_placeholder_img.setAttribute( "src", "images/photos/HomepageYouTubeEmbed_Thumbnail_Full.jpg" );

	youtube_placeholder.appendChild( youtube_placeholder_img );
}
// --------	

// Delayed loading of the hero banner background
var banner_bg_img_wrapper = document.getElementById('hero-bg-img-wrapper');

if (banner_bg_img_wrapper) {
  var banner_bg_img = document.createElement( "img" );

	banner_bg_img.onload = function() {
		setTimeout( function() {
		  banner_bg_img_wrapper.style.opacity = '100';
		}, 1500);
	}
	
	banner_bg_img.setAttribute( "src", "images/photos/hero_bg_antigo.jpg" );

	banner_bg_img_wrapper.appendChild( banner_bg_img );
}
// --------

// Delayed loading of the short hero banner backgrounds
var short_banner_previewimg = document.getElementById('short-banner-previewimg');

if (short_banner_previewimg) {
  var highres_img_src = short_banner_previewimg.dataset.highresurl;
  
  var highres_img_elem = document.createElement( "img" );

  highres_img_elem.onload = function() {
    setTimeout( function() {
      highres_img_elem.className += ' finished_loading';
    }, 1000);
  };
	
	highres_img_elem.setAttribute( "src", highres_img_src );
	highres_img_elem.setAttribute( "class", "highres" );

  // inserts img element after the blurry low-res img placeholder
  short_banner_previewimg.parentNode.insertBefore( highres_img_elem, short_banner_previewimg.nextSibling );
}
// --------

// Lazy loading of the video iframe on user click
if (youtube_welcome) {
	youtube_welcome.addEventListener( "click", function _youtubeLazyLoad() {
		var iframe = document.createElement( "iframe" );

		// Placeholder fade-out and removal after the iframe has finished loading
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
}
// --------

// Show hide sticky header on scrolling past the hero banner

var hero_banner = document.getElementById('banner');
var header_sticky = document.getElementById('header_sticky');

if (hero_banner && header_sticky) {
	var currentScrollY = window.pageYOffset;
	var header_is_sticky = 0;
	var hero_banner_height = hero_banner.scrollHeight;

	if (currentScrollY > hero_banner_height) {
		header_is_sticky = 9;
		header_sticky.style.display = 'block';
		setTimeout( function() {
			header_sticky.classList.add("visible");
			setTimeout( function() {
				header_is_sticky = 1;	
			}, 220);
		}, 20);
	}
	
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
}

// --------

// Toggle between different short header background modes on scrolling down the page

var short_hero_banner = document.getElementById('short-banner');
var header_hero_backdrop = document.getElementById('header-hero-backdrop');
var header_page_backdrop = document.getElementById('header-page-backdrop');

if (short_hero_banner && header_hero_backdrop && header_page_backdrop) {
	var currentScrollY = window.pageYOffset;
	var header_scrolled = 0;
	var hero_banner_height = short_hero_banner.scrollHeight * 0.6;
	
	if (currentScrollY > hero_banner_height) {
		header_scrolled = 9;
		header_hero_backdrop.style.opacity = 0;
		header_page_backdrop.style.opacity = 1;
		setTimeout( function() {
			header_scrolled = 1;	
		}, 220);
	}

	document.addEventListener( "scroll", function() {
		currentScrollY = window.pageYOffset;
		if (header_scrolled == 0 && currentScrollY > hero_banner_height) {
    		header_scrolled = 9;
			header_hero_backdrop.style.opacity = 0;
			header_page_backdrop.style.opacity = 1;
			setTimeout( function() {
				header_scrolled = 1;	
			}, 220);
  		} else if (header_scrolled == 1 && currentScrollY <= hero_banner_height) {
    		header_scrolled = 9;
			header_hero_backdrop.style.opacity = 1;
			header_page_backdrop.style.opacity = 0;
			setTimeout( function() {
				header_scrolled = 0;
			}, 220);
  		}
	}, false);
}

// --------

// Show/hide CFP submission sticky header

var submissionCTA = document.getElementById('submissionCTA-sticky');
var submissionCTA_non_sticky = document.getElementById('submissionCTA-flow');

if (submissionCTA && submissionCTA_non_sticky) {
	var distanceToTop = submissionCTA_non_sticky.getBoundingClientRect().top;
	var header_is_shown = 0;
	
	if (distanceToTop < 0) {
		header_is_shown = 9;
			submissionCTA.style.display = 'flex';
			setTimeout( function() {
				submissionCTA.style.opacity = 1;
				setTimeout( function() {
					header_is_shown = 1;
				}, 750);
			}, 100);
	}

	document.addEventListener( "scroll", function() {
		distanceToTop = submissionCTA_non_sticky.getBoundingClientRect().top;
		
		if (header_is_shown == 0 && distanceToTop < 0) {
    		header_is_shown = 9;
			submissionCTA.style.display = 'flex';
			setTimeout( function() {
				submissionCTA.style.opacity = 1;
				setTimeout( function() {
					header_is_shown = 1;
				}, 750);
			}, 100);
  		} else if (header_is_shown == 1 && distanceToTop >= 0) {
    		header_is_shown = 9;
			submissionCTA.style.opacity = 0;
			setTimeout( function() {
				header_is_shown = 0;
				submissionCTA.style.display = 'none';
			}, 850);
  		}
	}, false);
}

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

// --------

// Toggleable text sections

function collapseSection(element) {
	// set the 'pending' state
	element.setAttribute('data-collapsed', 'pending');
	
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;

	// temporarily disable all css transitions
	var elementTransition = element.style.transition;
	element.style.transition = '';

	// on the next frame (as soon as the previous style change has taken effect),
	// explicitly set the element's height to its current pixel height, so we 
	// aren't transitioning out of 'auto'
	requestAnimationFrame(function() {
	  element.style.height = sectionHeight + 'px';
	  element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 0 + 'px';
    });
	});
}

function expandSection(element) {
  	// set the 'pending' state
	element.setAttribute('data-collapsed', 'pending');
	
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;

	// have the element transition to the height of its inner content
	element.style.height = sectionHeight + 'px';

	// when the next css transition finishes (which should be the one we just triggered)
	element.addEventListener('transitionend', function(e) {
	  // remove this event listener so it only gets triggered once
	  element.removeEventListener('transitionend', arguments.callee);

	  // remove "height" from the element's inline styles, so it can return to its initial value
	  element.style.height = 'auto';
	});
}

document.querySelectorAll('.togglable-text')
	.forEach(function(section) {
		var toggle = section.children[0];
		var collapsible = section.children[1];
	
		var tips = section.querySelectorAll('.tip');
		var text_expand = tips[0];
		var text_collapse = tips[1];
	
		var triangle = section.querySelector('svg'); 
	
		toggle.addEventListener('click', function(e) {
			var isCollapsed = collapsible.getAttribute('data-collapsed');
													   
		   	if(isCollapsed == 'true') {
				text_expand.style.opacity = 0;
				triangle.style.transform = 'rotate(90deg)';
				setTimeout( function() {
					text_expand.style.display = 'none';
					text_collapse.style.display = 'block';
					setTimeout( function() {
						text_collapse.style.opacity = 1;
					}, 20);
				}, 500);
				expandSection(collapsible);
				setTimeout( function() {
					collapsible.setAttribute('data-collapsed', 'false')
				}, 1100);
			} else if(isCollapsed == 'false') {
				text_collapse.style.opacity = 0;
				triangle.style.transform = null;
				setTimeout( function() {
					text_collapse.style.display = 'none';
					text_expand.style.display = 'block';
					setTimeout( function() {
						text_expand.style.opacity = 1;
					}, 20);
				}, 500);
				collapseSection(collapsible);
				setTimeout( function() {
					collapsible.setAttribute('data-collapsed', 'true')
				}, 1100);
		  	}
		});
	});