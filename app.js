
var express = require('express');
var app = express();
var loadingTime = require("./loading_time");
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended:false});


app.use(loadingTime);
app.use(express.static("public"));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


	var blocks = {
		"Fixed": "fastened securely",
		"Moving": "moving fast",
		"Rotating": "rotating fast"
	};
	var locations = {
		"New": "fastened securely",
		"Newerloc": "moving fast",
		"Newestlocation": "rotating fast"
	};



app.param('name', function(request, response, next){
	
		var name = request.params.name;
		var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
		request.blockName = block;
		next();
});




app.get('/blocks', function(request, response){
		
		if (request.query.limit >= 0) {
			response.json(blocks.slice(0, request.query.limit));
		} else{
			response.json(blocks);
		};


});



app.get('/blocks/:name', function(request, response){

		var description = blocks[request.blockName];

		if (description) {
			response.json(Object.keys(blocks));

		} else{
			response.status(404).json("no description for: " + request.params.name);
		};
});


app.get('/locations/:name', function(request, response){
	

		var location = locations[request.blockName];

		if (locations) {
			response.json(Object.keys(locations));

		} else{
			response.status(404).json("no description for: " + request.params.name);
		};
});


app.post("/blocks", parseUrlencoded, function(request,response){
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;
	response.status(201).json(newBlock.name);
});

app.delete("/blocks/:name", function(request,response) {
 	delete blocks[request.blockName];
 	response.sendStatus(200);
});


var port = 8080;
	app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});

// curl -i http://localhost:8080/blocks?limit=1
// curl -i http://localhost:8080/blocks/fixed


