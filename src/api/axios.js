import axios from 'axios'
import Router from '@/router';

//请求拦截器
axios.interceptors.request.use(config => {
  //请求之前处理
  return config
}, error => error);


//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  errorHandle(response.data.errCode)
  return response.data;
}, error => {
  errorHandle(error.response.data);
  return Promise.reject(error);
});

//设置默认地址
axios.defaults.baseURL = process.env.BASE_API_UR;
//设置超过5秒报错
axios.defaults.timeout = 5000;
//设置携带cookie
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Channel'] = '03';

export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data,
    }).then(response => {
      resolve(response);
    }).catch(err => {
      console.log(err)
    })
  })
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err)
      })
  })
}

function errorHandle(res) {
  // 状态码判断
  switch (res.code) {
    case 200:
      break;
    case 400:
      Message({
        message: res.msg,
        type: "error",
        duration: 3000,
      });
      break;
    case 401:
      Message({
        message: "请登录",
        type: "error",
        duration: 3000,
      });
      break;
    case 404:
      Message({
        message: "请求的资源不存在",
        type: "error",
        duration: 3000,
      });
      break;
    default:
      Message({
        message: res.msg ? res.msg : "网络连接错误",
        type: "error",
        duration: 3000,
      });
  }
}
