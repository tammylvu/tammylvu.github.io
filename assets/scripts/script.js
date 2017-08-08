$(window).scroll(function() {
	var hT = $(".about").offset().top,
	hH = $(".about").outerHeight(),
	wH = $(window).height(),
	wS = $(this).scrollTop();

	if (wS > (hT+hH-wH)){
		$(".about").addClass("scrolled");
	}

	else {
		$(".about").removeClass("scrolled");
	}
});