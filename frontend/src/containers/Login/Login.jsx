import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';
import './Login.scss';

import Logo from '../../img/logo.png';
import { login } from '../../redux/actions/users';

const Login = () => {
    const history = useHistory();

    const onFinish = values => {
        const user = values;
        login(user)
        .then(res => {
            history.push('/movies');
        })
        .catch((res) =>{
            notification.error({message:'Login', description:'There was a problem trying to log in.'})
        })
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
                    <Form.Item name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]} >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" ghost style={{width:'100%'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="form">
                Don't have an account yet? <NavLink to='/register' exact> Register here. </NavLink>
            </div>
        </div>
    )
}

export default Login;