//Redux
import React, { useState } from 'react'
import { Button, Divider, Row, Col } from 'antd';
import SignIn from '../../containers/Account/SignIn'
import SignUp from "../../containers/Account/SignUp"


/**
 * @param  isSignUp - signUp 버튼 클릭 시 true 
 */

const Container = ({ isSignUp, handleSignUp, handleSignIn, closeModal }) => {



    return (
        <>
            {
                (isSignUp) ?
                    <>
                        {/* <div className = "SignBtn" onClick={handleSignIn} > SignIn</div> */}

                        <SignUp closeModal={closeModal}></SignUp>
                        <Divider>Have an account?</Divider>
                        <Row justify="center">
                            <Col span="24">
                                <Button size="large" type="dashed" block onClick={handleSignIn}>Sign In</Button>
                            </Col>

                        </Row>

                    </> :
                    <>
                        {/* <div className = "SignBtn" onClick={handleSignUp} > SignUp</div> */}
                        <SignIn></SignIn>
                        <Divider>Don't have an account?</Divider>
                        <Row justify="center">
                            <Col span="24">
                                <Button size="large" type="dashed" block onClick={handleSignUp}>Sign Up</Button>
                            </Col>
                        </Row>

                    </>
            }

        </>
    )
}

export default Container