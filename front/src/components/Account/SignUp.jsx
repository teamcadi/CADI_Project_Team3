import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';


const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 16,
    },
};

const Demo = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="nickname"
                name="nickname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="e-mail"
                name="e-mail"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" >
                    Sign Up
        </Button>
            </Form.Item>
        </Form>

    );
};

export default Demo;