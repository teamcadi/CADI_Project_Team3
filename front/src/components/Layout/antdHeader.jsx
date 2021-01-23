/** 
 * @Author : chaeeun
 * @Date : 2021-01-24 04:37:58 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-24 04:44:36
 */

import { Link } from "react-router-dom"
import React from 'react'
import '../../css/layout.css'
import { Row, Col } from 'antd'
import styled from 'styled-components'


const HeaderWrapper = styled.div`
    top : 0;
    left : 0;
    right : 0;
    height : 4rem;

    @media (max-width: 1440px) {
    width: 1024px;
    }

@media (max-width: 1919px) {
    width: 1376px;
}
`



const antdHeader = () => {
    return (
        <>
            <HeaderWrapper>
                <Row justify="center">
                    <Col span="24">
                        <div>TeamCadieklfnlkefnleks</div>
                    </Col>
                </Row>
            </HeaderWrapper>
        </>
    )

}


export default antdHeader;