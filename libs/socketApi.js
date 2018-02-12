/*
 * 간단 채팅 
 */

var socket_io = require('socket.io');

var io = socket_io();
var socketApi = {};

socketApi.io = io;

/*
var users = [];
io.on('connection', function (socket) {
  console.log('chat setart');
  socket.on('[USER ADD]', function(data){
    
    users.push(data);
    console.log(data);
    console.log(users.length);
    io.emit('[EVENT]', "새로운 사람 입장");
    io.emit("[USER ADD]", users);
    
  });
  
  socket.on('[SEND MESSAGE]', function(data){
    io.emit('[SEND MESSAGE]', data);
  });
  
  socket.on("[NAME CHANGE]", function(data){
    var message = `${data.oldName}"님이 "${data.name}"로 이름을 변경하셨습니다.`
    socket.broadcast.emit('[EVENT]', message);
  });

});

*/


var clients = {};
io.sockets.on('connection', function (socket){
  //입장 및 닉네임체크
  socket.on('create_nickname',function(nickname,returnFunction){
    //닉네임중복체크
    var returnCode = 1;
    for ( var i in clients ){
      if ( clients[i] == nickname ){
        returnCode = -1;
        break;
      }
    }
    //닉네임체크확인 결과 전달
    returnFunction(returnCode);
    //닉네임체크 유효화됨
    if ( returnCode == 1 ) {
      //클라이언트 닉네임등록
      clients[socket.id] = nickname;
      //새접속자로인한 전체 유저리스트 전달함
      io.sockets.emit('user_list',clients);
      //전체유저 메세지전송
      io.sockets.emit('msgPush',{"nickname":"시스템","msg":clients[socket.id]+" 유저가 입장하셨습니다."});
      console.log('CONNECT : ',nickname+' ['+socket.id+'] '+'('+Object.keys(clients).length+'명)');
    }
  });

  socket.on('msgSend',function(data){
    //자신을 제외한 전체유저에게 메세지전송
    socket.broadcast.emit('msgPush',data);
    /*
     *socket.emit('msgPush',data);//자신에게만 보낼때
     *socket.broadcast.emit('msgPush',data);//자신제외 전체유저
     *io.sockets.emit('msgPush',data);//자신포함 전체유저에게
     *io.sockets.in(socket_id).emit('msgPush',data);//특정유저에게 귓속말시 socket_id추가입력하면됨
     *io.of('namespace').emit('msgPush', data); //of 지정된 name space의 유저
     */
    console.log('Chat Msg : ','['+data['nickname']+'] '+data['msg']);
  });

  //접속종료시처리
  socket.on('disconnect', function(){
    if ( clients[socket.id] ){
      //유저이탈 메세지전달
      io.sockets.emit('msgPush',{"nickname":"시스템","msg":clients[socket.id]+" 유저가 나가셨습니다."});
      console.log('DISCONNECT : ', clients[socket.id]);
      //이탈유저닉네임삭제
      delete clients[socket.id];
      //유저이탈 전체유저리스트 갱신
      io.sockets.emit('user_list',clients);
    }else{
      console.log('NOT USER DISCONNECT : ', socket.id);
    }
  });
});


module.exports = socketApi;