var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render("home")
});

app.get('/portfolio', function(req, res) {
	res.render('full_portfolio');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/index', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 3000

app.listen(port, process.env.IP, function() {
	console.log("Listening on port 3000");
});

