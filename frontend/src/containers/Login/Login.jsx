import React from 'react';
import { Form, Input, Button } from 'antd';
import './Login.scss';
import Logo from '../../img/logo.png';

const Login = () => {
    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="login-container">
            <div className="form">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="ACME logo"/>
                    </div>
                </div>
                <Form name="login" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item name="username" style={{width:'100%'}}
                        rules={[{ required: true, message: 'Please input your username!' }]} >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" style={{width:'100%'}}
                        rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" style={{width:'100%'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;