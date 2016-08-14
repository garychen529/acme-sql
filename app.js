var express = require('express');
var bodyParser = require('body-parser');
var catRouter = require('./routers');
var methodOverride = require('method-override');
var db = require('./db')
var path = require('path');
var swig = require('swig');
swig.setDefaults({ cache: false });

var app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));	

app.get('/', function(req, res) {
	db.getCats()
	.then(function(categories) {
		res.render('index', {
			title: 'Welcome to Acme Categories!',
			categories: categories
		});
	});
});

module.exports = app;