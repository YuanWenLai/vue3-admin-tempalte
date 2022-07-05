 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
 import Layout from '@/layout'
 import { RouterTy } from '~/router'

 export const constantRoutes: Array<RouteRecordRaw> = [
   {
       path: '/',
       name: 'Index',
       redirect: '/home',
       meta: {
           title: '首页',
           keepAlive: true,
           requireAuth: true,
           elSvgIcon: 'Fold'
       },
       component: Layout,
       children: [
        {
          path: '/home',
          name: 'Home',
          meta: {
            title: '主页',
            keepAlive: true,
            requireAuth: false,
            elSvgIcon: 'Aim'
          },
          component: () => import('@/pages/home/index.vue')
        },
        {
          path: '/home/login',
          name: 'Login',
          meta: {
              title: '登录',
              keepAlive: true,
              requireAuth: false,
              elSvgIcon: 'Baseball'
          },
          component: () => import('@/pages/login/index.vue')
        },
      ]
   }
 ]


 /**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTy = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      elSvgIcon: 'Aim',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'roleIndex',
        component: () => import('@/pages/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: 'role Index',
          icon: 'lock',
        }
      },
      {
        path: 'page',
        component: () => import('@/pages/permission/index.vue'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/pages/permission/index.vue'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'code-index',
        component: () => import('@/pages/permission/index.vue'),
        name: 'CodePermission',
        meta: {
          title: 'Code Index'
        }
      },
      {
        path: 'code-page',
        component: () => import('@/pages/permission/index.vue'),
        name: 'CodePage',
        meta: {
          title: 'Code Page',
          code: 1
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  // using pathMatch install of "*" in vue-router 4.0
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

 const router = createRouter({
   history: createWebHistory(),
   routes: constantRoutes
 });
 export default router;
