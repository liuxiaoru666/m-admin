import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

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
    component: Layout,
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
     { name:'home',
       path:'/',
       redirect: '/indexPage',
       component:Layout,
       children:[
        {path: '/user',
        name: 'user',
        component: () => import('@/views/user/User.vue'),
        meta:{
          btnPermission:[1,2,3]//按钮权限
        }
      },
      {path: '/rightList',
       name: 'rightList',
       component: () => import('@/views/rights/right.vue'),
       meta:{
        btnPermission:[1,2,3]
      }
      },
      {path: '/role',
       name: 'role',
       component: () => import('@/views/rights/role.vue'),
       meta:{
        btnPermission:[1,2,3]
      }
      }
       ]
    
     }
]



// export default router
