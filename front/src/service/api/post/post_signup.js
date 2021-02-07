import {notification} from 'antd'
import React from 'react'


/** 
 * @description sign up 
 * @method POST
 * @request @headers 
 * @request @body user{user-nickname , user-name(email정보) , password}
 */

const post_signup = (data)=>{
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "JSESSIONID=0826A04833E21DB11BDE30B188CF6191");

      return( 
          fetch("http://localhost:5000/api/sign-up", {
            method : 'POST',
            headers : myHeaders,
            body : data
          })
         .then(res=>{
          if(!res.ok) throw res.json()
           console.log(res)
           return res.json()
         })
          .catch(async(error) =>{
              let err = await error.then()
              console.log(`Error from sing-up \n ${err}`)
             console.log(err)

              err.forEach(err=>{
                notification['error']({
                  message : 'Error : 회원가입에 실패하였습니다.',
                  description : `${err}`,
                  onClick :  () =>{
                    console.log("notification OnClick")
                  }

                })
              })
              throw err;
          } )
      )
}

export default post_signup