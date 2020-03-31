import React, { useState, useMemo } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ContentComponent from '../content';
import { menu } from './constants';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Home() {

    const [selected, setSelected] = useState([8, "sub2"]);

    const activeMenu = useMemo(() => {
        return menu.find(item => item.key === selected[1]).name
    }, [selected])

    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Header className="header">
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['8']}
                        defaultOpenKeys={['sub2']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={function ({ item, key, keyPath, domEvent }) {
                            setSelected(keyPath)
                            console.log({ item, key, keyPath, domEvent })
                        }} >

                        {
                            menu.map(item => {
                                return item.sublist ?
                                    <SubMenu key={item.key} title={item.title} >
                                        {
                                            item.sublist.map(item => <Menu.Item key={item.key} > {item.name} </Menu.Item>)
                                        }
                                    </SubMenu> :
                                    <Menu.Item key={item.key} > {item.name} </Menu.Item>
                            })
                        }

                    </Menu>
                </Sider>

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>{activeMenu}</Breadcrumb.Item>
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

export default Home;
