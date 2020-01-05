import React, { Component } from 'react';
import { Tabs } from 'antd';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';

const { TabPane } = Tabs;
class Sign extends Component {
	render() {
		return (
			<div>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Đăng nhập" key="1">
						<Login />
					</TabPane>
					<TabPane tab="Đăng ký" key="2">
						<Signup />
					</TabPane>
				</Tabs>
			</div>
		);
	}
}
export default Sign;
