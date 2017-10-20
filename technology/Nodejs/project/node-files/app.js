const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = '' || 3000;
const router = require('./router/router.js');

// 设置静态资源路径
app.use(express.static('./public'));
// 设置 模板引擎为ejs
app.set('view engine','ejs');

// app.use('/home',router);

app.listen(PORT,() => {
    console.log('listening port : ' + PORT);
});