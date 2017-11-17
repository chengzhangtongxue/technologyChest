# Mongodb

## Mac 指令基本操作
### 启动数据库
在相应数据库安装目录的lib包下面执行
> ./mongod 

### 链接数据库
在相应数据库安装目录的lib包下面执行
> ./mongo --dbpath '数据库存储所在路径'

即可进入数据库命令行操作

## 存储过程
mongodb支持存储过程，且存储过程存储在db.system.js的数据结构中。我们可以自定义存储过程，然后存放到集合中。

```
// 写存储过程
db.system.js.save({_id:'add(x,y)',value:function(x,y) {return x+y}}); 
// 执行存储过程
db.eval('add(1,2)')
// 输出结果为 3

// 删除存储过程
db.system.js.remove({条件});
db.system.js.remove();	// 全部删除
```

## node操作mongodb数据库
### 链接数据库
```
var url = 'mongodb://localhost:27017/blog';
MongodbClient.connect(url,function(err, db) {
    var collection = db.collection('集合');

    // 关闭数据库
    db.close();
});
```
### CRUD
```
var url = 'mongodb://localhost:27017/blog';
MongodbClient.connect(url,function(err, db) {
    var collection = db.collection('集合');

    collection.find({}).toArray(function(err,result) {
        console.log(result);
    });

    collection.updateOne({a:1},function(err,result) {

    });

    collection.insertMany([{a:1},{a:b}],function(err,result) {

    });

    collection.deleteOne({a:1},function(err,result) {
        
    });
    // 关闭数据库
    db.close();
});
```