var http = require('http');
var port = 8887;
var messages = ["I'm sorry, I can't help you", "hey meng, why you trippin?", "who disturbs my slumber?"];

var mahFunc = function(req, res) {
	if(req.method === 'GET') {
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify({message: randomMessage(messages)}));
	}
	if(req.method === "OPTIONS"){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end();
	}
};

var randomMessage = function(array){
	var num = Math.floor(Math.random()*(array.length));
	return array[num];
};

http.createServer(mahFunc).listen(port);

console.log("listening on port " + port);