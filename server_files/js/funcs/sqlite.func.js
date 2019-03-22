var sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('server_files/db/Students.db', function(err){
    if(err){
        return console.error('Ошибка', err.message);
    }
    console.log('База подключена');
})


function Vkrs(res) {

    var sql ='select Users.Name as ФИО, Vkrs.Name as ВКР from Users join Vkrs on Users.VkrId = Vkrs.Id ';
    db.all(sql, (err, rows) => setRes(err,rows,res,Name));
    db.close() 
}
    
function User(req, res, next) {

    var Name = req.params.name;
    var sql ='Select Vkrs.Name from Vkrs join Users on Users.Vkrid = Vkrs.Id where Users.name = ' + Name;
    db.all(sql, (err, rows) => setRes(err,rows,res,Name));
    db.close() 
}
    

function setRes(rows,res){
    res.send({
        status: 'success',
        data: rows
    });
}





module.exports = {
    Vkrs,
    User
}

