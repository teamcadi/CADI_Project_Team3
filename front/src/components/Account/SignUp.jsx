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
    const validateMessages = {
        required: '${label}을 입력해 주세요!',
        types: {
            email: '이메일형식이 아닙니다!'

        },
        nickname: {
            range: '닉네임 길이는 ${min} 에서 ${max}입니다!',
            pattern: '사용 할 수 없는 닉네임입니다!'
        },
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
                        pattern: /[ㄱ-ㅎ가-힣a-z0-9_-]{3,20}/,
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