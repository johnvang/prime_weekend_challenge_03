var express = require('express');
var classData = require(__dirname + '/public/assets/data/classData.json');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('hit');
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/classdata', function(req, res){
    console.log('hit classdata route');
    res.send(classData);
})

var server = app.listen(3001, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;

