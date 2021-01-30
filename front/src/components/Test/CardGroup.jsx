import React from "react"
import CardTest from "./CardTest"
import { Row, Col } from "antd"
import Cards from "./Cards"
// 10deg

//24넘으면 내려감 
//3 * 4  = 12
// 12 

/**
 * 4
 * 5
 * 2
 */
const CardGroup = () => {
    return (
        <>

            <Row>
                <Cards span={4} offset={4} top="55px"></Cards>
                <Cards span={4} offset={7} top="70px" rotate={"-7deg"}></Cards>
                <Cards span={4} offset={2} top="50px" rotate={"15deg"}></Cards>
                <Cards span={4} offset={2} top="55px" rotate={"-15deg"}></Cards>
                <Cards span={4} offset={0} top="30px" left="-1rem" rotate={"0"}></Cards>
                <Cards span={4} offset={5} top="140px" rotate={"-30deg"}></Cards>
                <Cards span={4} offset={8} top="70px" rotate={"10deg"}></Cards>
                <Cards span={4} offset={12} top="70px" rotate={"20deg"}></Cards>

            </Row>
        </>
    )
}

export default CardGroup;