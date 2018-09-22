const path = require('path');
var express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');

var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
var io = socketIO(server);



io.on('connection' , (socket)=>{


  console.log("New User Connected");

  socket.on('disconnect' , ()=>{
    console.log("disconnected from client side");
  });

    socket.emit('newMessageEvent' , {

      from: 'Kartik Aggarwal',
      text: 'Hey, Rahul. Can we hang out today?',
      createdAt: '9:70 PM'
    })


socket.on('createMessageEvent' , (incomingTextMessage)=>{
  console.log("Message Recieved " , incomingTextMessage);
});



  // socket.on('createEmail' , (clientServerEmailData)=>{
  //   console.log("Email request received from Client" , clientServerEmailData);
  // });
  //
  // socket.emit('newEmail' , {
  //
  //   from: 'knowrahul.95@gmail.com',
  //   text: 'Hey , This is Socket.io'
  // });

});


app.get('/' , (respond , request)=>{

  respond.semd("Hello Express!")
});

server.listen(port , ()=>{
  console.log("Server Started");
});
