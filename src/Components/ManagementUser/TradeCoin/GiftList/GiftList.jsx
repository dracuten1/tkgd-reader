import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './GiftList.css';

import { Link, Route } from 'react-router-dom';
import { Row, Col, Typography, Card, Icon, Tabs, Radio, Button } from 'antd';
import gift01 from '../../../../Assets/gift01.png';
import gift02 from '../../../../Assets/gift02.png';
import card01 from '../../../../Assets/card01.png';
import card02 from '../../../../Assets/card02.png';
import card03 from '../../../../Assets/card03.png';

const { TabPane } = Tabs;
const { Meta } = Card;
const { Text } = Typography;

class GiftList extends Component {
  render() {
    const data = [];
    return (
      <div>
        <Tabs defaultActiveKey={1} style={{ minHeight: 500 }}>
          <TabPane tab="Chương trình khuyến mãi" key={1}>
            <Row gutter={[20, 20]}>
              <Col span={8}>
                {' '}
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={gift01}
                      style={{ objectFit: 'fill', height: 120, maxHeight: 120 }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Thông tin khuyến mãi và mã giảm giá khi mua sắm tại
                    sieuthidienmay
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Button
                    type="primary"
                    style={{ width: '50%', marginTop: 10 }}
                  >
                    Nhận ngay
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                {' '}
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={gift02}
                      style={{ objectFit: 'fill', height: 120, maxHeight: 120 }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Thông tin khuyến mãi và mã giảm giá khi mua sắm tại
                    sieuthidienmay
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Button
                    type="primary"
                    style={{ width: '50%', marginTop: 10 }}
                  >
                    Nhận ngay
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                {' '}
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={gift02}
                      style={{ objectFit: 'fill', height: 120, maxHeight: 120 }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Thông tin khuyến mãi và mã giảm giá khi mua sắm tại
                    sieuthidienmay
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Button
                    type="primary"
                    style={{ width: '50%', marginTop: 10 }}
                  >
                    Nhận ngay
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                {' '}
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={gift02}
                      style={{ objectFit: 'fill', height: 120, maxHeight: 120 }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Thông tin khuyến mãi và mã giảm giá khi mua sắm tại
                    sieuthidienmay
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Button
                    type="primary"
                    style={{ width: '50%', marginTop: 10 }}
                  >
                    Nhận ngay
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                {' '}
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={gift01}
                      style={{ objectFit: 'fill', height: 120, maxHeight: 120 }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Thông tin khuyến mãi và mã giảm giá khi mua sắm tại
                    sieuthidienmay
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Button
                    type="primary"
                    style={{ width: '50%', marginTop: 10 }}
                  >
                    Nhận ngay
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                {' '}
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={gift01}
                      style={{ objectFit: 'fill', height: 120, maxHeight: 120 }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Thông tin khuyến mãi và mã giảm giá khi mua sắm tại
                    sieuthidienmay
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Icon type="clock-circle" />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                  <Button
                    type="primary"
                    style={{ width: '50%', marginTop: 10 }}
                  >
                    Nhận ngay
                  </Button>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Thẻ cào điện thoại" key={2}>
            <Route exact path="/trade/">
              <Row gutter={[20, 20]} style={{ minHeight: 500 }}>
                <Col span={8}>
                  {' '}
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={card01}
                        style={{
                          objectFit: 'fill',
                          height: 120,
                          maxHeight: 120,
                          border: '1px solid #e0e0e0'
                        }}
                      />
                    }
                  >
                    <Text style={{ width: '100%', fontSize: 16 }}>
                      Mệnh giá:{' '}
                      <span style={{ color: 'orange' }}>20,000 vnđ</span>
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      Xu quy đổi:{' '}
                      <span style={{ color: 'orange' }}>20,000 xu</span>
                    </Text>
                    <Button
                      type="primary"
                      style={{ width: '50%', marginTop: 10 }}
                    >
                      <Link to="/trade/trade-card">Đổi ngay</Link>
                    </Button>
                  </Card>
                </Col>
                <Col span={8}>
                  {' '}
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={card02}
                        style={{
                          objectFit: 'fill',
                          height: 120,
                          maxHeight: 120,
                          border: '1px solid #e0e0e0'
                        }}
                      />
                    }
                  >
                    <Text style={{ width: '100%', fontSize: 16 }}>
                      Mệnh giá:{' '}
                      <span style={{ color: 'orange' }}>20,000 vnđ</span>
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      Xu quy đổi:{' '}
                      <span style={{ color: 'orange' }}>20,000 xu</span>
                    </Text>
                    <Button
                      type="primary"
                      style={{ width: '50%', marginTop: 10 }}
                    >
                      <Link to="/trade/trade-card">Đổi ngay</Link>
                    </Button>
                  </Card>
                </Col>
                <Col span={8}>
                  {' '}
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={card03}
                        style={{
                          objectFit: 'fill',
                          height: 120,
                          maxHeight: 120,
                          border: '1px solid #e0e0e0'
                        }}
                      />
                    }
                  >
                    <Text style={{ width: '100%', fontSize: 16 }}>
                      Mệnh giá:{' '}
                      <span style={{ color: 'orange' }}>20,000 vnđ</span>
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      Xu quy đổi:{' '}
                      <span style={{ color: 'orange' }}>20,000 xu</span>
                    </Text>
                    <Button
                      type="primary"
                      style={{ width: '50%', marginTop: 10 }}
                    >
                      <Link to="/trade/trade-card">Đổi ngay</Link>
                    </Button>
                  </Card>
                </Col>
              </Row>
            </Route>
            <Route exact path="/trade/trade-card">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Card
                  style={{ maxWidth: '35%' }}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={card03}
                      style={{
                        objectFit: 'fill',
                        height: 120,
                        maxHeight: 120,
                        border: '1px solid #e0e0e0'
                      }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Mệnh giá:{' '}
                    <span style={{ color: 'orange' }}>20,000 vnđ</span>
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Xu quy đổi:{' '}
                    <span style={{ color: 'orange' }}>20,000 xu</span>
                  </Text>
                  <Button disabled type="default" style={{ marginTop: 10 }}>
                    <Link to="/trade/trade-card" style={{ color: 'grey' }}>
                      Đang xác nhận
                    </Link>
                  </Button>
                </Card>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '35%%'
                  }}
                >
                  <Text style={{ color: 'blue', marginTop: 10 }}>
                    Bạn có thực sự muốn đổi thẻ cào này?
                  </Text>
                  <div
                    style={{
                      width: '100%',
                      marginTop: 10,
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}
                  >
                    <Button
                      type="primary"
                      style={{ position: 'absolute', right: 0 }}
                    >
                      <Link to="/trade/trade-card/confirm">Có</Link>
                    </Button>
                    <Button
                      type="default"
                      style={{
                        position: 'absolute',
                        left: 0,
                        marginRight: 20
                      }}
                    >
                      Không
                    </Button>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/trade/trade-card/confirm">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Card
                  style={{ maxWidth: '35%' }}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={card03}
                      style={{
                        objectFit: 'fill',
                        height: 120,
                        maxHeight: 120,
                        border: '1px solid #e0e0e0'
                      }}
                    />
                  }
                >
                  <Text style={{ width: '100%', fontSize: 16 }}>
                    Mã thẻ:{' '}
                    <span style={{ color: 'orange' }}>13382059694781</span>
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Số seri:{' '}
                    <span style={{ color: 'orange' }}>10051662625</span>
                  </Text>
                  <Button
                    disabled
                    type="default"
                    style={{ marginTop: 10, color: 'blue' }}
                  >
                    <Link to="/trade/trade-card">Đã đổi thành công</Link>
                  </Button>
                </Card>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '35%%'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      marginTop: 10,
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}
                  >
                    <Button type="primary" style={{ width: '100%' }}>
                      <Link to="/trade">Tiếp tục đổi quà tặng</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Route>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default GiftList;
