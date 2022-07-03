 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
 import Layout from '@/layout'
 const routes: Array<RouteRecordRaw> = [
   {
     path: '/login',
     name: 'Login',
     meta: {
         title: '登录',
         keepAlive: true,
         requireAuth: false
     },
     component: () => import('@/pages/login/index.vue')
   },
   {
       path: '/',
       name: 'Index',
       redirect: '/home',
       meta: {
           title: '首页',
           keepAlive: true,
           requireAuth: true
       },
       component: Layout,
       children: [
        {
          path: '/home',
          component: () => import('@/pages/home/index.vue')
        }
      ]
   }
 ]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;
