//Dependencies
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.send('API Two is working');
});

module.exports = router;
