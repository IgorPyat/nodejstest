var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();
var port = 3000;

// правила насторйки сервера 
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //header должен воспринримать методы GET, POST, PUT, DELETE
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // тоже настройка
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};

//  переменная должна использовать правила настройки сервера
app.use(allowCrossDomain);

// насторйки сервера
// путь к папке "app" относительно  server.js
app.use(express.static('app'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

//*** routes  - путь к файлам (исполняемым)
//const testRoutes = require('./server_files/js/routes/test');
const proj = require('./server_files/js/routes/test');

//*** register routes
app.use('/api', proj);

//*** route GET http://localhost:3000)
app.get('/', function(req, res) {
	
});

//*** start the server
app.listen(port, function(req, res) {
    console.log('Server is started. Port: ' + port);
});