var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();
var port = 3000;

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};
app.use(allowCrossDomain);

app.use(express.static('app'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

//*** routes
const testRoutes = require('./server_files/js/routes/test');

//*** register routes
app.use('/test', testRoutes);

//*** route GET http://localhost:3000)
app.get('/', function(req, res) {
	
});

//*** start the server
app.listen(port, function(req, res) {
    console.log('Server is started. Port: ' + port);
});