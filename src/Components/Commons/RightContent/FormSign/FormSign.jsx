import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Icon, Typography, Input, Button } from 'antd';

const { Text } = Typography;
class FormSign extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: 'auto',
					boxShadow: 'hsla(180, 90%, 15%, 0.25) 0px 1px 6px 0px',
					padding: '10px 10px',
					margin: '20px 10px'
				}}
			>
				<Icon type="mail" style={{ fontSize: 50 }} />
				<Text style={{ textAlign: 'center' }}>
					HÃY KẾT NỐI VỚI CHÚNG TÔI ĐỂ TẬN HƯỞNG NHỮNG TÍNH NĂNG MỚI NHẤT
				</Text>
				<Input
					size="large"
					prefix={<Icon type="mail" />}
					placeholder="Điền username của bạn"
					style={{ width: '80%', padding: '10px 0px' }}
				/>

				<Button size="large" type="primary">
					Đăng ký
				</Button>
			</div>
		);
	}
}

export default FormSign;
