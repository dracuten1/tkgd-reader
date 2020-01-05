import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Row, Col, Typography, List, Icon } from 'antd';

const { Text } = Typography;
class SecondListByCate extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <div
          style={{
            width: '100%',
            borderLeft: '2px solid #DD3535',
            borderBottom: '1px solid #e0e0e0',
            padding: '0px 0px 0px 10px',
            margin: '30px 20px 10px 0px',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
          }}
        >
          <Text strong style={{ color: '#DD3535', fontSize: 22 }}>
            Tin tức mới nhất
          </Text>
        </div>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="side-post">
                <Row gutter={10}>
                  <Col span={8}>
                    {' '}
                    <img
                      src={item.img}
                      className="img-side-post"
                      height={160}
                      style={{ objectFit: 'fill', width: '100%' }}
                    ></img>
                  </Col>
                  <Col span={16}>
                    <div className="info-side-post">
                      <Text strong style={{ fontSize: 18 }}>
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: 16 }}>
                        <Icon type="clock-circle" />
                        &ensp; {item.date}
                      </Text>
                      <Text style={{ marginTop: 10, fontSize: 16 }}>
                        {item.des}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default SecondListByCate;
