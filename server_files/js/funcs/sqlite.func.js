var sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('server_files/db/Students.db', function(err){
    if(err){
        return console.error('Ошибка', err.message);
    }
    console.log('База подключена');
})

function dbGetUsers(err, rows, res) {
    if (err) {
        console.log('Ошибка запроса', err.message);
        res.send({
            status: 'success',
            message: 'Ошибка',
        });
        return;
    }
    res.send({
        status: 'success',
        message: 'Данные',
        data: rows
    });
}


function Vkrs(req, res, next) {

    const sql ='select Users.Name as ФИО, Vkrs.Name as ВКР from Users join Vkrs on Users.VkrId = Vkrs.Id ';
    db.all(sql, function(err, rows) {
        dbGetUsers(err, rows, res);
    });
}
    
function User(req, res, next) {

    var Name = req.params.user;

    const sql ='Select Vkrs.Name from Vkrs join Users on Users.Vkrid = Vkrs.Id where Users.name = "' + Name+'"';
    db.all(sql, function(err, rows) {
        dbGetUsers(err, rows, res);
    });
}






module.exports = {
    Vkrs,
    User
}

