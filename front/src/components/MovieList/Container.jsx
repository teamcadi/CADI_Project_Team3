import React from "react"
import { Row, Col, Layout } from "antd";
import Header from "../Layout/header"
import styled from "styled-components"


const { Content } = Layout



const Container = () => {
    return (
        <>
            <Header></Header>
            <Row justify="center">
                <Col span="18">
                    <Content >
                        <div>MovieList</div>

                    </Content>
                </Col>
            </Row>


        </>
    )

}

export default Container;