$(document).ready(function () {
	$(".current-section-container").click(function () {
		$("nav, .overlay").toggleClass("open");
	});

	$(".overlay").click(function () {
		$("nav, .overlay").removeClass("open");
	});
});



let logged = false;

$(window).scroll(function() {
	let windowT = $(window).scrollTop();

	let firstT = $(".container.first-section").position().top;
	let firstH = firstT + $(".container.first-section").outerHeight();

	let aboutT = $(".container.about").position().top;
	let aboutH = aboutT + $(".container.about").outerHeight();

	let projectsT = $(".container.projects").position().top;
	let projectsH = projectsT + $(".container.projects").outerHeight();

	let resumeT = $(".container.resume").position().top;
	let resumeH = resumeT + $(".container.resume").outerHeight();

	let contactT = $(".container.contact").position().top;
	let contactH = resumeT + $(".container.contact").outerHeight();

	if (windowT >= firstT) {
		$("nav").addClass("scrolled");
	}

	else if (windowT >= firstT && windowT < firstH) {
		$("nav").removeClass();
		$(".container").removeClass("active");

		$(".container.first-section").addClass("active");
		$("nav.welcome").addClass("welcome");
	}

	else if (windowT >= aboutT && windowT < aboutH) {
		$("nav").removeClass();
		$(".container").removeClass("active");

		$(".container.about").addClass("active");
		$("nav.about").addClass("about");
	}

	else if (windowT >= projectsT && windowT < projectsH) {
		$("nav").removeClass();
		$(".container").removeClass("active");

		$(".container.projects").addClass("active");
		$("nav.projects").addClass("projects");
	}

	else if (windowT >= resumeT && windowT < resumeH) {
		$("nav").removeClass();
		$(".container").removeClass("active");

		$(".container.resume").addClass("active");
		$("nav.resume").addClass("resume");
	}

	else if (windowT >= contactT && windowT < contactH) {
		$("nav").removeClass();
		$(".container").removeClass("active");

		$(".container.contact").addClass("active");
		$("nav.contact").addClass("contact");
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
