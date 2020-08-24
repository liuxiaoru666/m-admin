import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/index.vue'

//解决el-menu重定向报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
//通用路由表
export const constanceRoutes = [
  {
    path: '/',
    name: 'home',
    redirect: '/indexPage',
    component: Home,
    children:[
      {path: 'indexPage',
      name: 'indexPage',
      component: () => import(/* webpackChunkName: "about" */ '@/views/indexPage.vue')
     }
    ]
  },
  {
    path: '/login',
    name: 'login',
    //lazyLoad
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/Login.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constanceRoutes
})


//异步路由表，根据权限加载
export const asyncRouterMap=[
      {path: '/user',
       name: 'user',
       component: () => import(/* webpackChunkName: "about" */ '@/views/user/User.vue')
     },
     {path: '/rightList',
      name: 'rightList',
      component: () => import(/* webpackChunkName: "about" */ '@/views/rights/right.vue')
     },
     {path: '/role',
      name: 'role',
      component: () => import(/* webpackChunkName: "about" */ '@/views/rights/role.vue')
     }
]



// export default router
