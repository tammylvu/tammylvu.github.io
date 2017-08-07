$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
       
   if (wS > (hT+hH-wH)){
       console.log('H1 on the view!');
   }
});