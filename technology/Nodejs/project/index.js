var http = require('http');
var url = require('url');

http.createServer((req,res) => {
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/favicon.ico') {
        return ;
    }
    console.log(pathname);
    res.end();
}).listen(3000);