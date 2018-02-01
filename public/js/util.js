let lastScrollTop = 0;
$(window).scroll(function(event){
   let st = $(this).scrollTop();
   if (st > lastScrollTop){
        // downscroll code
        $("#headnav").css("opacity",Number($("#headnav").css("opacity"))-0.2);
        $("#footer").css("opacity",Number($("#headnav").css("opacity"))-0.2);
   } else {
        // upscroll code
         $("#headnav").css("opacity",Number($("#headnav").css("opacity"))+0.2);
         $("#footer").css("opacity",Number($("#headnav").css("opacity"))+0.2);
   }
   lastScrollTop = st;
});
