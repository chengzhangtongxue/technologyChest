var express = require('express');
var utility = require('utility');   // md5编码的模块

var app = express();

app.get('/',(req,res) => {
    var q = req.query.q;
    var md5Value = utility.md5(q);
    res.send(md5Value);
});

app.listen(3000,(req,res) => {
    console.log('app is running at port 3000');
});