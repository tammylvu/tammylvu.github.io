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


let logged = false;

$(window).scroll(function() {
	let windowT = $(window).scrollTop();
	let aboutT = $(".about").position().top;
	let projectsT = $(".projects").position().top;
	let resumeT = $(".resume").position().top;

	if (windowT >= aboutT) {
		$(".about").addClass("active");
	}

	else if (windowT >= projectsT) {
		$(".projects").addClass("active");
	}

	else if (windowT >= resumeT) {
		$(".resume").addClass("active");
	}
	
	else {
		$(".container").removeClass("active");
	}


	if (!logged) {
		console.log("aboutT is " + aboutT);
		console.log("projectsT is " + projectsT);
		console.log("resumeT is " + resumeT);

		logged = true;
	}

	console.log("windowT is " + windowT);

});