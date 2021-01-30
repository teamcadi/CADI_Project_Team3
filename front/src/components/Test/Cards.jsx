import styled from 'styled-components'
import React from 'react'
import { Col } from 'antd'



const CardWrapper = styled.div`
 height : 5rem;

 position: relative;
 top : ${props => (props.top)};
 left : ${props => (props.left)}
`
const CardContent = styled.div`


height : 17.5rem;
border: 3px dashed hotpink;
background-color: orange;
opacity: 0.5;
transform : rotate(${props => (props.rotate) || null} );
border-radius : 10px;

@media screen and (max-width: 1024px){
   height : 14rem;
}

@media screen and (max-width: 768px){
    height : 12rem;
}

@media screen and (max-width: 480px){
    height : 9rem;
}

    `

const Cards = ({ top, left, span, offset, rotate }) => {

    return (
        <>
            {/* <Card4></Card4> */}


            <Col span={span} offset={offset}>
                <CardWrapper top={top} left={left}>
                    <CardContent rotate={rotate}>

                    </CardContent>
                </CardWrapper>
            </Col>



        </>
    )
}




export default Cards;