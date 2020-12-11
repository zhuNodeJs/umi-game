import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/about'},
        { path: '/product/:id', component: '@/pages/product/_layout',
          routes: [{path: '/product/:id', component: '@/pages/product/[id]'}]},
        { path: '/login', component: '@/pages/login'},
        {component: '@/pages/404/index'}
      ]
    }
  ],
});
