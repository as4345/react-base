开发流程
只需关注src目录内即可
所有公共方法写到src/utils内并暴漏到src/utils/index.js上
所有页面需暴漏在src/routes/index上，src/pages或者src/components内不再有Router页面，避免难以翻找页面
所有区分业务环境的公共配置写在src/config上，如接口host等
所有静态图片资源放在src/assets内，webpack已配置@符号为src/目录，可直接@/assets/xxx.png方式引入
如果需要引入antd，则在src/index.js上引入antd的css文件，然后在src/utils/index.js引入antdFile，这么做是为了以最低体积的方式引入





架子简单中文版说明

此项目是 react + react-router4 + mobx + axios的一个项目，是在create-react-app的基础上增加了额外一些基础工具支持，可以作为
新项目的一个基础架子，相较react + redux，这个框架基础更加简洁，开发效率更高，不要关心一堆复杂的状态更新流程

运行项目

安装yarn 并进入项目根目录执行yarn

运行开发环境
npm start


运行生成环境
1.打包生产/开发测试环境（主要是接口host不同，部分包打包出来体积不同）
npm run build
npm run buildDev
2.跑服务器（根据不同情况有多个方法）

node服务器
node server.js  // 没有后端支持时解决跨域接口问题

nginx服务器 // 使用try_files重定位所有访问到index.html
server {
 ...
 location / {
  try_files $uri /index.html
 }
}

apache服务器  // 同上原理
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]




开发环境接口代理使用教程（服务端需要后台配合设置cors，这里不做介绍），此项目home页既采用了下面教程的代理方案
假设
api.js里有个“http://api.jisuapi.com/todayhistory/query”接口
todo.js这个文件有个方法要问上面这个接口

则
// api.js
const tohHost = process.env.NODE_ENV !== 'production' ? "/jisuapi" : "http://api.jisuapi.com"
export default {
  toh: tohHost + "/todayhistory/query"
}
利用webpack打包过程暴露的process.env.NODE_ENV字段判断当前是否开发环境，是则定义host为“/jisuapi”（用于代理接口的区分字段，可以自行定义），否则用上生产环境的实际host

// todo.js
import api from “api.js”
ajax({
  url: api.toh
})
解析：在开发环境，我们去掉接口网站域名，并自定义一个开头字段(用于辨识该接口是否使用了代理转发)
例："http://api.jisuapi.com/todayhistory/query"  ==>> "/jisuapi/todayhistory/query"

// package.json
在webpackDevServer的proxy加入以下配置，此处我的配置是写在package.json内
"proxy": {
  "/jisuapi": {   // 自定义开头字段
    "target": "http://api.jisuapi.com",   // 网站域名
    "changeOrigin": true, 
    "pathRewrite": {
        "^/jisuapi": ""   // 将自定义开头字段去掉
    }
  }
},