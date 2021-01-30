import React from "react"
import Header from "../Layout/header"
import { Row, Col, Layout } from "antd";
import styled from "styled-components"
import img from "../../img/cardExample.png"

const { Content } = Layout

const TestImg = styled.div`
    height : 40rem;
    weight : 100%;
    border : 1px solid black;
    background-image: url(${img}) ;
    background-repeat: no-repeat ;
    background-size : 100% 100%;
`

const Container = () => {
    return (
        <>
            <Header></Header>
            <Row justify="center">
                <Col span="18">
                    <Content>
                        <TestImg></TestImg>
                        <div>Feed</div>
                    </Content>
                </Col>
            </Row>

        </>
    )

}

export default Container;