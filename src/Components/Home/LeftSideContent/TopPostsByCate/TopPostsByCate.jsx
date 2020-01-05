import React from 'react';
import 'antd/dist/antd.css';
import './TopPostsByCate.css';
import { Link } from 'react-router-dom';
import { Row, Col, List, Typography, Icon, Button, Tabs } from 'antd';
import { connect } from 'react-redux';

const { Text } = Typography;
const { TabPane } = Tabs;

class TopPostsByCate extends React.Component {
  render() {
    const { postsData } = this.props;
    const data = postsData.sort((a, b) => {
      return b.id - a.id;
    });
    const first = postsData[0];
    const secondGroup = postsData.slice(1, 5);
    return (
      <Row gutter={20}>
        <Col span={24}>
          <div
            style={{
              width: '100%',
              borderLeft: '2px solid #F5766D',
              borderBottom: '1px solid #e0e0e0',
              padding: '0px 0px 0px 10px',
              margin: '35px 20px 10px 0px',
              display: 'flex',
              flexDirection: 'row',
              position: 'relative'
            }}
          >
            <Text strong style={{ color: '#F5766D', fontSize: 20 }}>
              Tin tức đáng chú ý
            </Text>
            <div className="outstd-cate">
              {' '}
              <Link id="stt" to="#" className="outstd-cate__item">
                Tất cả
              </Link>
              <span>&ensp;|&ensp;</span>
              <Link to="#" className="outstd-cate__item">
                Xã hội
              </Link>
              <span>&ensp;|&ensp;</span>
              <Link to="#" className="outstd-cate__item">
                SEA Games 30
              </Link>
              <span>&ensp;|&ensp;</span>
              <Link to="#" className="outstd-cate__item">
                Đời sống
              </Link>
              <span>&ensp;|&ensp;</span>
              <Link to="#" className="outstd-cate__item">
                Giải trí
              </Link>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 10 }}>
          <Link>
            <img
              src={first.img}
              style={{ objectFit: 'fill', width: '100%' }}
              alt="Bài viết đáng chú ý"
            />
            <div className="info-post-out">
              <Text strong style={{ fontSize: 20 }}>
                {first.title}
              </Text>
              <Text style={{ fontSize: 15 }}>
                <Icon type="clock-circle" />
                &ensp; {first.date}
              </Text>

              <Text style={{ fontSize: 18, marginTop: 10 }}>{first.des}</Text>
            </div>
            <Button
              style={{
                marginTop: 20,
                backgroundColor: '#F5766D',
                color: 'white',
                fontSize: 16
              }}
            >
              Đọc tiếp >>
            </Button>
          </Link>
        </Col>
        {/*  */}
        <Col span={12}>
          <List
            itemLayout="vertical"
            dataSource={secondGroup}
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
                          <Text strong style={{ fontSize: 18 }}>
                            {item.title}
                          </Text>
                          <Text style={{ fontSize: 14 }}>
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
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  postsData: state.PostReducer.postsData
});

export default connect(mapStateToProps, null)(TopPostsByCate);
