// $(window).scroll(function() {
// 	var hT = $(".about").offset().top,
// 	hH = $(".about").outerHeight(),
// 	wH = $(window).height(),
// 	wS = $(this).scrollTop();

// 	if (wS > (hT+hH-wH)){
// 		$(".about").addClass("scrolled");
// 	}

// 	else {
// 		$(".about").removeClass("scrolled");
// 	}
// });

$(window).scroll(function() {
	if ($(window).scrollTop() >= $(".about").position().top) {
		$(".about").addClass("scrolled");
	}

	else if ($(window).scrollTop() >= $(".projects").position().top) {
		$(".projects").addClass("scrolled");
	}

	else if ($(window).scrollTop() >= $(".resume").position().top) {
		$(".resume").addClass("scrolled");
	}
	else {
		$(".container").removeClass("scrolled");
	}

	console.log($(window).scrollTop());
	console.log($(".projects").position().top);
});