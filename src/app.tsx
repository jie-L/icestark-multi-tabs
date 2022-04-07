/*
 * @Author: lijie
 * @Date: 2022-03-31 17:54:03
 * @Description: 
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-07 10:50:31
 */
import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    // type: 'browser',
    type: 'hash',
  },
};

runApp(appConfig);
