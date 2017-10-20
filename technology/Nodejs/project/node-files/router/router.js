var express = require('express');
var router = express.Router();


router.get('/',(req,res) => {
    res.render('index');
});

router.get('/toAddDir',(req,res) => {
    
});
/**
 *  新增相册名称提交
 */
router.post('/addDir',(req,res) => {
    var data = bodyParser.body;
    console.log(data);
    res.redirect('/');
});

router.use((err,req,res,next) => {
    res.render('404');
});

module.export = router;