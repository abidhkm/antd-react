import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
import ContentComponent from './containers/Content';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {

  const [selected,setSelected] = useState([8]);

  return (
    <Layout style={{minHeight:'100vh'}} >
    <Header className="header">
     
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">           
        <Menu
          mode="inline"
          defaultSelectedKeys={['8']}
          defaultOpenKeys={['sub2']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={function({ item, key, keyPath, domEvent }) {
            setSelected(keyPath)
            console.log({item, key, keyPath, domEvent})
          }}
        >
          
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Orders</Menu.Item>
            <Menu.Item key="3">Providers</Menu.Item>

            
          <SubMenu
            key="sub1"
            title={
              <span>
                Users
              </span>
            }
          >
            <Menu.Item key="4">option5</Menu.Item>
            <Menu.Item key="5">option6</Menu.Item>
            <Menu.Item key="6">option7</Menu.Item>
            <Menu.Item key="7">option8</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                Categories
              </span>
            }
          >
            <Menu.Item key="8">Normal Categories</Menu.Item>
            <Menu.Item key="9">Commercial Categories</Menu.Item>

          </SubMenu>

          <SubMenu
            key="sub3"
            title={
              <span>
                Area
              </span>
            }
          >
            <Menu.Item key="10">option9</Menu.Item>
            <Menu.Item key="11">option10</Menu.Item>
            <Menu.Item key="12">option11</Menu.Item>
            <Menu.Item key="13">option12</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub4"
            title={
              <span>
                Services
              </span>
            }
          >
            <Menu.Item key="14">option9</Menu.Item>
            <Menu.Item key="15">option10</Menu.Item>
            <Menu.Item key="16">option11</Menu.Item>
            <Menu.Item key="17">option12</Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <ContentComponent selected={selected} />
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default App;
