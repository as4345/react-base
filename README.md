


简单中文版说明

此项目是 react + react-router4 + mobx + axios的一个项目，是在create-react-app的基础上增加了额外一些基础工具支持，可以作为
新项目的一个基础架子，相较react + redux，这个框架基础更加简洁，开发效率更高，不要关心一堆复杂的状态更新流程

运行项目

安装yarn 并进入项目根目录执行yarn

运行开发环境
npm start


运行生成环境
1.打包
npm run build
2.跑服务器
npm run serve (未安装serve需先yarn global add serve全局安装)


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