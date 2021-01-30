import React from 'react'
import { Form, Input, Button, } from 'antd';
import post_singup from "../../service/api/post/post_signup"

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
        const singupSet = Object.values(values);
        const signupInfo = JSON.stringify({
            "nickname": singupSet[0],
            "password": singupSet[1],
            "email": singupSet[2]
        })
        console.log(signupInfo)
        post_singup(signupInfo)
            .then((res) => {
                console.log(res)
            })
        // .catch((error) => console.log("error"))
    }

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
                        min: 3, max: 20,
                        message: "닉네임의 글자수는 3 - 20 입니다."
                    },
                    {
                        pattern: /[ㄱ-ㅎ가-힣a-z0-9_-]/,
                        message: "사용할수 없는 닉네임 형식입니다."
                    },
                    {
                        required: true,
                        message: "닉네임을 입력해 주세요!"
                    }
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="e-mail"
                name="e-mail"
                rules={[
                    {
                        type: 'email',
                        message: "이메일 형식이 아닙니다!"
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
                        min: 8, max: 50,
                        message: "비밀번호의 글자수는 8 - 50 입니다."
                    },
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    sign up
        </Button>
            </Form.Item>
        </Form>

    );
};

export default Demo;