import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/Slice/authSlice';

const { Header, Sider, Content } = Layout;

const Main = () => {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false);


  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Layout style={{ height: '100vh' }}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <Link to={'/'}>dashboard</Link>,
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to={'/page1'}>page1</Link>,
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <Link to={'/page2'}>page2</Link>,
          },
          {
            key: '4',
            label: <Button type='primary' onClick={handleLogout}>Logout</Button>,
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          backgroundColor: 'white'
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
        }}
      >
         <Outlet />
      </Content>
    </Layout>
  </Layout>
  )
}

export default Main