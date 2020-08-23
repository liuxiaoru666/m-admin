import axios from 'axios';
import Vue from 'vue';
import { MessageBox, Message } from 'element-ui'
//实例化axios
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // 跨域携带cookie
    timeout: 20 * 1000 //超时
})

//请求拦截
service.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['X-Token'] = token;//每个请求携带token
      }
      return config
},err=>{
    return Promise.reject(err)
})

//响应拦截
service.interceptors.response.use(response=>{
    const res = response.data;
    if(res.code==200){
        return res;
    }else if(res.code==403){
        //去登录
    }else{
        Message({
            message:res.message||Error,
            duration:2000
        })
    }


},error=>{
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    return Promise.reject(error)
})


export default service;