// 所有公共方法会在此处从新暴露以便各页面可以直接使用 u.xx 的形式调用


// 引入多个地方都用到的antd组件
import A from './antdFile'
export const a = A

// 公共store
import Store from './store'
export const store  = Store // store

// 请求方法
import request from './http'
export const post = request.post // post请求
export const get = request.get // get请求

// 接口配置
import * as Config from '../config'
export const config = Config // 接口配置