import axios from 'axios';
import Qs from 'qs';
import {
  Message
} from 'element-ui';
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // transformRequest: [function (data) {
  //   return Qs.stringify(data)
  // }],
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 50000,
});
window._axiosPromiseArr = [] //取消接口配置使用
// request拦截器
service.interceptors.request.use((config) => {
  //请求接口取消配置
  config.cancelToken = new axios.CancelToken((cancel)=>{
    window._axiosPromiseArr.push({cancel,url:config.url})//url字段为后面区分取消接口用
    console.log(window._axiosPromiseArr,'----0000')
  })
  return config;
}, (error) => {
  // 可以在这里统一处理请求错误
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use((response) => {
  if (!response.status === 200) {
    // 可以在这里统一处理响应错误
    if ("success" !== response.data.result) {
      // 可以在这里统一处理响应错误
      Message({
        type: 'error',
        message: response.data.message == null ? '请求异常' : response.data.message
      });
      return Promise.reject(response.data);
    }
    return Promise.reject(response.data);
  } else {
    if (response.data.code === '401') {
      Message({
        type: 'error',
        message: '登录状态已失效，请重新登录'
      });
      window.location.href = `${__mainFrameRootPath}/crm/backapi/weChatWork/home`
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  }
}, (error) => {
  // 可以在这里统一处理响应错误
  return Promise.reject(error);
});

service.subPath = process.env.SUB_PATH;

export default service;
