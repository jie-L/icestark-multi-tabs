/*
 * @Author: lijie
 * @Date: 2022-03-31 17:54:03
 * @Description: 
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-06 15:16:16
 */
import { asideMenuConfig } from '../layouts/BasicLayout/menuConfig';

export default {
  state: {
    panes: [],
    activeKey: '',
  },
  reducers: {
    append(prevState, payload) {
      const opened = prevState.panes.some((pane) => pane.path === payload.path);
      console.log(prevState.panes, payload, opened);
      return {
        ...prevState,
        panes: opened ? prevState.panes : prevState.panes.concat(payload),
        activeKey: payload.path,
      };
    },
    remove(prevState, key) {
      return {
        ...prevState,
        panes: prevState.panes.filter((pane) => pane.path !== key),
      };
    },
    updateKey(preState, key) {
      return {
        ...preState,
        activeKey: key,
      };
    },
  },
};
