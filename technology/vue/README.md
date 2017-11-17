# vue 

## vue-cli脚手架
### vue-cli 安装scss编译
#### 第一步
安装scss编译，需要用到vue-style-loader,css-loader,sass-loader,node-sass。
vue-style-loader,css-loader在哪npm install的时候已经默认安装过了。所以另外安装下sass-loader,node-sass
> npm install node-sass --save-dev
> npm install sass-loader --save-dev
#### 第二步
打开webpack.base.config.js在loaders里面加上
```
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }
```
#### 第三步
在需要用到scss的地方加上 lang="scss"
```
    <style lang="scss" scoped>

    </style>
```

