import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Comment,
  Icon,
  Tooltip,
  Avatar,
  Form,
  List,
  Input,
  Button
} from 'antd';

const { TextArea } = Input;

class CommentForm extends Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked'
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked'
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Trả lời</span>
    ];
    return (
      <div>
        <div>
          <div
            style={{
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: 5,
              marginBottom: 10,
              fontWeight: 500
            }}
          >
            Ý kiến bạn đọc
          </div>
          <div style={{ borderBottom: '1px solid #e0e0e0', marginBottom: -5 }}>
            <Form.Item>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Gửi bình luận
              </Button>
            </Form.Item>
          </div>
          <div>
            <Comment
              actions={actions}
              author={<a>Minh Long</a>}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <p>
                  Cố gắng lên Lý Hoàng Nam! Tuổi trẻ tài cao, hi vọng bạn sẽ
                  phát huy tối đa phong độ bản thân mang về nhiều huy chương
                  vàng cho thể thao Việt Nam.
                </p>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CommentForm;
