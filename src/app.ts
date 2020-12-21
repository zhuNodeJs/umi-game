/**
 * umi没有入口文件，当需要求一个入口，那么就需要app.js或者global.js, 添加polyfill等兼容的文件
 */
import { ResponseError } from 'umi-request';

export const request = {
  prefix: '/api',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log('request error===', error);
  },
};
