/*
 * @Author: lijie
 * @Date: 2022-03-31 17:54:03
 * @Description: 
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-06 15:21:25
 */
import React, { useState, useEffect } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';
import TabPanes from './components/TabPanes';
import { asideMenuConfig } from './menuConfig';
import { checkActive } from '../../utils';
import store from '@/store';

const BasicLayout = ({ pathname, appLeave, appEnter, children }) => {

  const [panesState, panesDispatchers] = store.useModel('panes');

  // 判断页面路由，匹配对应 tab
  useEffect(() => {
    const idx = asideMenuConfig.findIndex((config) => checkActive(window.location.pathname, config));
    if (idx > 0) {
      panesDispatchers.append(asideMenuConfig[idx]);
    }
  }, [pathname]);

  return (
    <Shell
      style={{
        minHeight: '100vh',
      }}
      type="brand"
      fixedHeader={false}
    >
      <Shell.Branding>
        <Logo
          image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
          text="Logo"
        />
      </Shell.Branding>
      <Shell.Navigation
        direction="hoz"
        style={{
          marginRight: 10,
        }}
      />
      <Shell.Action />
      <Shell.Navigation>
        <PageNav />
      </Shell.Navigation>

      <Shell.Content>
        <TabPanes />
        {/* {children} */}
      </Shell.Content>
      <Shell.Footer>
        <Footer />
      </Shell.Footer>
    </Shell>
  );
}

export default BasicLayout;
