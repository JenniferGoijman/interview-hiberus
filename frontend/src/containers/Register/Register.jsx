import React from 'react';
import { Form, Input, Button } from 'antd';
import './Register.scss';
import Logo from '../../img/logo.png';

const Register = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };

    return (
        <div className="register-container">
            <div className="form">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="ACME logo"/>
                    </div>
                </div>
                <Form name="register" onFinish={onFinish}>
                    <Form.Item 
                        name="username" 
                        rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item 
                        name="email"
                        rules={[
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your E-mail!' }
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item 
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!'}]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>
                    <Form.Item 
                        name="confirm" 
                        dependencies={['password']} 
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({ validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                                },
                            })
                        ]} >
                        <Input.Password placeholder="Confirm your password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" style={{width:'100%'}}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register;