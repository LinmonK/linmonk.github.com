import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // @ 是 /src 的别名
    { path: '/', component: () => import('../App.vue')},
    { path: '/hello', component: () => import('comps/test.vue') },
  
  ]
})

export default router