import React, { useState } from 'react';
import styles from "./index.module.less"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  UpOutlined,
  PieChartOutlined,
  DownOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import {RightOutlined} from "@ant-design/icons"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): any{
  // return <MenuItem
  // key={key}
  // icon = {icon}
  // // label={label}
  // // type={type}>

  // </MenuItem>
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const List = ()=>{
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.box}>
      <div style={{ width: 256 }}>
        <div className={styles.title}>
          <div onClick={toggleCollapsed}>
            <span className={styles.name}>Current Projects</span>
            <div className={styles.icon}>
              {!collapsed ? <DownOutlined /> : <UpOutlined />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        // mode="inline"
        // inlineCollapsed={collapsed}
        // items={items}
      >
        {
          [1,2,3,4,5,6].map((val,key)=>{
            return (
              <Menu.Item key={key}>
                <div className={styles.item}>
                  <span className={styles.number}>PN0001245</span>
                  <span className={styles.name}>Medical App(IOS native)</span>
                  <div className={styles.more}>
                    <span>View details</span>
                    <div className={styles.icon}>
                      <RightOutlined/>
                    </div>
                  </div>
                </div>
              </Menu.Item>
            ) 
          })
        }
      </Menu>
        </div>
    </div>
  )
}

export default List;
 