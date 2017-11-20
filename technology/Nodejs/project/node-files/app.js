const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = '' || 3000;
const router = require('./router/router.js');
const dirRouter = require('./router/dir-router.js');

// 设置静态资源路径
app.use('/public',express.static('./public'));
// 设置 模板引擎为ejs
app.set('view engine','ejs');

app.use('/home',router);
app.use('/dir',dirRouter);

app.use((err,req,res,next) => {
    res.render('404');
    next();
});


app.listen(PORT,() => {
    console.log('listening port : ' + PORT);
});