## 技术堆栈

### [utility](https://github.com/node-modules/utility) 
用于md5加密等

### [superagent](https://github.com/visionmedia/superagent)
http 方面的库，可以发起 get 或 post 请求

### [cheerio](https://github.com/cheeriojs/cheerio ) 
大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。

### [eventproxy](https://github.com/JacksonTian/eventproxy)
计数器概念，带来事件式编程的思维变化，控制并发
> 特点

1. 利用事件机制解耦复杂业务逻辑
2. 移除被广为诟病的深度callback嵌套问题
3. 将串行等待变成并行等待，提升多异步协作场景下的执行效率
4. 友好的Error handling
5. 无平台依赖，适合前后端，能用于浏览器和Node.js
6. 兼容CMD，AMD以及CommonJS模块环境

### [supervisor](https://github.com/petruisfan/node-supervisor)
许多服务脚本，当修改了文件内容时必须重新启动才能完成数据的更新操作，这会大大降低开发效率。   
Node.js在更新操作时必须终止Node.js然后重新运行。这种模式不利于开发阶段。   
supervisor 可以帮助你实现这个功能,它会监视你对代码的改动,并自动重动 Node.js。  
安装方法
> npm install -g supervisor

启动方法
> supervisor index.js
