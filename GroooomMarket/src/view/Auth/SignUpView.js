import React,{useState} from 'react';
import SignUpTemplate from 'src/component/template/signUpTemplate';
import fetch from 'node-fetch';
import SInfo from 'react-native-sensitive-info';
import styled from 'styled-components';
// TODO: navigation props handle, fetch api to 혁상 API, get seoul JSON Dummy

const SignUpBackground = styled.View`
  background-color : white;
`;

const SignUpView =()=> {

  const [fetchResult,setFetchResult] = useState();

  // Save Local Encrypt Storage
  const saveTokenAtDevice = async () => {
    return SInfo.setItem('token', 'value', {
        sharedPreferencesName: 'groomToken',
        keychainService: 'groomToken'
    });
  }

  // Fetch Event
  const createUser =async(userData)=> {
    const URL = "ec2-3-34-134-199.ap-northeast-2.compute.amazonaws.com:8080/user/create";
    return await fetch(URL,{
      method : 'Post',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body : JSON.stringify(userData),
    })
    .then((res)=>res.json())
    .then((json)=>{setFetchResult(json)})
    .catch((err)=>{
      console.log('에러발생했다. : '+err);
    })
  }

  // Submit Button Click Event => Fetch API 사용
  const onPressSubmitBtn =async(state)=> {
    await createUser(state);
    // TODO: make difference navigation event by Code

    // 200
    if(fetchResult.code===200){
      await saveTokenAtDevice(result);
      alert("회원이 되신걸 축하해요!");
    }else{
      alert("오류 발생,")
    }
  }

  return(
    <SignUpBackground>
      <SignUpTemplate onPress={onPressSubmitBtn}/>
    </SignUpBackground>
  )
}

export default SignUpView;