/**
 * @description login 
 * @method POST
 * @request @headers 
 * @request @body user{username(email정보) , password}
 */


import _ from "../../../config/env"
import {notification} from 'antd'

const post_login = (data)=>{
        return fetch(_.SERVER_URL + ":/api/login", {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if (!res.ok) throw res.json()
            if(res.ok){
                notification['success'].open({
                    message: 'login success',
                    description:
                    `"nickname"님 어서오세요!`,
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
        }).catch(async(error)=>{
            let err =  await error.then()
            notification['warning'].open({
                message: 'Error from post_login',
                description:
                `${err.errorName} "${err.errorCode}"`,
                onClick: () => {
                console.log('Notification Clicked!');
                },
            });
            console.log("Error from post_notice\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
    //}
    
}

export default post_login