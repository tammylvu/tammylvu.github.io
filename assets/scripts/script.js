let windowT;

let firstT;
let firstH;

let aboutT;
let aboutH;

let projectsT;
let projectsH;

let resumeT;
let resumeH;

let firstFired = false;
let aboutFired = false;
let projectsFired = false;
let resumeFired = false;


$(document).ready(function () {
	$("nav .logo-container, nav .current-section-container").click(function () {
		$("nav, .overlay").addClass("open");
	});

	$(".overlay").click(function () {
		$("nav, .overlay").removeClass("open");
	});

	$(".scroll-arrow").click(function() {
		$("html, body").animate({
			scrollTop: $("#about").position().top
		}, 500);

		console.log("clicked");
	});

	$(".dropdown-item").click(function() {
		$(".dropdown-item").removeClass("current");
		$(this).addClass("current");

		if ($(this).hasClass("welcome")) {
			$("html, body").animate({
				scrollTop: firstT
			}, 500);
		}

		else if ($(this).hasClass("about")) {
			$("html, body").animate({
				scrollTop: aboutT
			}, 500);
		}

		else if ($(this).hasClass("projects")) {
			$("html, body").animate({
				scrollTop: projectsT
			}, 500);
		}

		else if ($(this).hasClass("resume")) {
			$("html, body").animate({
				scrollTop: resumeT
			}, 500);
		}
	});
});



$(window).scroll(function() {
	const buffer = 0;

	windowT = $(window).scrollTop();

	firstT = $("#welcome").position().top;
	firstH = firstT + $("#welcome").outerHeight() - buffer;

	aboutT = $("#about").position().top;
	aboutH = aboutT + $("#about").outerHeight() - buffer;

	projectsT = $("#projects").position().top;
	projectsH = projectsT + $("#projects").outerHeight() - buffer;

	resumeT = $("#resume").position().top;
	resumeH = resumeT + $("#resume").outerHeight() - buffer;

	function reset () {
		$("body, nav").removeClass();
		$(".container").removeClass("active");
	}

	if (windowT >= firstT && windowT < firstH) {
		reset();

		$("#first-section").addClass("active");
		$("body, nav").addClass("welcome");
	}

	else if (windowT >= aboutT && windowT < aboutH) {
		reset();

		$("#about").addClass("active, animated");
		$("body, nav").addClass("about");
	}

	else if (windowT >= projectsT && windowT < projectsH) {
		reset();

		$("#projects").addClass("active, animated");
		$("body, nav").addClass("projects");
	}

	else if (windowT >= resumeT && windowT < resumeH) {
		reset();

		$("#resume").addClass("active, animated");
		$("body, nav").addClass("resume");
	}

	else {
		reset();
	}
});


// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var nav = $("nav");
// var navHeight = nav.outerHeight();
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     var st = $(this).scrollTop();
//
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navHeight){
//         // Scroll Down
//         nav.removeClass("nav-down").addClass("nav-up");
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             nav.removeClass("nav-up").addClass("nav-down");
//         }
//     }
//
//     lastScrollTop = st;
// }
