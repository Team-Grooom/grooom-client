const fetch = require('node-fetch');

// result
/*
201,Created
*/

module.exports ={
  CreateUser : async(userData)=> {
    const URL = "ec2-3-34-134-199.ap-northeast-2.compute.amazonaws.com:8080/user/create";
    return await fetch(URL,{
      method : 'Post',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body : JSON.stringify(userData),
    })
    .then((res)=>res.json())
    .then((json)=>{console.log(json);return json})
    .catch((err)=>{
      console.log('에러발생했다. : '+err);
    })
  },
}