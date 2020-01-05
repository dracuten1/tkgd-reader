import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Link } from 'react-router-dom';
import { Row, Col, Tabs, List, Typography, Icon, Button } from 'antd';
import filter01 from '../../../Assets/filer01.png';
import bycate01 from '../../../Assets/bycate01.png';
import bycate02 from '../../../Assets/bycate02.png';
import SecondListByCate from '../SecondListByCate/SecondListByCate';

const { Text } = Typography;
class ChildList extends Component {
  state = { page: 1 };
  render() {
    const postsData = this.props.data;

    const data01 = postsData.slice(0, 3);
    const data02 = postsData.slice(3, 3 + 5 * this.state.page);
    return (
      <div style={{ width: '100%' }}>
        <Row>
          <Col span={12} className="post">
            <img
              src={filter01}
              alt=""
              style={{
                objectPosition: 'center center',
                objectFit: 'fill',
                width: '100%',
                height: 500
              }}
            />
            <div className="info-post">
              <Link to="/bycate/detail">
                <Text strong className="title-post" style={{ fontSize: 25 }}>
                  Bóng đá truyền cảm hứng cho hàng triệu đứa trẻ tại những khu ổ
                  chuột trên thế giới
                </Text>
                <Text className="title-post" style={{ fontSize: 15 }}>
                  <Icon type="clock-circle" style={{ color: 'white' }} />
                  &ensp; 06/12/2019
                  <span>&ensp;|&ensp;</span>
                  22:00
                </Text>
              </Link>
            </div>
          </Col>

          <Col span={12}>
            <Link to="/bycate/detail">
              <div
                className="post"
                style={{
                  marginLeft: 10,
                  backgroundImage: `url(${bycate01})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',

                  height: 245
                }}
              >
                <div className="info-post">
                  <Text strong className="title-post" style={{ fontSize: 18 }}>
                    Lý Hoàng Nam lần đầu tiên dành được huy chương vàng quần vợt
                    tại SEA Game
                  </Text>
                  <Text className="title-post" style={{ fontSize: 15 }}>
                    <Icon type="clock-circle" style={{ color: 'white' }} />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                </div>
              </div>
            </Link>
            <Link to="/bycate/detail">
              <div
                className="post"
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  backgroundImage: `url(${bycate02})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  height: 245
                }}
              >
                <div className="info-post">
                  <Text strong className="title-post" style={{ fontSize: 18 }}>
                    Nhứng cảm xúc của U22 Việt Nam khi hòa kịch tính U22 Thai
                    Lan
                  </Text>
                  <Text className="title-post" style={{ fontSize: 15 }}>
                    <Icon type="clock-circle" style={{ color: 'white' }} />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                </div>
              </div>
            </Link>
          </Col>
          <Col span={24}>
            <SecondListByCate data={data02} />
            <div
              style={{
                margin: '40px 0px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Button
                size="large"
                style={{ fontSize: 20, margin: '0px auto' }}
                onClick={e => this.setState({ page: this.state.page + 1 })}
              >
                Xem thêm&ensp;
                <Icon type="caret-down" />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChildList;
