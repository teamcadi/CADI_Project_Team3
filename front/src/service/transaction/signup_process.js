/** 
 * @author : chaeeun 
 * @Date : 2021-02-07 14:13:27 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-07 17:50:58
 */

import post_signup from  "../api/post/post_signup"
import {notification} from "antd"
import login_process from "./login_process"


const signup_process = (signupInfo,loginInfo) =>{
    console.log('dd')
    console.log(signupInfo)
    console.log(loginInfo)

    post_signup(signupInfo)
    .then((res)=>{
        notification['success']({
            message : '회원가입에 성공하셨습니다.',
            description : 
                `${res.nickname}님 환영합니다✨`,
            onClick : () =>{
                console.log('Notification Clicked!')
            }
        })
    })
    .then (()=>{
        login_process(loginInfo)
    })
    .catch(error => console.log(error))
}
export default signup_process;