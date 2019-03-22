const express = require('express');
const router = express.Router();

// const test = require('../funcs/test.func');
// router.get('/user/:id', test.getUser);
// router.get('/:num1/:action/:num2', test.calculator);
// router.get('/vkrs/', test.dbfunc);


const sqlite = require ('../funcs/sqlite.func');
router.get('/vkrs',sqlite.Vkrs);
router.get('/:user',sqlite.User);


module.exports = router;