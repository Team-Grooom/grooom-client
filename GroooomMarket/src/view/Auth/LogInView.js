import React from 'react';
import LoginTemplate from 'src/component/template/LoginTemplate';
import fetch from 'node-fetch';
import RNSInfo from 'react-native-sensitive-info';

const LogInView =({navigation})=> {
  
  //get Token from local storage
  const getToken = async () => {
    return RNSInfo.getItem('key1', {
        sharedPreferencesName: 'groomToken',
        keychainService: 'groomToken'
    });
  }

  // navigation event
  const navigateToMain =()=> {
    navigation.navigate('Main'); // 메인화면으로
  }

  // navigation event
  const navigateToBack =()=> {
    navigation.navigate('SignUp'); // 이전화면으로
  }

  // Fetch Event
  const checkAuth =async()=> {
    const token = await getToken();
    const URL = "ec2-3-34-134-199.ap-northeast-2.compute.amazonaws.com:8080/user/login";
    return await fetch(URL,{
      method : 'Post',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body : JSON.stringify(token),
    })
    .then((res)=>res.json())
    .then((json)=>{
      if(json.statusCode===200){
        return true;
      }
      else {
        return false;
      }
    })
    .catch((err)=>{
      console.log('에러발생했다. : '+err);
    })
  }

  return(
    <LoginTemplate checkAuth={checkAuth} navigateToBack={navigateToBack} navigateToMain={navigateToMain}/>
  )
}

export default LogInView;