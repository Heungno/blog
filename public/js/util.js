let lastScrollTop = 0;
let menuShow = true;
$(window).scroll(function(event){
   let st = $(this).scrollTop();
   if (st > lastScrollTop){
        // downscroll code
        $("#headnav").css("opacity",Number($("#headnav").css("opacity"))-0.2);
        $("#footer").css("opacity",Number($("#headnav").css("opacity"))-0.2);
        
        menuShow= false;
   } else {
        // upscroll code
         $("#headnav").css("opacity",Number($("#headnav").css("opacity"))+0.5);
         $("#footer").css("opacity",Number($("#headnav").css("opacity"))+0.5);
         
         menuShow= true;
   }
   lastScrollTop = st;
   
});

$(document).click(function(e){
    
    /*if (!$(e.target).is('#div_id')) {
        // code
    }*/
    
    if(lastScrollTop < 50) {
        menuShow = true
        $("#headnav").css("opacity",1);
        $("#footer").css("opacity",1);
        
    } else {
        menuShow = !menuShow;
        if(menuShow){
            $("#headnav").css("opacity",1);
            $("#footer").css("opacity",1);
        }else {
            $("#headnav").css("opacity",0);
            $("#footer").css("opacity",0);
        }
    }

});
/*
function FileUpload(img, file) {
  var reader = new FileReader();  
  this.ctrl = createThrobber(img);
  var xhr = new XMLHttpRequest();
  this.xhr = xhr;
  
  var self = this;
  this.xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          var percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);
  
  xhr.upload.addEventListener("load", function(e){
          self.ctrl.update(100);
          var canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);
  xhr.open("POST", "/upload");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = function(evt) {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}*/