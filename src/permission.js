import router from './router';
import store from './store';


router.beforeEach(async(to,from,next)=>{

 let whiteList = ['/login'];//不重定向白名单
 const token = localStorage.getItem('token')||'';
 //has token
 if(token){
    //有token去登录页重定向到首页
    if(to.name==='login'){
        next({ path: '/' })
    }else{
        next();
        //获取用户信息，得到权限
        let hasInfo = true;
        if(hasInfo){
            router.addRoutes(store.state.addRoutes) // 动态添加可访问路由表
        }
    //    next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 
    }
    //no token
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