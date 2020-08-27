import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";

//解决el-menu重定向报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);
//通用路由表
export const constanceRoutes = [
  {
    path: "/",
    name: "home",
    redirect: "/indexPage",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "indexPage",
        name: "indexPage",
        component: () => import("@/views/indexPage.vue"),
        meta: { title: "权限列表" }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    hidden: true,
    //lazyLoad
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/login/Login.vue")
  },
  {
    name: "user",
    path: "/user",
    redirect: "/user/userList",
    component: Layout,
    meta: { title: "用户管理" },
    children: [
      {
        //占位，否则不显示submenu
        path: "userEmpty",
        hidden: true
      },
      {
        path: "userList",
        name: "userList",
        component: () => import("@/views/user/User.vue"),
        meta: {
          title: "用户列表"
        }
      }
    ]
  },
  {
    name: "right",
    path: "/right",
    redirect: "/right/role",
    component: Layout,
    meta: { title: "权限管理" },
    children: [
      {
        path: "rightList",
        name: "rightList",
        component: () => import("@/views/rights/right.vue"),
        meta: {
          title: "权限列表"
        }
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/rights/role.vue"),
        meta: {
          title: "角色列表"
        }
      }
    ]
  },
  {
    name: "example",
    path: "/example",
    redirect: "/example/menu1",
    component: Layout,
    meta: { title: "Example" },
    children: [
      {
        path: "menu1",
        name: "menu1",
        component: () => import("@/views/example"),
        children: [
          {
            path: "menu1-1",
            name: "menu1-1",
            component: () => import("@/views/example"),
            meta: { title: "menu1-1" }
          },
          {
            path: "menu1-2",
            name: "menu1-2",
            component: () => import("@/views/example"),
            meta: { title: "menu1-2" }
          }
        ],
        meta: {
          title: "menu1"
        }
      },
      {
        path: "menu2",
        name: "menu2",
        component: () => import("@/views/example"),
        children: [
          {
            path: "menu2-1",
            name: "menu2-1",
            component: () => import("@/views/example"),
            meta: { title: "menu2-1" }
          },
          {
            path: "menu2-2",
            name: "menu2-2",
            component: () => import("@/views/example"),
            meta: { title: "menu2-2" }
          }
        ],
        meta: {
          title: "menu2"
        }
      }
    ]
  }
];

export default new VueRouter({
  mode: "history",
  routes: constanceRoutes
});

//异步路由表，根据权限加载
// export const asyncRouterMap=[

// ]

// export default router
