 const firebase = require(‘firebase’);
firebase.initializeApp({
 “appName”: “Quiver Two Node Client Demo”,
 “serviceAccount”: “./service-account.json”,
 “authDomain”: “quiver-two.firebaseapp.com”,
 “databaseURL”: “https://quiver-two.firebaseio.com/",
 “storageBucket”: “quiver-two.appspot.com”
});
var ref = firebase.app().database().ref();
ref.once(‘value’)
 .then(function (snap) {
 console.log(‘snap.val()’, snap.val());
 });