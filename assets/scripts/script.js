$(document).ready(function () {
	$(".current-section-container").click(function () {
		$("nav, .overlay").toggleClass("open");
	});

	$(".overlay").click(function () {
		$("nav, .overlay").removeClass("open");
	});
});



// let logged = false;

$(window).scroll(function() {
	const buffer = 0;

	let windowT = $(window).scrollTop();

	let firstT = $("#welcome").position().top;
	let firstH = firstT + $("#welcome").outerHeight() - buffer;

	let aboutT = $("#about").position().top;
	let aboutH = aboutT + $("#about").outerHeight() - buffer;

	let projectsT = $("#projects").position().top;
	let projectsH = projectsT + $("#projects").outerHeight() - buffer;

	let resumeT = $("#resume").position().top;
	let resumeH = resumeT + $("#resume").outerHeight() - buffer;

	let contactT = $("#contact").position().top;
	let contactH = resumeT + $("#contact").outerHeight() - buffer;


	function reset () {
		$("body, nav").removeClass();
		$(".container").removeClass("active");
	}

	// if (windowT >= firstT) {
	// 	reset();

	// 	$("nav").addClass("scrolled");
	// }

	if (windowT >= firstT && windowT < firstH) {
		reset();

		$("#first-section").addClass("active");
		$("body, nav").addClass("welcome");

		// console.log("welcome");
	}

	else if (windowT >= aboutT && windowT < aboutH) {
		reset();

		$("#about").addClass("active");
		$("body, nav").addClass("about");

		// console.log("about");
	}

	else if (windowT >= projectsT && windowT < projectsH) {
		reset();

		$("#projects").addClass("active");
		$("body, nav").addClass("projects");

		// console.log("projects");
	}

	else if (windowT >= resumeT && windowT < resumeH) {
		reset();

		$("#resume").addClass("active");
		$("body, nav").addClass("resume");

		// console.log("resume");
	}

	else if (windowT >= contactT && windowT < contactH) {
		reset();

		$("#contact").addClass("active");
		$("body, nav").addClass("contact");

		// console.log("contact");
	}

	else {
		reset();
	}

	// if (!logged) {
	// 	console.log("aboutT is " + aboutT);
	// 	console.log("projectsT is " + projectsT);
	// 	console.log("resumeT is " + resumeT);

	// 	console.log("aboutH is " + aboutH);
	// 	console.log("projectsH is " + projectsH);
	// 	console.log("resumeH is " + resumeH);

	// 	logged = true;
	// }

	// console.log("windowT is " + windowT);

});
