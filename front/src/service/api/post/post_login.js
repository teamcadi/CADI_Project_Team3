
import _ from "../../../config/env"

/**
 * @description login 
 * @method POST
 * @request @headers 
 * @request @body user{username(email정보) , password}
 */
const post_login = (data)=>{
        return fetch(_.SERVER_URL + ":/api/login", {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if (!res.ok) throw res.json()
    
        }).catch(async(error)=>{
            let err =  await error.then()
            console.log("Error from post_notice\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
    //}
    
}

export default post_login