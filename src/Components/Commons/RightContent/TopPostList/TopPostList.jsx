import React, { Component } from 'react';
import './TopPostList.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Row, Col, Tabs, List, Typography, Icon } from 'antd';
import rightside from '../../../../Assets/rightside01.png';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
const { Text } = Typography;

class TopPostList extends Component {
  render() {
    const data = this.props.dataPost;
    const dataNewest = data
      .filter(item => item.vip !== 1)
      .sort(function(a, b) {
        return b.id - a.id;
      })
      .slice(0, 5);
    const dataViewest = data
      .filter(item => item.vip !== 1)
      .sort(function(a, b) {
        return b.view - a.view;
      })
      .sort(function(a, b) {
        return a.id - b.id;
      })
      .slice(0, 5);
    return (
      <div>
        <Tabs defaultActiveKey="1" style={{ marginTop: 17, marginLeft: 10 }}>
          <TabPane tab="Mới nhất" key="1">
            <List
              itemLayout="vertical"
              dataSource={dataNewest}
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
                            height={100}
                            style={{ objectFit: 'fill', width: '100%' }}
                          ></img>
                        </Col>
                        <Col span={16}>
                          <div className="info-side-post">
                            <Text strong style={{ fontSize: 17 }}>
                              {item.title}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                              <Icon type="clock-circle" />
                              &ensp; {item.date}
                            </Text>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Đọc nhiều nhất" key="2">
            <List
              itemLayout="vertical"
              dataSource={dataViewest}
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
                            height={90}
                            style={{ objectFit: 'fill', width: '100%' }}
                          ></img>
                        </Col>
                        <Col span={16}>
                          <div className="info-side-post">
                            <Text strong style={{ fontSize: 17 }}>
                              {item.title}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                              <Icon type="clock-circle" />
                              &ensp;{item.date}
                            </Text>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataPost: state.PostReducer.postsData,
    isLogin: state.LoginReducer.isLogin
  };
};
export default connect(mapStateToProps)(TopPostList);
