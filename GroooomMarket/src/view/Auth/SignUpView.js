import React from 'react';
import SignUpTemplate from 'src/component/template/signUpTemplate';
import SInfo from 'react-native-sensitive-info';
import styled from 'styled-components';
const fetch = require('node-fetch');
// TODO: navigation props handle, fetch api to 혁상 API, get seoul JSON Dummy

const SignUpBackground = styled.View`
  background-color : white;
`;

const SignUpView =({navigation})=> {

  // Save Local Encrypt Storage
  const saveTokenAtDevice = async (token) => {
    return SInfo.setItem('groomToken', token, {
        sharedPreferencesName: 'groom-market',
        keychainService: 'groom-market'
    });
  }

  // Fetch Event
  const createUser =async(userData)=> {
    const URL = "http://ec2-3-34-134-199.ap-northeast-2.compute.amazonaws.com:8080/user/create";
    console.log(JSON.stringify(userData));
    return await fetch(URL,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(userData),
    })
    .then((res)=>res.json())
    .then((json)=>{
      if(json.token){
        saveTokenAtDevice(json.token); 
        return true;
      }
      else {
        alert("서버 에러 발생! 다시 시도 하세용~"); return false;
      }
    })
    .catch((err)=>{
      console.log('에러발생했다. : '+err);
    })
  }

  // Submit Button Click Event => Fetch API 사용
  const onPressSubmitBtn =async(userState)=> {
    const SuccessFlag = await createUser(userState);
    if(SuccessFlag){
      alert("회원이 되신걸 축하해요!");
      navigation.navigate('Login'); // 로그인 로더로 이동
    }else{
      alert("오류 발생");
    }
  }

  return(
    <SignUpBackground>
      <SignUpTemplate onPress={onPressSubmitBtn}/>
    </SignUpBackground>
  )
}

export default SignUpView;