import React,{useState} from 'react';
import {TextInput,Button} from 'react-native';

const SignIn =()=> {
  const [userid,setUserid] = useState();
  const [pwd,setPwd] = useState();

  return(
    <View>
      <TextInput
        placeholder="아이디를 입력하세요."
        value={userid}
        onChangeText={setUserid}
      />
      <TextInput
        placeholder="비밀번호를 입력하세요."
        value={pwd}
        onChangeText={setPwd}
      />
      <Button title="로그인" onPress={}/>
    </View>
  )
}

export default SignIn;