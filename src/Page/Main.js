import React, {useState} from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import Dashboard from './Dashboard/Dashboard';
import NotFound from './404';
import Page1 from './Page1';
import Page2 from './Page2';

const { Header, Sider, Content } = Layout;

const Main = () => {

  const [collapsed, setCollapsed] = useState(false);

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
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/404" component={NotFound} />
        </Switch>
      </Content>
    </Layout>
  </Layout>
  )
}

export default Main