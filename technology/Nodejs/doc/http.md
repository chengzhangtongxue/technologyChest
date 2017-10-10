# HTTP
Node.js中，将很多的功能分成各种module，大陆翻译成模块，台湾翻译成模组，引入模块是因为使用的时候可以按需引用，需要就通过require引入。
在http中没有web容器的概念，url路径跟文件路径没有对应关系

```
var http = require('http');
var server = http.createServer(function(req,res) {
    console.log('---' + req.url);
    res.end();
});
server.listen(3000);
```