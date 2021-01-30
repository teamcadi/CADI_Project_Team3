import styled from 'styled-components'
import React from 'react'
import { Row, Col } from 'antd'



const Card4 = styled.div`
width: 13.75rem;
height: 17.5rem;
text-align: center;
border: 3px dashed hotpink;
background-color: blue;
position: absolute;
top: 8.125rem;
left: 36.25rem;
z-index: 7;
opacity: 0.5;
transform: rotate( -10deg );
border-radius : 10px;
`

const CardAnt = styled.div`
height : 17.5rem;
border: 3px dashed hotpink;
background-color: orange;
transform: rotate( -10deg );
border-radius : 10px;
`

const CardWrapper = styled.div`
 height : 17.5rem;
 top : ${props => (props.top)};
 position: relative;
 border: 3px dashed hotpink;
 background-color: orange;
 opacity: 0.5;
 transform : rotate(${props => (props.rotate) || '8deg'} );
 border-radius : 10px;
`
const CardContent = styled.div`

    `

const Cards = ({ top, span, offset, rotate }) => {

    return (
        <>
            {/* <Card4></Card4> */}


            <Col span={span} offset={offset}>
                <CardWrapper rotate={rotate} top={top}>
                    <CardContent>

                    </CardContent>
                </CardWrapper>
            </Col>



        </>
    )
}




export default Cards;