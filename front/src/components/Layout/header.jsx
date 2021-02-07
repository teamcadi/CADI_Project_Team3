/** 
 * @Author : chaeeun
 * @Date : 2021-01-21 05:09:32 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-02 11:24:01
 */
import { Link } from "react-router-dom"
import { React, useState } from 'react'
import { Row, Col, Button, Modal } from 'antd'
import styled from 'styled-components'
import Account from '../Account/Container'


const HeaderWrapper = styled.div`
    top : 0;
    left : 0;
    right : 0;
    height : 5rem;
    margin-bottom : 1.5rem ;
`
const Logo = styled.div`
font-size: 1.5rem;
height: 5rem;
display: flex;
  justify-content: start;
  align-items: center;
  color: #383838;
  font-family: 'JetBrains Mono';

`
const NavList = styled.div`
height : 5rem;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
font-family: 'JetBrains Mono';
cursor : pointer;
`

const LoginBtn = styled.div`
height : 5rem;
display : flex;
justify-content: flex-end;
align-items: center;
`
const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const [isSignUp, setIsSignUp] = useState(false)


    const handleSignUp = () => {
        setIsSignUp(true)
    }
    const handleSignIn = () => {
        setIsSignUp(false)
    }

    return (
        <>
            <HeaderWrapper>
                <Row justify="center">
                    <Col span="18">
                        <Row justify="space-between">
                            <Col span={3}>
                                <Logo>Team 3</Logo>
                            </Col>
                            <Col span={12}>
                                <Row justify="space-around">
                                    <Col span={6}>
                                        <Link to='/feed'>
                                            <NavList>Feed</NavList>
                                        </Link>
                                    </Col>
                                    <Col span={6}>
                                        <Link to='/'>
                                            <NavList>MovieList</NavList>
                                        </Link>
                                    </Col>

                                    <Col span={6}>
                                        <Link to='/mypage'>
                                            <NavList>My page</NavList>
                                        </Link>
                                    </Col>
                                </Row>

                            </Col>
                            <Col span={4}>
                                <LoginBtn>
                                    <Button size="large" type="primary" shape="round" onClick={showModal}>Login</Button>
                                </LoginBtn>
                                <Modal title={isSignUp ? "회원가입이 필요합니다.🎯" : "로그인이 필요합니다.🎯"} visible={isModalVisible} onCancel={closeModal}
                                    footer={null} destroyOnClose={true} maskClosable={false}>
                                    <Account isSignUp={isSignUp} handleSignUp={handleSignUp} handleSignIn={handleSignIn} closeModal={closeModal}></Account>
                                </Modal>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </HeaderWrapper>
        </>


    )

}

export default Header;