const fetch = require('node-fetch');

module.exports ={
  ChatListFetchAPI : async()=> {
    const URL = "https://hanium.run.goorm.io/list";
    return await fetch(URL,{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
    })
    .then((res)=>res.json())
    .then((json)=>{console.log(json);return json})
    .catch((err)=>{
      console.log('에러발생했다. : '+err);
    })
  }
}