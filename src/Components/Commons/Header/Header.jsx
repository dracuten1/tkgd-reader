import React from 'react';
import 'antd/dist/antd.css';
import './Header.css';
import {
  Menu,
  Icon,
  Dropdown,
  Input,
  Row,
  Col,
  Button,
  Modal,
  Typography
} from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Sign from '../../Sign/Sign';

const { Search } = Input;
const { Title, Text } = Typography;

class HeaderCustom extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  componentWillReceiveProps(next) {
    if (next.isLogin) {
      this.setState({ visible: false });
    }
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/trade">Đổi quà tặng</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">Gửi bài viết</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">Lịch sử tin</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Đăng xuất</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className="top-up">
          <span>Hồ Chí Minh, Thứ hai - 09/12/2019</span>
          <Search style={{ width: 300 }} placeholder="Tìm kiếm"></Search>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {this.props.isLogin ? (
              <Link style={{ fontSize: 16 }} to="/trade">
                <Icon type="dollar" />
                &ensp;1000&ensp;
              </Link>
            ) : (
              <Button
                type="link"
                className="link-custom"
                onClick={e => this.setState({ visible: true })}
              >
                {' '}
                <Icon type="login" />
                Đăng nhập
              </Button>
            )}
            <span>|</span>
            {this.props.isLogin ? (
              <Dropdown overlay={menu} trigger={['click']}>
                <Link
                  className="ant-dropdown-link"
                  to="trade"
                  style={{ fontSize: 16 }}
                >
                  &ensp;
                  <Icon type="user" />
                  &ensp;
                  {this.props.name}&ensp; <Icon type="down" />
                </Link>
              </Dropdown>
            ) : (
              <Button
                type="link"
                className="link-custom"
                onClick={this.showModal}
              >
                {' '}
                <Icon type="user-add" />
                Đăng ký
              </Button>
            )}
          </div>
        </div>
        <Row className="header-custom">
          {' '}
          <Col
            span={10}
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Link className="logo" to="/home">
              <Text
                level={1}
                style={{ fontFamily: 'Tahoma', fontSize: 40, color: 'black' }}
              >
                TINMỚI<span style={{ color: 'red', fontWeight: 500 }}>247</span>
                <span style={{ fontSize: 30, color: 'gray' }}>.com</span>
              </Text>
              <Text style={{ fontSize: 16 }}>
                Tin tức tổng hợp mới nhất trong ngày
              </Text>
            </Link>
          </Col>
          <Col
            span={14}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px 0px'
            }}
          >
            <Link>
              <img
                style={{
                  objectPosition: 'center center',
                  objectFit: 'fill',
                  width: '100%',
                  height: 100,
                  maxHeight: 100
                }}
                src="https://khuyenmaihot247.com/wp-content/uploads/2018/12/shopee-khuyen-mai-tet-2019-1.jpg"
                alt="coupon for weekend"
              />
            </Link>
          </Col>
        </Row>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            maxWidth: '350px'
          }}
        >
          <Sign />
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLogin: state.LoginReducer.isLogin,
  name: state.LoginReducer.username
});
export default connect(mapStateToProps, null)(HeaderCustom);
