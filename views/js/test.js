// 위지윅에디터
$("#content").tuiEditor({
   //initialEditType: "wysiwyg",
   initialEditType: "markdown",
   previewStyle: "vertical",
   height: "300px",
   language: "ko_KR",
   /*hooks: {
        'addImageBlobHook': function(blob, callback) {
           //이미지 블롭을 이용해 서버 연동 후 콜백실행
           //callback('이미지URL');
           alert(blob);
        }
   }*/
});
// 저장
$("#btnSave").click(function(){
   $.ajax({
       method: "POST",
       url: "/posts",
       data: {
         "title": $("#title").val(),
         "writer": $("#writer").val(),
          "content": $("#content").tuiEditor("getValue")
         } 
      })
     .done( (data) => {
         $("#massageBox").attr({class: "alert alert-success"}).html(`저장성공: ${ data.title }`);
      })
     .fail( (err) => {
         $("#massageBox").attr({class: "alert alert-danger"}).html(`error: ${ err.responseText }`); 
     })
     .always( (data) => {
       //alert(JSON.stringify(data));
       //location.href = "/posts";
     });
});
// 목록으로 가기
$("#btnList").click( () => location.href = "/posts");