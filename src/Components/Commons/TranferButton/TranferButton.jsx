import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Button, Icon } from 'antd';

class TranferButton extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 'auto',
          position: 'absolute',
          right: 0
        }}
      >
        <Button>
          <Icon type="left" />
        </Button>
        <Button>
          <Icon type="right" />
        </Button>
      </div>
    );
  }
}
export default TranferButton;
