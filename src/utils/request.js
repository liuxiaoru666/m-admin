import axios from 'axios';
import Vue from 'vue';

//baseURL
axios.defaults.baseURL='http://localhost:8080/'
//拦截器
axios.interceptors.request.use(function(config){
    //请求发起之前
    const token = localStorage.getItem('token');
    //不是登录请求，header添加token
   if(token){
    config.headers['token'] = token;
   }
    
})


