import axios from 'axios'
import qs from 'qs'

let baseURL = window.location.origin;
let api = '/cardapi'

export default function fetch(opt){
    let ContentType = 'application/json;charset=UTF-8';
    if (opt.ContentType === 'form') {
        ContentType = 'application/x-www-form-urlencoded';
    } else if (opt.ContentType === 'form-data') {
        ContentType = 'multipart/form-data';
    }
    var dataList = {
        method: opt.method,
        url: `${api}${opt.url}`,
        baseURL,
        headers: {
            'Content-Type': ContentType,
            'token': localStorage.token
        },
        withCredentials: true
    }
    if (['post', 'put'].includes(opt.method)) {
        opt.ContentType === 'form' ? dataList.data = qs.stringify(opt.data) : dataList.data = opt.data;
    } else {
        // 防止缓存
        if (opt.data) {
            opt.data.r = new Date().getTime() + Math.random()
            dataList.params = opt.data;
        } else {
            dataList.params = { r: new Date().getTime() + Math.random()}
        }
    }
    return new Promise((resolve, reject) => {
        axios(dataList)
            .then(res => {
                // commonFun(res.data)
                resolve(res.data)
            })
            .catch(error => {
                reject(error.data)
            })
    })
}
// 发送请求前处理数据
axios.interceptors.request.use(config => {
  // Indicator.open();
  return config;
}, error => {
  // Indicator.close();
  return Promise.reject(error);
});

// 返回响应请求后处理数据
axios.interceptors.response.use(res => {
  // Indicator.close();
  return res;
}, error => {
  // Indicator.close();
  let errorCode = error.response.status;
  if (errorCode === 401) {
      // utils.$go('login');
  } else if ([405, 500, 503, 504].includes(errorCode)) {
      error.response.data = {
          msg: '网络错误,请稍后重试!'
      };
  }
  return Promise.reject(error.response)
});
