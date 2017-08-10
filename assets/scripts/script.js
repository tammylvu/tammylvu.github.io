$(document).ready(function () {
	$(".current-section-container").click(function () {
		$("nav, .overlay").toggleClass("open");
	});
});



let logged = false;

$(window).scroll(function() {
	let windowT = $(window).scrollTop();

	let firstT = $(".first-section").position().top;
	let firstH = firstT + $(".first-section").outerHeight();

	let aboutT = $(".about").position().top;
	let aboutH = aboutT + $(".about").outerHeight();

	let projectsT = $(".projects").position().top;
	let projectsH = projectsT + $(".projects").outerHeight();

	let resumeT = $(".resume").position().top;
	let resumeH = resumeT + $(".resume").outerHeight();

	if (windowT >= firstT) {
		$("nav").addClass("scrolled");
	}

	if (windowT >= aboutT && windowT < aboutH) {
		$(".container").removeClass("active");
		$(".container.about").addClass("active");
	}

	else if (windowT >= projectsT && windowT < projectsH) {
		$(".container").removeClass("active");
		$(".container.projects").addClass("active");
	}

	else if (windowT >= resumeT && resumeH) {
		$(".container").removeClass("active");
		$(".container.resume").addClass("active");
	}

	else {
		$("nav").removeClass("scrolled");
		$(".container").removeClass("active");
	}

	if (!logged) {
		console.log("aboutT is " + aboutT);
		console.log("projectsT is " + projectsT);
		console.log("resumeT is " + resumeT);

		console.log("aboutH is " + aboutH);
		console.log("projectsH is " + projectsH);
		console.log("resumeH is " + resumeH);

		logged = true;
	}

	console.log("windowT is " + windowT);

});
