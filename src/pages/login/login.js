import React from "react";
import {Button, Checkbox, Form, Input, message} from 'antd';
import {checkLogin} from "../../api/login";
import './login.css'

const layout = {
    wrapperCol: {span: 24},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '登陆',
            userName: 'admin',
            password: 'admin',
            remember: true
        }
    }

    info = (token) => {
        message.info("登陆成功，token为：" + token)
    }
    error = (msg) => {
        message.error("登陆失败，异常信息为：" + msg)
    }

    onFinish = values => {
        console.log('Success:', values);
    }

    formRef = React.createRef();

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }

    login = () => {
        this.formRef.current.validateFields().then(values => {
            checkLogin(values).then(res => {
                if (res.code === 200) {
                    this.info(res.result);
                } else {
                    this.error(res.message)
                }
            })
        })
    }


    render() {
        return (
            <div className="login-wrap">
                <Form
                    {...layout}
                    ref={this.formRef}
                    initialValues={this.state}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    className='login-container'>
                    <h3 className="title">用户登录</h3>
                    <Form.Item
                        name="userName"
                        rules={[{required: true, message: 'Please input your userName!'}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={this.login}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form></div>)
    }
}