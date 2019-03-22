var sqlite3 = require('sqlite3').verbose()

// Путь к базе данных относительный от файла "server.js"
var db = new sqlite3.Database('server_files/db/Students.db', function(err){
    if(err){
        return console.error('Ошибка', err.message);
    }
    console.log('База подключена');
}) // место, где будет сохраняться изменения

var query1 = 'SELECT * FROM users WHERE age > 40'
var query2 = 'SELECT COUNT() FROM users Where Age > 40 '




// req - это запрос  
function writeHelloWorld(req, res, next) {
    console.log("Hello, World!");
    res.send({
        status: 'success',
        message: 'Write "Hello, World!"'
    });
}

/* Лабораторная №1 (Доиашнее задание)
** разработка url-калькулятора с вводом данных в url типа /число1/матДействие/число2
** передача ввода производится через "req.params"
** мат действие (здесь) тоже является параметром ("action")
*/ 
function calculator(req, res, next) {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var action = req.params.action;
    var resAction;

    switch (action){
        case 'plus':{
            console.log("сложение");
            resAction = parseInt(num1)+parseInt(num2); break;
        }
        case 'minus':{
            console.log("вычетание");
            resAction = parseInt(num1)-parseInt(num2); break;
        }
        case 'mult':{
            console.log("умножение");
            resAction = parseInt(num1)*parseInt(num2); break;
        }
        case 'devi':{
            console.log("деление");
            resAction = parseInt(num1)/parseInt(num2); break;
        }

    }
    console.log("Результат функции " + resAction);
    res.send({
        message: "Результат функции " + (resAction)
    });
}   


/*
    res.status(200);
    res.send({
        status: 'success',
        //message: 'Uour name ' + name +' ' +surname,
        message: "Результат функции " + (resAction) 
    });
*/

/* Лаборатореая работа
** Работа с БД SQLite
**
*/
function getUser(req, res, next) {

    var id = req.params.id;
    var sql ='SELECT * FROM Users WHERE id = ' + id;
    db.all(sql, (err, rows) => setRes(err,rows,res,id));
}
    //db.close() 
function setRes(err,rows,res,id){
    res.send({
        status: 'success',
        message: 'Data of user wiht id = '+id,
        data: rows
    });
}

/*
function setRes(err,rows,res)  
    var name = req.params.name;
    //console.log("Нет этой страницы " );
    //res.status(404);
    res.send({
        status: 'success',
        message: 'Ошибка'
    });
}
*/
function dbfunc(){
    db.each(query2,dbquery);
}
  
function dbquery(err,row){
    if(err){
        console.error('Ошибка', err.message);
    }
    console.log(row);
}

/*
function write404(req, res, next) {
    var name = req.params.name;
    console.log("Нет этой страницы " );
    res.status(404);
    res.send({
        status: 'fale',
        message: 'Ошибка'
    });
}
*/
module.exports = {
    calculator,
    getUser
};