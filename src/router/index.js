import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/ums/admin',
    // component: Layout,
    // redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限'},

    component: () => import('@/views/ums/admin/index')

  },
  {
    path:'/ums/role',
    // component: Layout,
    // redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限'},
    component: () => import('@/views/ums/role/index'),
    // children: [
    //   {
    //     path: 'role',
    //     name: 'role',
    //     component: () => import('@/views/ums/role/index'),
    //     meta: {title: '角色列表'}
    //   }]

  },
  {
    path:'/ums/resource',
    // component: Layout,
    // redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限'},
    component: () => import('@/views/ums/resource/index'),
    // children: [
    //   {
    //     path: 'role',
    //     name: 'role',
    //     component: () => import('@/views/ums/role/index'),
    //     meta: {title: '角色列表'}
    //   }]

  },
  {
    path:'/ums/menu',
    // component: Layout,
    // redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限'},
    component: () => import('@/views/ums/menu/index'),
    // children: [
    //   {
    //     path: 'role',
    //     name: 'role',
    //     component: () => import('@/views/ums/role/index'),
    //     meta: {title: '角色列表'}
    //   }]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
