import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Footer.css';
import { Link } from 'react-router-dom';

import { Row, Col, Typography, Button, Icon } from 'antd';

const { Text } = Typography;
class FooterCustom extends Component {
  render() {
    return (
      <Row style={{ backgroundColor: '#343539' }}>
        <Col span={3}></Col>
        <Col span={18}>
          <Row style={{ backgroundColor: '#343539', padding: '30px 20px' }}>
            <Col span={14} style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  paddingLeft: 20,
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <Text strong style={{ color: 'white', fontSize: 15 }}>
                  ĐÓNG GÓP NỘI DUNG
                </Text>
                <div style={{ padding: '10px 0px' }}>
                  <Button
                    size="large"
                    style={{
                      backgroundColor: '#2691D9',
                      color: 'white',
                      fontSize: 15,
                      border: 0,
                      marginRight: 18
                    }}
                  >
                    <Icon type="mail"></Icon>
                    Gửi bài viết
                  </Button>
                  <Text
                    style={{ marginRight: 18, color: 'white', fontSize: 15 }}
                  >
                    Hoặc liên hệ
                  </Text>
                  <Link to="#" style={{ fontSize: 16 }}>
                    bandocbaongaymoi@gmail.com
                  </Link>
                </div>
                <Text strong style={{ color: 'white', fontSize: 15 }}>
                  BaoNgayMoi.com rất hoan nghênh độc giả đóng góp những tin tức
                  mới nhất cho chúng tôi
                </Text>
              </div>

              <div
                style={{ display: 'flex', flexDirection: 'row', marginTop: 18 }}
              >
                <div className="item-footer" style={{ marginRight: 30 }}>
                  <Text
                    strong
                    style={{ fontSize: 15, color: 'white', marginBottom: 10 }}
                  >
                    HỢP TÁC TRUYỀN THÔNG
                  </Text>
                  <Text style={{ fontSize: 16, color: 'white' }}>
                    <Icon type="phone" />
                    &ensp;&ensp; 0222.123.456
                  </Text>
                  <Text style={{ fontSize: 16, color: 'white' }}>
                    <Icon type="mail" />
                    &ensp;&ensp; baongaymoi@gmail.com
                  </Text>
                </div>
                <div className="item-footer">
                  <Text
                    strong
                    style={{ fontSize: 15, color: 'white', marginBottom: 10 }}
                  >
                    QUẢNG CÁO
                  </Text>
                  <Text style={{ fontSize: 16, color: 'white' }}>
                    <Icon type="phone" />
                    &ensp;&ensp; 0222.123.456
                  </Text>
                  <Text style={{ fontSize: 16, color: 'white' }}>
                    <Icon type="mail" />
                    &ensp;&ensp; baongaymoi@gmail.com
                  </Text>
                </div>
              </div>
            </Col>
            <Col span={1}>&ensp;</Col>
            <Col span={9} style={{ display: 'flex', flexDirection: 'column' }}>
              <Text
                strong
                style={{ fontSize: 15, color: 'white', marginBottom: 20 }}
              >
                ĐỊA CHỈ TRỤ SỞ
              </Text>
              <Text style={{ fontSize: 16, color: 'white' }}>
                <Icon type="pushpin" />
                &ensp;&ensp; 123 đường 3/2, phường 14, quận 10, TP Hồ Chí Minh
              </Text>
              <Text style={{ fontSize: 16, color: 'white' }}>
                <Icon type="phone" />
                &ensp;&ensp; 0222.123.456
              </Text>
              <Text style={{ fontSize: 16, color: 'white' }}>
                <Icon type="mail" />
                &ensp;&ensp; baongaymoi@gmail.com
              </Text>
              <Text style={{ fontSize: 16, color: 'white' }}>
                <Icon type="environment" />
                &ensp;&ensp; Xem bản đồ
              </Text>
            </Col>
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
    );
  }
}
export default FooterCustom;
