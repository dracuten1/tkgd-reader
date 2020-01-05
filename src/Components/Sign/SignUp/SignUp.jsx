import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../SignUp.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalSignUpForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Nhớ tài khoản</Checkbox>)}
          <a className="login-form-forgot" href="">
            Quên mật khẩu
          </a>
          <Button type="primary" htmlType="submit" className="form-button">
            Đăng ký
          </Button>
          <p style={{ width: '100%', textAlign: 'center' }}>Hoặc</p>
          <Button size="large" type="default" className="form-button face-btn">
            <Icon
              type="facebook"
              theme="filled"
              style={{
                fontSize: 25,
                color: 'white',
                backgroundColor: '#475993',
                border: 'none'
              }}
            />
            Đăng nhập bằng facebook
          </Button>
          <Button size="large" className="form-button gg-btn">
            <Icon type="google" style={{ fontSize: 25, color: '#EA4335' }} />
            Đăng nhập bằng google
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Signup = Form.create({ name: 'normal_signup' })(NormalSignUpForm);

export default Signup;
