/** 
 * @author : chaeeun 
 * @Date : 2021-02-07 14:13:27 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-07 17:31:01
 */
import React from "react"
import post_login from '../api/post/post_login'
import {notification} from "antd"

const login_process = (props)=>{
    post_login(props.loginInfo)
        .then((res)=>{
            notification['success']({
                message : '회원가입에 성공하셨습니다.',
                description : 
                    `${res.nickname}님 환영합니다✨`,
                onClick : () =>{
                    console.log('Notification Clicked!')
                }
            })
            return res;
        })
        .then ((res)=>{
            console.log(res);
            if(res){
                const { createdDate , createdTime ,emailCheckToken,modifiedDate,password,registerTime,
                    roles,
                    ...userInfo} =res;
                    props.SET_USER({user : {...userInfo}})
            }
           
        })
 }

 export default login_process;