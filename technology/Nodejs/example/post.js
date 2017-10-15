var formidable = require('formidable');
var http = require('http');
var util = require('util');
var path = require('path');
var dateformater = require('dateformater');
var fs = require('fs');

/**
 * node文件上传，
 * 用到了  formidable 模块  地址：https://www.npmjs.com/package/formidable
 */
var server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') {
        return;
    } else if(req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(
            '<form action="/upload" enctype="multipart/form-data" method="post">'+
            '<input type="text" name="title"><br>'+
            '<input type="file" name="upload" multiple="multiple"><br>'+
            '<input type="submit" value="Upload">'+
            '</form>'
        );
    } else if(req.url === '/upload') {
        let form = new formidable.IncomingForm();
        form.uploadDir = "./upload";

        form.parse(req, function(err, fields, files) {
            if(err) {
                throw Error('出错了');
            }
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');

            var extname = path.extname(files.upload.name);
            var oldpath = __dirname + '/' + files.upload.path;
            var newpath = __dirname + '/upload/' + dateformater.format(new Date(), 'YYYYMMDDhhmmss') + extname;           
            fs.rename(oldpath,newpath);

            res.end(util.inspect({fields: fields, files: files}));
        });
    }    
});

server.listen(3000);