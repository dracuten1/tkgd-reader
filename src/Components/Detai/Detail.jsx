import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Link } from 'react-router-dom';
import { Typography, Button, Icon, Breadcrumb, Tag } from 'antd';

import im01 from '../../Assets/detail01.png';
import im02 from '../../Assets/detail02.png';
import Comment from './Comment/Comment';
import CommentForm from './Comment/Comment';
import RelatedPostList from './RelatedPostList/RelatedPostList';
const { Text } = Typography;

class Detail extends Component {
  render() {
    const dataTag = [
      'Lý Hoàng Nam',
      'SEA Games 30',
      'HCV',
      'Thể thao Việt Nam'
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Breadcrumb style={{ margin: '20px 0px' }}>
          <Breadcrumb.Item>
            {' '}
            <Link to="/home">
              <Icon type="home"></Icon>&ensp;Trang chủ
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/bycate">Thể thao</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Lý Hoàng Nam lần đầu tiên dành HCV tại SEA Games
          </Breadcrumb.Item>
        </Breadcrumb>

        <div
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Text strong style={{ fontSize: 20, color: 'black' }}>
            Lý Hoàng Nam lần đầu tiên dành huy chương vàng môn quần vợt tại SEA
            Games 30
          </Text>

          <Text strong style={{ margin: '20px 0px' }}>
            Vũ Bùi&ensp;<span>đăng lúc 10:00 | 07/12/2019</span>&nbsp;-&nbsp;SEA
            Games 30
          </Text>
          <Text style={{ fontSize: 16 }}>
            Trong trận chung kết đơn nam, Lý Hoàng Nam giành chiến thắng với tỷ
            số 6-2, 6-4 trước đồng đội Daniel Cao Nguyễn, qua đó đem về tấm HCV
            lịch sử cho quần vợt Việt Nam.
          </Text>
          <img
            style={{ width: '100%', objectFit: 'fill', margin: '10px 0px' }}
            src={im01}
          ></img>

          <Text style={{ fontSize: 16 }}>
            Lúc 9h, Lý Hoàng Nam sẽ đối đầu với Daniel Nguyễn tại chung kết đơn
            nam môn quần vợt. Cùng lúc đó trên sân bên cạnh, Savanna Lý Nguyễn
            sẽ đối đầu với hạt giống số 2 người Indonesia ở chung kết đơn nữ.{' '}
          </Text>
          <img
            style={{ width: '100%', objectFit: 'fill', margin: '10px 0px' }}
            src={im02}
          ></img>
          <Text style={{ fontSize: 16 }}>
            Trong trận chung kết đơn nam, Lý Hoàng Nam giành chiến thắng với tỷ
            số 6-2, 6-4 trước đồng đội Daniel Cao Nguyễn, qua đó đem về tấm HCV
            lịch sử cho quần vợt Việt Nam. Hai năm trước, Hoàng Nam chỉ có được
            tấm HCĐ ở nôi dung này. Ảnh: Thuận Thắng.
          </Text>

          <div
            style={{
              margin: '20px 0px',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Button
              type="default"
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none'
              }}
            >
              <Icon type="tags"></Icon>&nbsp;Từ khóa:
            </Button>
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
          <CommentForm />
        </div>
        <RelatedPostList />
      </div>
    );
  }
}
export default Detail;
