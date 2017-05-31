var express = require('express');
var app = express();
var loadingTime = require("./loading_time");

app.use(loadingTime);

app.use(express.static("public"));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

	
	var blocks = {
		"Fixed": "fastened securely",
		"Moving": "moving fast",
		"Rotating": "rotating fast"
	};

app.get('/blocks/:name', function(request, response){
	
		var name = request.params.name;
		var block = name[0].toUpperCase() + name.slice(1).toLowerCase();	
		var description = blocks[block];

		if (description) {
			response.json(description);

		} else{
			response.status(404).json("no description for: " + request.params.name);
		};
		
});

var port = 8080;
	app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});

// curl -i http://localhost:8080/blocks?limit=1


