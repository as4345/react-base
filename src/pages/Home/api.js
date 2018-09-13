// 不论开发还是生产环境都使用代理
const tohHost = "/jisuapi" 
const juheHost = "/juheapi" 
// const tohHost = process.env.NODE_ENV !== 'production' ? "/jisuapi" : "https://api.jisuapi.com"
export default {
  toh: tohHost + "/todayhistory/query",
  test: juheHost + "/japi/toh"
}