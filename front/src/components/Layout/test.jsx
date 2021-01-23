import { Link, useHistory } from "react-router-dom"
import React from 'react'
import { Row, Col, Button, Modal } from 'antd'
import styled from 'styled-components'


const HeaderWrapper = styled.div`
    top : 0;
    left : 0;
    right : 0;
    height : 4rem;

`
const Logo = styled.div`
font-size: 1.5rem;
height: 4rem;
display: flex;
  justify-content: center;
  align-items: center;
  color: #383838;
  font-family: 'JetBrains Mono';

`
const NavList = styled.div`
height : 4rem;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
font-family: 'JetBrains Mono';
cursor : pointer;
`

const LoginBtn = styled.div`
height : 4rem;
display : flex;
justify-content: center;
align-items: center;
`
const Test = () => {
    const history = useHistory()
    return (
        <>
            <HeaderWrapper>
                <Row justify="center">
                    <Col span="20">
                        <Row justify="space-between">
                            <Col span={3}>
                                <Logo>Team 3</Logo>
                            </Col>
                            <Col span={12}>
                                <Row justify="space-around">
                                    <Col span={6}>
                                        <Link to='/Feed'>
                                            <NavList>Feed</NavList>
                                        </Link>
                                    </Col>
                                    <Col span={6}>
                                        <Link to='/'>
                                            <NavList>MovieList</NavList>
                                        </Link>
                                    </Col>

                                    <Col span={6}>
                                        <Link to='/Mypage'>
                                            <NavList>My page</NavList>
                                        </Link>
                                    </Col>
                                </Row>

                            </Col>
                            <Col span={4}>
                                <LoginBtn>
                                    <Button size="large" type="primary" shape="round">Login</Button>
                                </LoginBtn>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </HeaderWrapper>
        </>


    )

}

export default Test;