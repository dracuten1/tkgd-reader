import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import GiftList from './GiftList/GiftList';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class TradeCoin extends Component {
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/home">
              <Icon type="home"></Icon>&ensp;Trang chủ
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Đổi quà tặng</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '0px 0', background: '#fff' }}>
          <Sider
            width={250}
            style={{
              height: 250,
              minHeight: 250,
              background: '#fff',
              marginRight: 20,
              border: '1px solid #e0e0e0'
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="1">
                <Icon type="gift" />
                Đổi quà tặng
              </Menu.Item>
              <Menu.Item key="2">
                {' '}
                <Icon type="history" />
                Gửi bài viết
              </Menu.Item>
              <Menu.Item key="3">
                {' '}
                <Icon type="gift" />
                Tin đã xem
              </Menu.Item>
              <Menu.Item key="4">
                {' '}
                <Icon type="logout" />
                Đăng xuất
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '10px 24px',
              minHeight: 280,
              border: '1px solid #e0e0e0'
            }}
          >
            <GiftList />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default TradeCoin;
