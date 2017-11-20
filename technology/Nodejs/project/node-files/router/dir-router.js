let express = require('express');
let router = express.Router();
let file = require('../module/file.js');

/**
 * 读取目录内容
 */
router.get('/*',(req,res) => {
    let promise = file.getAllDir(req.url);
    promise.then((fileArr) => {
        res.render('index',{
            fileArr:fileArr
        });
    });
});

module.exports = router;