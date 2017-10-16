var http = require('http');
var url = require('url');
// const { URL } = require('url');
// const { URLSearchParams } = require('url');

// let mo = require('./module.js');
// console.log(mo);

// console.log(require.resolve('./module.js'));

// console.log(url);
// console.log(URL);
// console.log(URLSearchParams);
// const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
// myURL.searchParams.forEach((value, name, searchParams) => {
    // console.log(name, value, searchParams.get('query'));
// });
// console.log(url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'));

/**
 * http的get请求
 */
// var server = http.createServer(function(req,res) {
//     if(req.url === '/favicon.ico') {
//         return;
//     }
//     console.log(req);
//     console.log('---' + req.url);
//     res.writeHead(200,{
//         'Content-type':'text/html'
//     });
//     res.end(req+'');
// });
// server.listen(3000);

/**
 * http的post请求
 */
http.createServer((req,res) => {
    // console.log(req.addListener);
    var allData = '';
    req.addListener('data',(chunk) => {
        allData += chunk;
    });

    req.addListener('end',() => {
        console.log(allData.toString());
        res.end('success');
    });

    
}).listen(3000);
