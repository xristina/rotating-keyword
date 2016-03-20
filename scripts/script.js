(function($) { 

	var list = $('#rotating-list .rotating-item');
	var l = list.length;
	var i = 1;

	var dotime = function (){
		var currenttext = $('#rotating-list .rotating-item').eq(i).text();
		var currentlength = currenttext.length * 0.55 ;
		var val = currentlength+"em";
		console.log(currenttext, val);
		$('#rotating-list').css("width", val);

		// servers 3.8500000000000005em
		// containers 5.5em
		// keys 2.2em
		// scripts 3.8500000000000005em
		// clouds 3.3000000000000003em
		
		$('#rotating-list .active.rotating-item').removeClass("active");
		$('#rotating-list .next.rotating-item').removeClass("next");
		$('#rotating-list .rotating-item').eq(i).addClass("active");	

		if ( i < l-1 ) { 	
			$('#rotating-list .rotating-item').eq(i+1).addClass("next");
			i++; 
		}
		else { 
			$('#rotating-list .rotating-item').eq(0).addClass("next");
			i = 0; 
		}

	}

	$(document).ready( function(){
		setInterval(dotime, 5500);
	});

})(jQuery);