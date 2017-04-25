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

app.get('/about_site', function(req, res) {
	res.render('about_site');
});

app.get('/projects/reviewshare', function(req, res) {
	res.render('projects/reviewshare');
});

app.get('/projects/finance_go', function(req, res) {
	res.render('projects/finance_go');
});

app.get('/projects/wikipedia_viewer', function(req, res) {
	res.render('projects/wikipedia_viewer');
});

app.get('/projects/quote-it-up', function(req, res) {
	res.render('projects/quote_it_up');
});

app.get('/projects/weather-forecast', function(req, res) {
	res.render('projects/weather_forecast');
});

app.get('/projects/color-game', function(req, res) {
	res.render('projects/color_game');
});

var port = process.env.PORT || 3000

app.listen(port, process.env.IP, function() {
	console.log("Listening on port 3000");
});

