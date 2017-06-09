//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/testDatabase'; //test is the database
var app = express();
router.use(bodyParser.json())


router.get('/', function (req, res) {
    var item = req.body
    mongo.connect(url, function (err, db) {
        db.collection('testCollection').find({ title: 'req.body.title' }, { content: 1 }).toArray(function (err, results) { res.send(results), res.send(err) })
    })
});

module.exports = router;