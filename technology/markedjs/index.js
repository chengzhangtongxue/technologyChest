// var marked = require('marked');

// marked.setOptions({
//     renderer: new marked.Renderer(),
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: true,
//     smartypants: false
//   });

//   console.log(marked('I am using __markdown__.'));
//   console.log(marked('# Marked in browser\n\nRendered by **marked**.'));

var http = require('http');
var express = require('express');
var app = express();

// var server = http.createServer(function(req,res) {
// });

// server.listen(3000);
app.use(express.static());
app.listen(3000);