import React from "react"
import { Divider, Button, Row, Col, Layout } from "antd";
import Header from "../Layout/header"

const { Content } = Layout

const Container = () => {
    return (
        <>
            <Header></Header>
            <Row justify="center">
                <Col span="18">
                    <Content style={{ padding: '2.5rem 0' }}>
                        <div>MovieList</div>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
                        <Divider />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
                        <Button type="primary">Primary Button</Button>
                        <Button type="primary">
                            Reference open
                </Button>
                        <div>MovieList</div> */}

                    </Content>
                </Col>
            </Row>


        </>
    )

}

export default Container;