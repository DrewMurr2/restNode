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


//Routes
app.use('/API/PostToWell/', require('./API/PostToWell'));
app.use('/API/getNamesOfWits/', require('./API/getNamesOfWits'));
app.use('/API/find/', require('./API/find'));
app.use('/API/findAndModify/', require('./API/findAndModify'));
app.use('/API/insert/', require('./API/insert'));
app.use('/API/update/', require('./API/update'));
app.use('/API/save/', require('./API/save'));



//Start server
app.listen(3000);
console.log('API is running on port 3000!!!');