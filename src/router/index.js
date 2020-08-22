import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path: 'user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ '@/components/user/User.vue')
     },
     {path: 'rightList',
      name: 'rightList',
      component: () => import(/* webpackChunkName: "about" */ '@/components/rights/right.vue')
     },
     {path: 'role',
      name: 'role',
      component: () => import(/* webpackChunkName: "about" */ '@/components/rights/role.vue')
     }
    ]
  },
  {
    path: '/login',
    name: 'login',
    //lazyLoad
    component: () => import(/* webpackChunkName: "about" */ '@/components/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach

export default router
