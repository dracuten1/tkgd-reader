import React from 'react';
import 'antd/dist/antd.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon, Dropdown } from 'antd';
const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'sub'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const dataCate = [
      'THỜI SỰ',
      'PHÁP LUẬT',
      'THỂ THAO',
      'THẾ GIỚI',
      'CÔNG NGHỆ',
      'KINH DOANH',
      'GIẢI TRÍ',
      'THỜI TRANG',
      'ĐỜI SỐNG',
      'GIÁO DỤC'
    ];
    const menuTemp = (
      <Menu>
        <Menu.Item>
          <Link>Chuyên mục con 01</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>Chuyên mục con 02</Link>
        </Menu.Item>
      </Menu>
    );
    const menu = [
      <Menu>
        <Menu.Item>
          <Link>Chính trị</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>Giao thông</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>Đô thị</Link>
        </Menu.Item>
      </Menu>,
      <Menu>
        <Menu.Item>
          <Link>Pháp đình</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>Vụ án</Link>
        </Menu.Item>
      </Menu>,
      <Menu>
        <Menu.Item>
          <Link>Thể thao Việt Nam</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>Thể thao quốc tế</Link>
        </Menu.Item>
      </Menu>,
      <Menu>
        <Menu.Item>
          <Link>Quân sự</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>Chuyện lạ</Link>
        </Menu.Item>
      </Menu>
    ];
    return (
      <Menu
        style={{ height: '50px', lineHeight: '51px' }}
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item
          key="ct0"
          style={{
            textAlign: 'center',
            padding: '0px 10px 0px 20px'
          }}
        >
          <Link to="/home">
            {' '}
            <Icon type="home" style={{ fontSize: '25px' }} />
          </Link>
        </Menu.Item>
        {dataCate.map((item, id) => (
          <Menu.Item key={id}>
            <Dropdown overlay={id < menu.length ? menu[id] : menuTemp}>
              <Link style={{ fontWeight: 500 }} to="/bycate">
                {item} <Icon type="down" />
              </Link>
            </Dropdown>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default Navbar;
