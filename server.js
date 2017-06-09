//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var assert = require('assert');
var router = express.Router();
var path = require('path');
var url = 'mongodb://localhost:27017/testDatabase'; //test is the database
//Express
var app = express();

// parse application/json
//app.use(bodyParser.json())


//Specific files like js files
app.get('/pages/:subfolder/:file', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/' + req.params.subfolder + '/' + req.params.file));
});

//index.html files
app.get('/pages/:subfolder', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/' + req.params.subfolder + '/index.html'));
});

//for resources like bootstrap
app.get('/resources/:subfolder/:subsubfolder/:file', function (req, res) {
    res.sendFile(path.join(__dirname + '/resources/' + req.params.subfolder + '/' + req.params.subsubfolder + '/' + req.params.file));
});


router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/get-data', function (req, res, next) {
    var resultArray = []
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('testCollection').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc)
        }, function () {
            db.close();
            res.render('index', { items: resultArray });
        })
    });
});

router.get('/insert', function (req, res, next) {
    var item = {
        title: 'req.body.title',
        content: 'req.body.content',
        author: 'req.body.author',
    };

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('testCollection').insertOnce(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        })
    })
});



app.get('/', function (req, res) {
    res.send('working');
    // var item = {
    //     title: 'req.body.title',
    //     content: 'req.body.content',
    //     author: 'req.body.author',
    // };

    var item = req.body
    res.send(item);
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('testCollection').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        })
    })

});

app.post('/', function (req, res) {
    res.send('did it work again?')
    var item = req.body

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('testCollection').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        })
    })

});

//Routes
app.use('/API/PostToWell/', require('./API/PostToWell'));
//app.use('/API/PUSH/RawToCloud/', require('./API/PUSH/RawToCloud'));


//Start server
app.listen(3000);
console.log('API is running on port 3000!!!');