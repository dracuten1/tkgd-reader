import React from 'react';
import OutstandingPosts from './OutstandingPosts/OutstandingPosts';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import LeftSideContent from './LeftSideContent/LeftSideContent';
import RightContent from '../Commons/RightContent/RightContent';

class Home extends React.Component {
  render() {
    return (
      <div>
        <OutstandingPosts />
        {/* Mid content */}
        <div style={{ width: '100%' }}>
          <Row gutter={30}>
            <Col span={16}>
              <LeftSideContent />
            </Col>
            <Col span={8}>
              <RightContent />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
