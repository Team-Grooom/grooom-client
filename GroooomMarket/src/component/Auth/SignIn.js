import React,{useState,useContext} from 'react';
import {TextInput,Button,View} from 'react-native';
import {UserState} from '../../../store/store';

const dummyDB = [
  {
    userId : 'meoya',
    pwd : '1'
  },
  {
    userId : 'meoyaMan2',
    pwd : '1'
  },
  {
    userId : 'meoyaMan3',
    pwd : '1'
  },
  {
    userId : 'meoyaMan4',
    pwd : '1'
  },
  {
    userId : 'meoyaMan5',
    pwd : '1'
  }
]

const SignIn =({navigation})=> {
  const [userid,setUserid] = useState();
  const [pwd,setPwd] = useState();
  const [userContext,setUserContext] = useContext(UserState);

  const SignInChecker =()=> {
    dummyDB.forEach(async(ele)=>{
      if(userid == ele.userId && pwd == ele.pwd){
        setUserContext({authFlag:true,myArea:''});
      }
    })
    console.log(userContext);
  }

  const onPressSignInBtn =()=> {
    SignInChecker();
    if(userContext.authFlag){
      alert("로그인 성공하셧음");
      navigation.reset(({
        index:1,
        routes:[{name:'Tab'}]
      }));
    }else{
      alert("로그인 실패하심");
    }
    
  }

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
      <Button title="로그인" onPress={onPressSignInBtn}/>
    </View>
  )
}

export default SignIn;