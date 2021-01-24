import React from "react"
import Header from "../Layout/header"
import { Divider, Button, Row, Col, Layout } from "antd";

const { Content } = Layout

const Container = () => {
    return (
        <>
            <Header></Header>
            <Row justify="center">
                <Col span="18">
                    <Content style={{ padding: '2.5rem 0' }}>
                        <div>Mypage</div>
                    </Content>
                </Col>
            </Row>

        </>
    )

}

export default Container;