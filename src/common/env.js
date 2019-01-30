let baseUrl = ''
let debug = false
let cancleHTTP = []
// 开发环境
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'api'
  debug = false
  // 编译环境
} else if (process.env.NODE_ENV === 'testing') {
  baseUrl = 'http://192.168.1.94/liding'
  debug = true
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://192.168.1.94/liding'
  debug = false
}
export {
  baseUrl,
  debug,
  cancleHTTP
}
