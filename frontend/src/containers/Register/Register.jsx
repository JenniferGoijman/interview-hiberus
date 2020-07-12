import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';
import './Register.scss';

import Logo from '../../img/logo.png';
import { register } from '../../redux/actions/users'

const Register = () => {
    const history = useHistory();

    const onFinish = values => {
        const user = values;
        register(user)
        .then(res => {
            notification.success({message:'Register', description:res.data.message})
            setTimeout(() => {
                history.push('/login')
            }, 1500);
        })
        .catch((res) =>{
            notification.error({message:'Register', description:'There was a problem to register the user'})
            console.log(res)
        })
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
                        <Button htmlType="submit" ghost style={{width:'100%'}}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="form">
                Already registered? <NavLink to='/login' exact> Sign in here. </NavLink>
            </div>
        </div>
    )
}

export default Register;