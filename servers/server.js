const path = require('path');
var express = require('express');

const publicPath = path.join(__dirname , '../public');

var app = express();

app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

app.get('/' , (respond , request)=>{

  respond.semd("Hello Express!")
});

app.listen(port , ()=>{
  console.log("Server Started");
})
