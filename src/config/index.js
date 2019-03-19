let host = ''
let TestHost = '/proxyJapi' // 实际地址为http://api.juheapi.com
if (process.env['NODE_ENV'] === "production") {
    // 生产环境
    host = 'https://eosnode.fund/backend'
} else {
    // 开发、测试环境
    host = 'https://ttt.eosnode.fund/backend'
}
export const baseUrl = host // 接口host
export const testHost = TestHost