var express = require('express');
var app = express();
var loadingTime = require("./loading_time");

app.use(loadingTime);

app.use(express.static("public"));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery


app.get('/blocks', function(request, response){
	var blocks = ["First Request", "Second Request", "Third Request"];
		
		if (request.query.limit >= 0) {
			response.json(blocks.slice(0, request.query.limit));
		} else{
			response.json(blocks);
		};

	var nmb = [21,1,31,87,3,22];
	Math.max(...nmb);

});

var port = 8080;

	app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});

// curl -i http://localhost:8080/blocks?limit=1


