import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Row, Col, Tabs, List, Typography, Icon, Button } from 'antd';
import rightside from '../../../../Assets/rightside01.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const { Text } = Typography;

class MultiPostList extends Component {
  state = { page: 1 };
  render() {
    const { postsData } = this.props;
    const data = postsData.slice(0, 5 * this.state.page);
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
          <Text strong style={{ color: '#DD3535', fontSize: 20 }}>
            Tin tức tổng hợp
          </Text>
        </div>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Link>
                <div className="side-post">
                  <Row gutter={10}>
                    <Col span={8}>
                      {' '}
                      <img
                        src={item.img}
                        className="img-side-post"
                        height={180}
                        style={{ objectFit: 'fill', width: '100%' }}
                      ></img>
                    </Col>
                    <Col span={16}>
                      <div className="info-side-post">
                        <Text strong style={{ fontSize: 18 }}>
                          {item.title}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
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
              </Link>
            </List.Item>
          )}
        />
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
            style={{ fontSize: 18, margin: '0px auto' }}
            onClick={e => {
              this.setState({ page: this.state.page + 1 });
            }}
          >
            Xem thêm&ensp;
            <Icon type="caret-down" />
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  postsData: state.PostReducer.postsData
});
export default connect(mapStateToProps, null)(MultiPostList);
