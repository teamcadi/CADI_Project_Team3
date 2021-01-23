//Redux
import React, { useState } from 'react'
import { Button, Divider, Row, Col } from 'antd';
import SignIn from './SignIn'
import SignUp from "./SignUp"




const Container = ({ isSignUp, handleSignUp, handleSignIn }) => {
    // signup버튼 클릭시 true
    // const [isSignUp, setIsSignUp] = useState(false)


    // const handleSignUp = () => {
    //     setIsSignUp(true)
    // }
    // const handleSignIn = () => {
    //     setIsSignUp(false)
    // }

    return (
        <>
            {
                (isSignUp) ?
                    <>
                        {/* <div className = "SignBtn" onClick={handleSignIn} > SignIn</div> */}

                        <SignUp></SignUp>
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