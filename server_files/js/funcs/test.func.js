function writeHelloWorld(req, res, next) {
    console.log("Hello, World!");
    res.send({
        status: 'success',
        message: 'Write "Hello, World!"'
    });
}

function writeName(req, res, next) {
    var name = req.params.name;
    console.log("Your name is " + name);
    res.status(200);
    res.send({
        status: 'success',
        message: 'Write name'
    });
}


module.exports = {
    writeHelloWorld,
    writeName
};