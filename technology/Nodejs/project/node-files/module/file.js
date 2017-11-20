let fs = require('fs');
let path = require('path');
const STATIC_DIR = '../public/';   // 静态目录

/**
 * 创建目录文件夹
 */
exports.createDir = function(dirName) {
    fs.mkdir(path.resolve(__dirname,STATIC_DIR+dirName),err => {
        if(err) {
            throw new Error('创建目录失败');
        }
    });
};

/**
 * 查询所有的public目录下的文件夹
 */
exports.getAllDir = (dirName='') => {
    return new Promise((resolve,reject) => {
        fs.readdir(path.resolve(__dirname,STATIC_DIR+dirName),(err,files) => {
            if(err) throw new Error('读取文件失败');
            let fileArr = [];
            files.forEach(function(file) {
                let fileObj = {
                    baseUrl: (dirName+'/'),
                    name: file,
                    extname:path.extname(file)
                };
                fileArr.push(fileObj);
            });
            resolve(fileArr);
        });
    });
}