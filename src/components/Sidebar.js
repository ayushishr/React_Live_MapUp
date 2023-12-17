import React from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <aside style={{ width: 200 }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Map Guide">
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Your Places
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            Location Sharing
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            Your Timeline
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default Sidebar;
