import React from 'react';
import SignUpTemplate from 'src/component/template/signUpTemplate';
// TODO: navigation props handle, fetch api to 혁상 API, get seoul JSON Dummy
const AuthFetch = require('src/api/AuthFetch');

const onPressSubmitBtn =async(state)=> {
  console.log(state); // State 유지가 되는지 확인
  const result = await AuthFetch.CreateUser(state);
  if(result){
    console.log(result);
  }else{
    console.log('통신 조차 실패햇당!!');
  }
}



const SignUpView =()=> {
  return(
    <SignUpTemplate onPress={onPressSubmitBtn}/>
  )
}

export default SignUpView;