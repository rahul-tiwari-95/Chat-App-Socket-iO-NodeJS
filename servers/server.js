const path = require('path');
var express = require('express');
const http = require('http');
const socketIO = require('socket.io');

var {generateMessage} =require('./utils/message.js')

const publicPath = path.join(__dirname , '../public');

var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
var io = socketIO(server);

//data added

io.on('connection' , (socket)=>{


  console.log("New User Connected");

  socket.on('disconnect' , ()=>{
  console.log("disconnected from client side");
  });




socket.on('createMessageEvent' , (incomingTextMessage )=>{
  console.log("Message Recieved " , incomingTextMessage);




io.emit('newMessageEvent' , generateMessage(incomingTextMessage.from , incomingTextMessage.text));


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
