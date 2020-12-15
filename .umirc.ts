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
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
          routes: [
            { path: '/summoner', component: '@/pages/summoner' },
            { path: '/hero', component: '@/pages/hero' },
            { path: '/item', component: '@/pages/item' },
          ],
        },
      ],
    },
  ],
});
