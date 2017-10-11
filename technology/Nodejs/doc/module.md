# module模块
## 引入模块
通过**require**方法引入一个模块，例如：  
> require('fs');	//引入了一个fs模块  
> require('./test);	// 如果不是一个内置模块，或者不是node_module中的模块，需要加上相对路径

## 导出模块
通过**exports**导出一个模块
### 导出不是类
```
var str = '123';
exports.str = str;		// 需要通过.str来获取str变量
```
### 导出是一个类
```
class Age {
    constructor(age) {
        this.age = age;
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
module.exports = Age;		// Age变成一个顶层模块，直接require后就可以使用不需要.操作，也可以如上面那样直接导出	
```
## 文件夹管理模块
> var bar = require("bar");   

那么Node.js将会去寻找node_modules目录下的bar文件夹中的index.js去执行。
每一个模块文件夹中，推荐都写一个package.json文件，这个文件的名字不能改。node将自动读取里面的配置。有一个main项，就是入口文件:

```
{
  "name": "kaoladebar",
  "version": "1.0.1",
  "main" : "app.js"		//如果没有package或者package中没有main,node找到就是文件夹下面的index.js这个文件作为模块
}
```
package.json文件，要放到模块文件夹的根目录去.
我们刚才学习了，模块就是一些功能的封装，所以一些成熟的、经常使用的功能，都有人封装成为了模块。并且放到了社区中，供人免费下载。
这个伟大的社区，叫做npm。 也是一个工具名字  node package management
[https://www.npmjs.com/](https://www.npmjs.com/)

