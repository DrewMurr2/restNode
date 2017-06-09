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
    var arg1 = req.body.arg1
    var arg2 = req.body.arg2
    var arg3 = req.body.arg3
    var arg4 = req.body.arg4
    var url = 'mongodb://localhost:27017/' + db;
    console.log(col)
    mongo.connect(url, function (err, db) {
        db.collection(col).findAndModify(arg1, arg2, arg3, arg4, function (err, results) { res.send(results) })
        res.send('Shit I dont know if that worked or not')
        db.close();
    })
});

module.exports = router;

