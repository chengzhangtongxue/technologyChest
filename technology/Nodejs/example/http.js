var http = require('http');
const { URL } = require('url');

console.log(URL);
const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(myURL);

var server = http.createServer(function(req,res) {
    console.log('---' + req.url);
    res.writeHead(200,{
        'Content-type':'text/html'
    });
    res.end(req+'');
});
server.listen(3000);