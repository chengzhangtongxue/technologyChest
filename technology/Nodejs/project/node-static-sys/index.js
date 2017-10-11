var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

fs.readFile('./mime.json','utf8',(err,data) => {
    let mineObj = JSON.parse(data.toString());
    http.createServer((req,res) => {
        let pathname = url.parse(req.url).pathname;
        if(pathname === '/favicon.ico') {
            return ;
        }
        pathname === '/' ? pathname = '/index.html':'';
        let extname = path.extname(pathname);

        fs.readFile('./static/'+pathname,(err,data) => {
            if(err) {
                fs.readFile('./404.html',(err,data) => {
                    res.setHeader('Content-Type',mineObj['.html'] || 'text/html');
                    res.end(data);
                });
                return ;
            }
            res.writeHead(200,{
                'Content-Type':mineObj[extname] || 'text/html'
            });
            res.end(data);
        });
    }).listen(3000);
});

