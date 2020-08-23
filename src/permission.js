import router from './router';
import { Message } from 'element-ui'

router.beforeEach(async(to,from,next)=>{

 let whiteList = ['/login'];//不重定向白名单
 const token = localStorage.getItem('token')||'';
 //has token
 if(token){
    //有token去登录页重定向到首页
    if(to.name==='login'){
        next({ path: '/' })
    }else{
        //有token去其他页面正常
        next();
    }
 }else{
     //跳转白名单页不需要token验证
     if(whiteList.indexOf(to.path)!==-1){
      next();
     }else{
         //非白名单未登录页重定向到登录页面
        next(`/login?redirect=${to.path}`)
     }
 }

})