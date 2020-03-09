import axios from 'axios';

const headers={
    'Accept': 'application/json',
      'Content-Type': 'application/json'
    
}
const ip = "13.127.18.137"
export default function login(emailId,password) {
   //console.log(userLoginDetails)
   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl='http://13.127.18.137:888/api/v1/workflow/login/'

   
   console.log(proxyUrl+targetUrl+emailId+'/'+password+'/')
   return fetch(proxyUrl+targetUrl+emailId+'/'+password+'/', { method: 'post',headers: {
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
export  function getUsers() {
    console.log("in getUsersMethod")
     return axios.post('http://localhost:8082/collaborator/addcollab/',null, { headers: headers });
 }
 export function getAllProducts() {
    console.log("in getUsersMethod")
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://' + ip + ':8000/api/v1/workflow/product'
    console.log(proxyUrl+targetUrl)
     return fetch(proxyUrl+targetUrl, { headers: headers });
 }
 export function getUserData() {
    
}