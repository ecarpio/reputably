/* Call LESS JS */
less = {
        env: "production", // or "production"
        async: false,       // load imports async
        fileAsync: false,   // load imports async when in a page under
                            // a file protocol
        poll: 1000,         // when in watch mode, time in ms between polls
        functions: {},      // user functions, keyed by name
        dumpLineNumbers: "comments", // or "mediaQuery" or "all"
        relativeUrls: false,// whether to adjust url's to be relative
                            // if false, url's are already relative to the
                            // entry less file
        rootpath: ":/a.com/"// a path to add on to the start of every url
                            //resource
    };


$(document).ready(function(){
	
	
	// Animation Sequence
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "common/images/billboard.png"
        ]
    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");
    
    // Fancy Box
    $(".fancybox").fancybox({
    	afterClose: function(){
    		$('#mutt').val("").prop('checked', true) ;
    		$('.log').html("")
    	}
    });
	
	// Close Fancy Box from Cancel Button 
	$('.cancel').click( function(){
		$.fancybox.close()
		return false;
	})  

	//Dynamic Data Passing
	var logDiv = $(".log");
	
	var arr = $.makeArray($('.fancybox').map( function(){
		return $(this).attr("data");
	}))

	$.each(arr, function() {
      
		$("." + this).on('click', function(event) {
			var msgs = [$(this).attr('name')];
			var data = [$(this).attr('data')];
			logDiv.append( msgs );	
			
			console.log(data)			
			$("#val").attr("value", function(i,origValue){
				return data
			});	 			
		});
   	});
   	
   	
   	//Smooth Scroll Function
   	var linkLoc = $.makeArray($('.top-links a').map( function(){
		return $(this).attr("data");
   	}))
   	
   	console.log(linkLoc);
   	
   	$.each(linkLoc, function() {
	   	$("#" + this + "-button").click(function(){
	   		var loc = [$(this).attr('data')]
			$(window).scrollTo("." + loc, 800 );
			console.log(loc);
			return false;
		});
   	});
});