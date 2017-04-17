var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render("home")
});

var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
	console.log("Listening on port 3000");
});

