import React from "react";

import {Breadcrumb, Layout, Menu} from 'antd';
import {
    AppstoreOutlined,
    HomeOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';

import './index.css'

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;

export default class Index extends React.Component {
    state = {
        collapsed: false,
        title: 'React-antd'
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            title: !this.state.collapsed ? '' : "React-antd"
        });
    };

    render() {
        return (
            <Layout className="container-wrap">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <h2 className='logo-title'>{this.state.title}</h2>
                    </div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        {/*<MenuUnfoldOutlined v-if={this.state.collapsed} onClick={this.toggle} className='trigger'/>
                        <MenuUnfoldOutlined v-else={this.state.collapsed} onClick={this.toggle} className='trigger'/>*/}

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '10px 10px',
                            padding: 10
                        }}
                    >
                        <Breadcrumb>
                            <Breadcrumb.Item href="">
                                <HomeOutlined/>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <UserOutlined/>
                                <span>Application List</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Application</Breadcrumb.Item>
                        </Breadcrumb>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}