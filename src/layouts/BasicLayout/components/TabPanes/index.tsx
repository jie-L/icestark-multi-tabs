/*
 * @Author: lijie
 * @Date: 2022-03-31 17:54:03
 * @Description: 
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-06 15:22:59
 */
import React, { useEffect } from 'react';
import { Tab, Button, Icon } from '@alifd/next';
import store from '@/store';
import { history, withRouter } from 'ice';
import { asideMenuConfig } from '../../menuConfig';
import { checkActive } from '@/utils/index';

const TabPanes = (props) => {
  const { location } = props;
  const { pathname } = location;

  const [panesState, panesDispatchers] = store.useModel('panes');
  console.log(store.useModel('panes'));

  useEffect(() => {
    const idx = asideMenuConfig.findIndex((config) => checkActive(pathname, config));
    if (idx > -1) {
      console.log('append')
      panesDispatchers.append(asideMenuConfig[idx]);
    }
  }, [pathname]);

  const onChange = (path: string) => {
    const pathStr = panesState.panes.find((pane) => pane.path === path)?.path;
    if (path) {
      history.push(pathStr);
    }
  };

  const close = (targetKey) => {
    if (targetKey === panesState.activeKey) {
      history.push(panesState.panes[0].path);
    }
    panesDispatchers.remove(targetKey);
  };

  return (
    <div>
      <Tab
        shape="wrapped"
        activeKey={panesState.activeKey}
        onChange={onChange}
        onClose={close}
        className="custom-tab"
      >
        {panesState.panes.map((item) => (
          <Tab.Item
            title={item.name}
            key={item.path}
            closeable={item.closeable}
          >
            {item.component()}
          </Tab.Item>
        ))}
      </Tab>
    </div>
  );
};

export default withRouter(TabPanes);
