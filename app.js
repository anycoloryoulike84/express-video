var express = require('express');
var app = express();

app.use(express.static("public"));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery



app.get('/blocks', function(request, response){
	var blocks = ["mooo","dksdhsgdjshd","sdsd"];
	response.json(blocks);
});

var port = 8080;

	app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});

// curl -i http://localhost:8000/


