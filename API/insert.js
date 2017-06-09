//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongo = require('mongodb');
var app = express();
router.use(bodyParser.json())
router.post('/', function (req, res) {
    var col = req.body.collection
    var db = req.body.database
    var obj = req.body.obj
    var url = 'mongodb://localhost:27017/' + db;
    console.log(col)
    mongo.connect(url, function (err, db) {
        db.collection(col).insertOne(obj, function (err, results) { res.send(results) })
        db.close();
    })
});

module.exports = router;





