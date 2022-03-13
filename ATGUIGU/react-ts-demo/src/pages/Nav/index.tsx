import React, { useState } from 'react'
import { Menu,Layout } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


export default function Nav() {


  const [collapsed,onCollapse] = useState({ collapsed:false })
  
  return (
    <Sider collapsible>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        业务系统
      </Menu.Item>

      <SubMenu key="sub1" icon={<UserOutlined />} title="组织人员管理">
        <Menu.Item key="3">机构管理</Menu.Item>
        <Menu.Item key="4">机构管理</Menu.Item>
        <Menu.Item key="5">机构管理</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="日常管理">
        <Menu.Item key="6">计划管理</Menu.Item>
        <Menu.Item key="113">BIA管理</Menu.Item>
        <Menu.Item key="111">SBIA管理</Menu.Item>
        <Menu.Item key="112">报告管理</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<UserOutlined />} title="User">
        <Menu.Item key="77">Tom</Menu.Item>
        <Menu.Item key="76">Bill</Menu.Item>
        <Menu.Item key="75">Alex</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
  </Sider>
  )
}
