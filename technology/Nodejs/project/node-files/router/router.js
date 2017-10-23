var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let file = require('../module/file.js');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for

router.get('/',(req,res) => {
    var promise = file.getAllDir();

    promise.then((fileArr) => {
        res.render('index',{
            fileArr:fileArr
        });
    });
});

router.get('/toAddDir',(req,res) => {
    res.render('add-dir');
});
/**
 *  新增相册名称提交
 */
router.post('/addDir',(req,res) => {
    var dirName = req.body.dirName;
    console.log(dirName);
    file.createDir(dirName);
    res.redirect('/home');
});


module.exports = router;