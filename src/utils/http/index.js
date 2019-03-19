import axios from 'axios'
// md5加密模块
// import md5 from 'js-md5'
// 配置文件
// import CryptoJS from 'crypto-js'
// import store from '../store'
import { stringify } from 'qs'
// import * as u from '../index'
const request = axios.create({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

// http request 拦截器
request.interceptors.request.use(
    async config => {
        console.log(config)
        // let tokenData = await AsyncStorage.getItem('tokenData')
        // tokenData = tokenData ? JSON.parse(tokenData) : {}
        // const userToken = tokenData.token ? tokenData.token.access_token : ''
        // config.headers.common.version = 'v3.0'
        // config.headers.common.sign = createSign() //接口加密验证
        // config.headers.common.lang = await u.storage.getItem('language') ? await u.storage.getItem('language') : 'en'
        // if(userToken){//所以请求追加的头部
        //     config.headers.common.Authorization = 'Bearer'+' '+userToken //token验证
        // }
        config.data = stringify(config.data)
        console.log(config)
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 返回拦截
request.interceptors.response.use(
    response => {
        // const toLoginArr = [1, 1001, 1005, 3006, 888888, 99999]
        // if (toLoginArr.indexOf(response.data.code) > -1) {
        //     if (response.data.code == 99999) { // 跳到维护页
        //         Actions.push('SCENE_NOTICECONTENT', {id: response.data.data.noticeId})
        //         return
        //     }
        //     store.setUserInfo({})
        //     store.setTokenData({})
        //     if (response.data.code == 888888) {
        //         Linking.openURL(u.config.apkUrl)
        //     }
        //     Actions['SCENE_GUIDEPAGE']()
        // }
        console.log(response)
        return response.data
    },
    error => {
        // Toast.fail(I18n.t('NetError'), 2)
        console.log(error)
        return Promise.reject(error.response)  // 返回接口返回的错误信息
    }
)

// const createSign = () => {
//     let time=Date.parse(new Date());
//     let passwordData = "time="+ time +"&apptype=web&bid="+ Math.random();
//     let vkey = 'Yx99HFvK2g#gn8SN';
//     let key = CryptoJS.enc.Utf8.parse(vkey);
//     let iv =   md5(vkey).substring(8, 24);
//     let ivv = CryptoJS.enc.Utf8.parse(iv);
//     let encrypted = CryptoJS.AES.encrypt(passwordData, key, { iv: ivv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding });
//     passwordData = encrypted.toString();
//     return passwordData
// }

export default request 