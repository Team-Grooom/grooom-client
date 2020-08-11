const fetch = require('node-fetch');

module.exports ={
  ChatListFetchAPI : async()=> {
    const URL = "";
    return await fetch(URL,{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
    })
    .then((res)=>res.json)
    .then((json)=>json)
    .catch((err)=>{
      console.log('에러발생햇ㅇ앙 : '+err);
    })
  }
}