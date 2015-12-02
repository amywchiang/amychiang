$(document).ready(function() {

//scrolltop 
	$("#scrolltop").hover(function(){
	$("#scrolltop").css("color", "#4eb4d4");
	}, function(){
	$("#scrolltop").css("color", "black");
	})

	$("#scrolltop").click(function(){
		$("html, body").animate({scrollTop: 0},"slow");
	});


//button
	$("#button").hover(function(){
	$("#button").css("color", "#4eb4d4");
	}, function(){
	$("#button").css("color", "black");
	})

	var clicked;
	$("#button").click(function(){
		if (clicked) {
			clicked = false;
			$("#container3").show(); 
		} else {
			$("#container3").hide();
			clicked = true;
		}
	})


});