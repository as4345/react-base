
const tohHost = process.env.NODE_ENV !== 'production' ? "/jisuapi" : "http://api.jisuapi.com"
export default {
  toh: tohHost + "/todayhistory/query"
}