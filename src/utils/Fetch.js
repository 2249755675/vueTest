import axios from 'axios';
import Qs from 'qs';
import {
  __mainFrameRootPath,
  __appletPathConfig
} from './environment';
import {
  Message
} from 'element-ui';
import {
  GetQueryString
} from '../utils/utils'
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

// request拦截器
service.interceptors.request.use((config) => {
  let sUrl = window.location.href.substring(window.location.href.indexOf("?"), window.location.href.length);
  if(GetQueryString(sUrl,'access_token')){
    localStorage.setItem("access_token",GetQueryString(sUrl,'access_token'))
  }
  // 需要在请求发出前做的全局处理逻辑可以添加在这里
  if(localStorage.getItem('access_token')){
    config.headers['Authorization'] = `bearer ${localStorage.getItem('access_token')}`
  }

  if (config.url.indexOf("/agent") == -1 && config.url.indexOf("/recommend") == -1  ) {
    config.url = __mainFrameRootPath +'/' + __appletPathConfig + 'backapi' + config.url;
  } else {
    config.url = __mainFrameRootPath + config.url;
  }
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
