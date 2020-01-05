import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './TopTags.css';

import { Link } from 'react-router-dom';
import { Typography, Tag } from 'antd';

const { Text } = Typography;
class TopTags extends Component {
  render() {
    const dataTag = [
      'SEA Games 30',
      'U22 Việt Nam',
      'Bà Tân Vlog',
      'Đào Tết',
      'U22 Thai Lan',
      'Phillip',
      'ESport',
      'Ánh Viên',
      'Chelsea',
      'UEA Champion'
    ];
    return (
      <div>
        <div
          style={{
            width: '100%',
            borderLeft: '2px solid #DD3535',
            borderBottom: '1px solid #e0e0e0',
            padding: '0px 10px 0px 10px',
            margin: '30px 0px 10px 0px',

            position: 'relative'
          }}
        >
          <Text strong style={{ color: '#DD3535', fontSize: 20 }}>
            Từ khóa hot nhất
          </Text>
        </div>
        <div>
          {dataTag.map(item => (
            <Tag
              className="tag"
              style={{
                fontSize: 16,
                margin: 5,
                height: '25px',
                lineHeight: '25px'
              }}
            >
              <Link to="#" className="tag">
                {item}
              </Link>
            </Tag>
          ))}
        </div>
      </div>
    );
  }
}
export default TopTags;
