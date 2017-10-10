var http = require('http');
var url = require('url');
const { URL } = require('url');
const { URLSearchParams } = require('url');

// console.log(url);
// console.log(URL);
// console.log(URLSearchParams);
const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
myURL.searchParams.forEach((value, name, searchParams) => {
    // console.log(name, value, searchParams.get('query'));
});
// console.log(url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'));

var server = http.createServer(function(req,res) {
    if(req.url === '/favicon.ico') {
        return;
    }
    console.log(req);
    console.log('---' + req.url);
    res.writeHead(200,{
        'Content-type':'text/html'
    });
    res.end(req+'');
});
server.listen(3000);