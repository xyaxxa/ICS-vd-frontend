import Vue from 'vue';
import VueRouter from 'vue-router';

import AdminMenu from '@/layout/aside/components/AdminMenu.vue';
import MainLayout from '../layout/MainLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    component: MainLayout,
    children: [
      {
        path: 'usermanage',
        name: 'admin',
        components: {
          menu: AdminMenu,
          main: () => import('../views/admin/UserManageView.vue'),
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
