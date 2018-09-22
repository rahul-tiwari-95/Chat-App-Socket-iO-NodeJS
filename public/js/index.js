var socket = io();


socket.on('connect' , function () {
  console.log("Connected to Server");

  socket.emit('createEmail' , {
    to: "iamrahul_95@outlook.com",
    text: "texting Client to Server Interaction"
  })

socket.emit('createMessageEvent' , {}) //For telling Socket that we're emitting.



})

socket.on('disconnect' , function () {
  console.log("disconnected from server");
})


socket.on('newEmail' , function (emailData){

  console.log("New Email Notification" , emailData);
})

socket.on('newMessageEvent' , function (messageData){


  console.log("New Message Details: " , messageData);
})


//Disconnect function implemented by the Socket.IO
