import React from "react"
import Header from "../Layout/header"
import { Divider, Button, Row, Col, Layout } from "antd";
import TestContainer from "../Test/TestContainer"
import styled from "styled-components"
const { Content } = Layout

const TestWrapper = styled.div`
    height : 40rem;
    border : 1px solid black;

`

const Container = () => {
    return (
        <>
            <Header></Header>
            <Row justify="center">
                <Col span="18">
                    <Content>
                        <TestWrapper>
                            <TestContainer></TestContainer>
                        </TestWrapper>
                    </Content>
                </Col>
            </Row>

        </>
    )

}

export default Container;