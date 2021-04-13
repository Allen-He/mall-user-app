import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Index from '@/views/pages/Index.vue';
import Classify from '@/views/pages/Classify.vue';
import ShoppingCar from '@/views/pages/ShoppingCar.vue';
import Mine from '@/views/pages/Mine.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    redirect: '/home/classify',
    component: Home,
    children: [
      {
        path: 'index',
        component: Index,
      },
      {
        path: 'classify',
        name: 'classify',
        component: Classify,
      },
      {
        path: 'shoppingcar',
        component: ShoppingCar,
      },
      {
        path: 'mine',
        component: Mine,
      },
    ],
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
