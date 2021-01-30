import React from "react"
import Cards from "./Cards"
import { Row, Col } from "antd"

// 10deg


const CardGroup = () => {
    return (
        <>
            <Row>
                <Cards top="7rem" rotate="-10deg" span={4} offset={10}></Cards>
                <Cards top="5rem" rotate="10deg" span={4} offset={2}></Cards>

                <Cards top="0" rotate="-10deg" span={4} offset={9}></Cards>
                <Cards top="0" rotate="10deg" span={4} offset={1}></Cards>
            </Row>
        </>
    )
}

export default CardGroup;