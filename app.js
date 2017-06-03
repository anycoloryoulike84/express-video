
var express = require('express');
var app = express();
var loadingTime = require("./loading_time");




app.use(loadingTime);
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static("public"));


var blocks = require("./routes/blocks");
// var users = require("./routes/users");
// var locations = require("./routes/locations");

app.use('/blocks', blocks);
// app.use('/users', users);
// app.use('/locations', locations);






var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening on 8080');
});


// curl -i http://localhost:8080/blocks?limit=1
// curl -i http://localhost:8080/blocks/fixed


