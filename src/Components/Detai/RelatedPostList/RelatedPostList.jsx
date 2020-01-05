import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Row, Col, Tabs, List, Typography, Icon, Button } from 'antd';

import relate01 from '../../../Assets/related01.png';
import TranferButton from '../../Commons/TranferButton/TranferButton';
const { Text } = Typography;
class RelatedPostList extends Component {
  render() {
    const data = [
      'Thạch Kim Tuấn đem lại vinh quang cho cử tạ Việt Nam',
      '4 cầu thủ còn lại từ SEA Games 29 thay đổi ra sao sau 2 năm',
      'U22 Campuchia tập kín trước bán kết SEA Games 30'
    ];
    return (
      <div>
        <div
          style={{
            width: '100%',
            borderLeft: '2px solid #DD3535',
            borderBottom: '1px solid #e0e0e0',
            padding: '0px 0px 10px 10px',
            margin: '30px 20px 50px 0px',

            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
          }}
        >
          <Text strong style={{ color: '#DD3535', fontSize: 20 }}>
            Tin tức liên quan
          </Text>
          <TranferButton />
        </div>
        <Row gutter={[20]} style={{ marginBottom: 30 }}>
          {data.map(item => (
            <Col span={8}>
              <Link to="/bycate/detail">
                <img
                  src={relate01}
                  className="img-side-post"
                  height={150}
                  style={{ objectFit: 'fill', width: '100%' }}
                ></img>
                <div className="info-side-post">
                  <Text strong style={{ fontSize: 16 }}>
                    {item}
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Text style={{ marginTop: 10, fontSize: 16 }}>
                    {item.des}
                  </Text>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default RelatedPostList;
