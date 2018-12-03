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

socket.on('newLocationEvent' , function(locationMessage){
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">Your Current Location</a> ')
  li.text(`${locationMessage.from}:`);
  a.attr('href' , locationMessage.url);
  li.append(a);
  jQuery('#messages').append(li);

})



jQuery('#message-form').on('submit' , function(event){
  event.preventDefault();

  socket.emit('createMessageEvent' , {
    from: 'Miranda Customer',
    text: jQuery('[name=message]').val()
  } , (data)=>{
    console.log(data);
  })
})

var locationButton = jQuery('#send-location');
locationButton.on('click' , function(){
  if(!navigator.geolocation){
    return alert("Error");
  }
  else{

      navigator.geolocation.getCurrentPosition(function(position){
        //Creating new Socket Listener event
          socket.emit('createLocationMessage' , {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
      }, function(error){

          alert("Unable to fetch location");
      })
  }
})
//Disconnect function implemented by the Socket.IO
