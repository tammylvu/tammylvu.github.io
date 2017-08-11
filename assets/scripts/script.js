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
	let windowT = $(window).scrollTop();

	let firstT = $("#welcome").position().top;
	let firstH = firstT + $("#welcome").outerHeight();

	let aboutT = $("#about").position().top;
	let aboutH = aboutT + $("#about").outerHeight();

	let projectsT = $("#projects").position().top;
	let projectsH = projectsT + $("#projects").outerHeight();

	let resumeT = $("#resume").position().top;
	let resumeH = resumeT + $("#resume").outerHeight();

	let contactT = $("#contact").position().top;
	let contactH = resumeT + $("#contact").outerHeight();


	function reset () {
		$("nav").removeClass();
		$(".container").removeClass("active");
	}

	// if (windowT >= firstT) {
	// 	reset();

	// 	$("nav").addClass("scrolled");
	// }

	if (windowT >= firstT && windowT < firstH) {
		reset();

		$("#first-section").addClass("active");
		$("nav").addClass("welcome");

		console.log("welcome");
	}

	else if (windowT >= aboutT && windowT < aboutH) {
		reset();

		$("#about").addClass("active");
		$("nav").addClass("about");

		console.log("about");
	}

	else if (windowT >= projectsT && windowT < projectsH) {
		reset();

		$("#projects").addClass("active");
		$("nav").addClass("projects");

		console.log("projects");
	}

	else if (windowT >= resumeT && windowT < resumeH) {
		reset();

		$("#resume").addClass("active");
		$("nav").addClass("resume");

		console.log("resume");
	}

	else if (windowT >= contactT && windowT < contactH) {
		reset();

		$("#contact").addClass("active");
		$("nav").addClass("contact");

		console.log("contact");
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
