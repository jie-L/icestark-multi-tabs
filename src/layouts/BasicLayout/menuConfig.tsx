/*
 * @Author: lijie
 * @Date: 2022-03-31 17:54:03
 * @Description: 
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-07 10:43:30
 */
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Test1 from '../../pages/Test1';
import Test2 from '../../pages/Test2';
import IcestarkApp from '../../components/IcestarkApp';

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '首页',
    key: '1',
    path: '/',
    icon: 'smile',
    exact: true,
    component: Dashboard,
    closeable: false,
  },
  {
    name: '测试一',
    key: '2',
    path: '/test1',
    icon: 'smile',
    exact: false,
    component: Test1,
    closeable: true,
  },
  {
    name: '测试二',
    key: '3',
    path: '/test2',
    icon: 'smile',
    exact: false,
    component: Test2,
    closeable: true,
  },
  {
    name: '测试三',
    key: '4',
    path: '/test3',
    icon: 'smile',
    exact: false,
    component: Dashboard,
    closeable: true,
  },
  {
    name: '微应用测试',
    key: '6',
    path: '/seller/list',
    icon: 'smile',
    component: () => (<IcestarkApp
      name="seller-list"
      title="小二"
      basename="seller"
      loadScriptMode="import"
      entry="http://49.4.11.238/icejs/hash/index.html"
      // entry="http://49.4.11.238/icejs/browser/index.html"
    />),
    closeable: true,
  },
  {
    name: '404',
    key: '404',
    path: '/',
    icon: 'smile',
    exact: false,
    component: () => <div>404</div>,
    closeable: true,
  },
];

export { headerMenuConfig, asideMenuConfig };
