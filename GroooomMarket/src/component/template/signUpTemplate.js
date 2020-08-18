import React,{useState} from 'react';
import { View,Text } from 'react-native';
import SignUpHeader from 'src/component/molecule/Auth/signUpHeader';
import SignUpFormBody from 'src/component/organism/signUpFormBody';

const SignUpInfo ={
  phoneNumber : '',
  location : '',
  nickname : '',
}

const SignUpTemplate =()=> {

  const [userInfo,setUserInfo] = useState(SignUpInfo);

  // When User input data 
  const onChange =(e)=> {
    const {value, name} = e.target;
    setUserInfo({
      ...userInfo,
      [name] : {value}
    })
  }

  // When User submit form data
  const submitData =()=> {
    alert("이벤트를 줘야해~");
  }

  return(
    <View>
      <SignUpHeader/>
      <SignUpFormBody onPress={submitData} onChange={onChange}/>
    </View>
  )
}

export default SignUpTemplate;