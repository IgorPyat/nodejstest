const express = require('express');
const router = express.Router();

const test = require('../funcs/test.func');

router.get('/helloworld', test.writeHelloWorld);
router.get('/name/:name', test.writeName);

module.exports = router;