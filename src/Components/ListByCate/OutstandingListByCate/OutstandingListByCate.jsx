import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Tabs, Typography } from 'antd';

import ChildList from './ChildList';
import { connect } from 'react-redux';

const { TabPane } = Tabs;
const { Text } = Typography;

class OutstandingListByCate extends Component {
  render() {
    const { postsData } = this.props;

    return (
      <div>
        <Tabs defaultActiveKey="1" style={{ marginTop: 5, fontSize: '18px' }}>
          <TabPane tab="Thể thao Việt Nam" key="1" style={{ fontSize: '18px' }}>
            <ChildList data={postsData} />
          </TabPane>
          <TabPane tab="Thể thao quốc tế" key="2">
            <ChildList data={postsData} />
          </TabPane>
          <TabPane tab="SEA Games 30" key="3">
            <ChildList data={postsData} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postsData: state.PostReducer.postsData
});

export default connect(mapStateToProps)(OutstandingListByCate);
