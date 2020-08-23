import request from '@/utils/request.js';

export function login(data){
    return request({
        url:'/login',
        method:'post',
        data
    })
}

export function getUserList(){
    return request({
        url:'/userList',
        method:'get'
        
    })
}