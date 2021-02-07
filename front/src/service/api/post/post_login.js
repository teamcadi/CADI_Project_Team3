/**
 * @description login 
 * @method POST
 * @request @headers 
 * @request @body user{username(email정보) , password}
 */


import _ from "../../../config/env"
import {notification} from 'antd'

const post_login = (loginInfo)=>{

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "JSESSIONID=D10CBF580D06DDC8698E162FBFF5EF28");
    myHeaders.append("Access-Control-Allow-Origin", "*");
  

    let data =  new URLSearchParams();
    data.append("username",`"${loginInfo.username}"`);
    data.append("password",`"${loginInfo.password}"`);
    console.log(loginInfo)
    console.log(`"${loginInfo.username}"`)
    console.log(`"${loginInfo.password}"`)
    console.log("body dataa")
    console.log(data);
        return fetch(_.SERVER_URL + "/api/login", {
            method: 'POST',
            headers: myHeaders,
            body:data,
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if (!res.ok) throw res.json()
            return res.json()
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