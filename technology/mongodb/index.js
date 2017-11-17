var MongodbClient = require('mongodb').MongoClient,
    assert = require('assert'); // 断言
    
/**
 * 链接 mongodb 数据库
 * localhost:27017  ->  本地地址，27017 是端口
 * blog ->  数据库名称
 */
var url = 'mongodb://localhost:27017/blog';
MongodbClient.connect(url,function(err, db) {
    /**
     * 断言
     * 解释：如果err为null，那么断言以后的代码都不执行了
     */
    assert.equal(null,err);
    console.log('connected');
    updateDocuments(db,function(result) {
        console.log(result);
        db.close();
    });
});

/**
 * 插入到数据库
 * @param {*} db 
 * @param {*} callback 
 */
var insertDocuments = function(db,callback) {
    var collection = db.collection('documents');
    collection.insertMany([
        {a:1},{a:2},{a:3}
    ],function(err,result) {
        assert.equal(null,err);
        callback(result);
    });
}

/**
 * 查询数据库
 * @param {*} db 
 * @param {*} callback 
 */
var findDocuments = function(db,callback) {
    var collection = db.collection('documents');
    collection.find({a:2}).toArray(function(err,result) {
        assert.equal(null,err);
        callback(result);
    });
}

/**
 * 更新数据库的集合
 * @param {*} db 
 * @param {*} callback 
 */
var updateDocuments = function(db,callback) {
    var collection = db.collection('documents');
    collection.updateOne({a:2},{$set:{b:1}},function(err,result) {
        assert.equal(err,null);
        callback(result);
    })
}

/**
 * 删除数据库的集合
 * @param {*} db 
 * @param {*} callback 
 */
var removeDocuments = function(db,callback) {
    var collection = db.collection('documents');
    collection.deleteOne({a:2},function(err,result) {
        assert.equal(null, err);
        callback(result);
    });
}