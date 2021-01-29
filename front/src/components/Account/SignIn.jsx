import React from 'react'
import { Form, Input, Button } from 'antd';
import post_login from '../../service/api/post/post_login'



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
        const loginSet = Object.values(values);
        console.log(loginSet)
        const loginInfo = {
            username: loginSet[0],
            password: loginSet[1]
        }
        console.log(loginInfo)

        post_login(loginInfo)
            .then((res) =>
                console.log(res)
            )
            .catch((error) => console.log(error))
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
                label="e-mail"
                name="e-mail"
                rules={[
                    {
                        type: 'email',
                        message: '이메일 형식이 아닙니다!',
                    },
                    {
                        required: true,
                        message: "이메일을 입력해 주세요!"
                    }
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
                        message: '비밀번호를 입력해주세요!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" >
                    Log in
                </Button>
            </Form.Item>
        </Form>

    );
};

export default Demo;