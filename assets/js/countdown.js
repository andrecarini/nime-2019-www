function httpGetAsync(theUrl, callback) {
	
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.getResponseHeader("Date"));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function setUpCountdown() {
	
	sticky = document.getElementById("countdownSticky");
	flow   = document.getElementById("countdownFlow");
	
	httpGetAsync("https://andrecarini.github.io/nime-2019-www/assets/time", function(response) {
		
		var time = new Date(response);
		
		// 1548064740 converts to Sunday January 20, 2019 23:59:00 (pm) in time zone Pacific/Honolulu (HST)
  		//The offset (difference to Greenwich Time/GMT) is -10:00 or in seconds -36000.
		var deadline = 	1548064740000;
	
		var currentSecs = time.getTime();
	
		if  (currentSecs >= deadline) {
			currentSecs = deadline;	
		}
	
		var diff_seconds = (deadline - time.getTime()) / 1000;
	
		var diff_minutes = diff_seconds / 60;
	
		var diff_hours   = diff_minutes / 60;
	
		var diff_days    = diff_hours   / 24;
	
	
		var seconds_remaining 	= Math.floor(diff_seconds%60);
		
		var minutes_remaining 	= Math.floor(diff_minutes%60);
	
		var hours_remaining 	= Math.floor(diff_hours%24);
	
		var days_remaining 		= Math.floor(diff_days);
	
		diff_seconds = Math.floor(diff_seconds);
	
		var countdownInterval = window.setInterval(function(){ 
			
			if (seconds_remaining < 0 && diff_seconds > 0) {
				
				seconds_remaining = 59;
				minutes_remaining--;
				
				if (minutes_remaining < 0) {
					
					minutes_remaining = 59;
					hours_remaining--;
					
					if (hours_remaining < 0) {
					
						hours_remaining = 23;
						days_remaining = 0;
						
					}
					
				}
				
			} else if (diff_seconds <= 0) {
				
				clearInterval(countdownInterval);
				
			}
			
			flow.innerHTML = days_remaining + "d " + hours_remaining + "h " + minutes_remaining + "m " + seconds_remaining + "s left"
			sticky.innerHTML = + days_remaining + "d " + hours_remaining + "h " + minutes_remaining + "m " + seconds_remaining + "s left"
			
			seconds_remaining--;
			diff_seconds--;
			
		}, 1000);
	
	});
}

setUpCountdown();
