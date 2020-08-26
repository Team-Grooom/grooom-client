import React from 'react';
import LoginTemplate from 'src/component/template/LoginTemplate';
import fetch from 'node-fetch';
import RNSInfo from 'react-native-sensitive-info';
import {StackActions} from '@react-navigation/native';

const LogInView =({navigation})=> {
  
  //get Token from local storage
  const getToken = async () => {
    return RNSInfo.getItem('groomToken', {
        sharedPreferencesName: 'groom-market',
        keychainService: 'groom-market'
    });
  }

  // navigation event
  const navigateToMain =()=> {
    navigation.dispatch(
      StackActions.replace('SignUp') // 메인화면으로
    )
  }

  // navigation event
  const navigateToSignUp =()=> {
    navigation.dispatch(
      StackActions.replace('SignUp')
    );
  }

  // Fetch Event
  const checkAuth =async()=> {
    const token = await getToken();
    const URL = `http://ec2-3-34-134-199.ap-northeast-2.compute.amazonaws.com:8080/login?token=${token}`;
    return await fetch(URL,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
    })
    .then((res)=>res.text())
    .then((text)=>{
      if(text==="success"){
        return true;
      }
      else {
        return false;
      }
    })
    .catch((err)=>{
      alert('서버 연동 실패...');
    })
  }

  return(
    <LoginTemplate checkAuth={checkAuth} navigateToSignUp={navigateToSignUp} navigateToMain={navigateToMain}/>
  )
}

export default LogInView;