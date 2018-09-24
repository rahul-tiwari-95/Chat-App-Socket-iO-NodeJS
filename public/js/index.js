var socket = io();


socket.on('connect' , function () {
  console.log("Connected to Server");


})


socket.on('disconnect' , function () {
  console.log("disconnected from server");
})

// socket.emit('createMessageEvent'  , (callbackData)=>{
//   console.log(callbackData);
// }) //For telling Socket that we're emitting.

socket.on('newMessageEvent' , function (messageData){
  console.log("New Message Details: " , messageData);

  var li = jQuery('<li></li>');
  li.text(`${messageData.from}: ${messageData.text} `);

  jQuery('#messages').append(li);
})




jQuery('#message-form').on('submit' , function(event){
  event.preventDefault();

  socket.emit('createMessageEvent' , {
    from: 'User 1',
    text: jQuery('[name=message]').val()
  } , (data)=>{
    console.log(data);
  })
})


//Disconnect function implemented by the Socket.IO
