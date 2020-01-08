/*
 axios 二次封装 包含路径等信息
 */
export default {
  method: 'get',
  baseURI: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  //参数
  data:{},
  timeout: 10000,
  //携带凭证
  withCredentials:true,
  //返回数据类型
  responseType:'json'
}
