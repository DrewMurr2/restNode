//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/testDatabase'; //test is the database
var app = express();
router.use(bodyParser.json())


router.post('/', function (req, res) {
    res.send('did it work again?')
    var item = req.body
    mongo.connect(url, function (err, db) {
        db.collection('testCollection').insertOne(item, function (err, result) {
            console.log('Item inserted');
            db.close();
        })
    })

});

module.exports = router;