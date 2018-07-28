var express = require('express');
var path    = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(cookieParser());
router.use(bodyParser.json());

var numberRequest =0;
router.get('/tralala', function(req, res, next) {
    /*var func = function(){
        numberRequest++;
        res.send('hello, resp: ' + numberRequest)
    }*/
    setTimeout(function(){
        numberRequest++;
        res.send('hello, resp: ' + numberRequest)
    }, 2000); //alert('Привет')
});

router.get('/', function(req, res, next) {
    //res.sendFile('index.html'); //path.join(__dirname+'/index.html')
    //res.sendFile(path.join(__dirname+'/index.html'));
    res.sendFile(path.join(__dirname, 'resource/index.html'));
});

router.post('/getInfo', function(req, res, next) {
  req.body.val;
  console.log('marc ' + req.body.val);

    setTimeout(function(){
        numberRequest++;
        res.send(req.body.val.toString());
    }, 2000); //alert('Привет')
    //res.send(req.body.val);
});

module.exports = router;
