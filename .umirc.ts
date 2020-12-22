import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  // proxy: {
  //   '/api': {
  //     'target': 'https://pvp.qq.com',
  //     'changeOrigin': true,
  //     'pathRewrite': {
  //       '^/api': ''
  //     }
  //   }
  // },
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
            {
              path: '/herodetail/:ename',
              component: '@/pages/herodetail/ename',
            },
            { path: '/item', component: '@/pages/item' },
          ],
        },
      ],
    },
  ],
});
