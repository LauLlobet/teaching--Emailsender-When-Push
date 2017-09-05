console.log("Hello world!");

var postJSON = require("./src/postJSON");
var app = require("express")();
var http = require("http").Server(app);
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
  //response.send("TEST2");

});

app.get('/', function(req, res) {  

  res.send("TEST");
});

 var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
 });