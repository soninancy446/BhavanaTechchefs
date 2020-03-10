import React from 'react'
import axios from 'axios'
export const ServiceNew = () => {
    return (
        <div>
            
        </div>
    )
}

const headers={
      'Content-Type': 'application/json',
      'token' : sessionStorage.getItem('token')
    
}
const ip = "3.7.15.3"
export  function login(emailId,password) {
   console.log(emailId,password)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl='http://3.7.15.3:888/api/v1/workflow/login/'

   
   console.log(proxyUrl+targetUrl+emailId+'/'+password+'/')
   return fetch(proxyUrl+targetUrl+emailId+'/'+password+'/', { headers: {
    "Content-Type": "application/json"
  } });
}
export function addUser(username,email,password,roleid,checkedItems) {
    console.log("in getUsersMethod")
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://13.127.18.137:888/api/v1/workflow/createuser/'
    console.log(proxyUrl+targetUrl)
     return fetch(proxyUrl+targetUrl, { method : 'post' ,headers: headers,
     body: JSON.stringify({

        username: username,

            email: email,

            password: password,

            role_id: roleid,

            product_id_list: checkedItems,

            token: ''
      })
     });
 }

//  export function getAllProducts() {
//     console.log("in getUsersMethod")
//     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'http://' + ip + ':8000/api/v1/workflow/product'
//     console.log(proxyUrl+targetUrl)
//      return fetch(proxyUrl+targetUrl, { headers: headers });
//  }

export function handlegetProducts() {
    console.log("head",headers)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl = 'http://3.7.15.3:888/api/v1/workflow/product/'
   console.log("token---->",sessionStorage.getItem("token"))
   const savedtoken=sessionStorage.getItem("token")
   return fetch(proxyUrl+targetUrl, { headers : {
       'Content-Type': 'application/json',
       'Authorization': savedtoken
   } });
// http --json POST   http://13.127.18.137:888/api/v1/workflow/productcount/ 'Authorization: JWT $token 

}
 

 export function getAllProducts() {
    console.log("in getUsersMethod")
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://' + ip + ':8000/api/v1/workflow/product'
    console.log(proxyUrl+targetUrl)
     return fetch(proxyUrl+targetUrl, { headers: headers });
 }
 export function getProductCount() {
     console.log("head",headers)
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://3.7.15.3:888/api/v1/workflow/product/'
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    return fetch(proxyUrl+targetUrl, { headers : {
        'Content-Type': 'application/json',
        'Authorization' : savedtoken
    } });
}
export function getBuildsCount() {
    console.log("head",headers)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl = 'http://3.7.15.3:888/api/v1/workflow/getallbuildscount/'
   return fetch(proxyUrl+targetUrl, { headers : headers });

}
export function getAllProductsCount() {
    console.log("head",headers)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl = 'http://3.7.15.3:888/api/v1/workflow/productcount/'
  return fetch(proxyUrl+targetUrl, { headers : headers });

}
export function getApproveBuildsCount() {
    console.log("head",headers)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl = 'http://3.7.15.3:888/api/v1/workflow/approvedcount/'
  return fetch(proxyUrl+targetUrl, { headers : headers });

}
export function getRejectedBuildsCount() {
    console.log("head",headers)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl = 'http://3.7.15.3:888/api/v1/workflow/rejectedcount/'
  return fetch(proxyUrl+targetUrl, { headers : headers });

}