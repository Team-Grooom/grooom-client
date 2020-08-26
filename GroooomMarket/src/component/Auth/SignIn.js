import React,{useState,useContext} from 'react';
import {TextInput,Button,View} from 'react-native';
import {UserState} from '../../store/store';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native';

const StyledBtn = styled.Button`
  width: 50%;
  height: 50%;
  margin: 10px;
`;

const SignInPage = ({navigation}) => {
  const [userid, setUserid] = useState();
  const [pwd, setPwd] = useState();
  const [userContext, setUserContext] = useContext(UserState);

  const SignInChecker = () => {
    dummyDB.forEach(async ele => {
      if (userid == ele.userId && pwd == ele.pwd) {
        setUserContext({authFlag: true, myArea: ''});
      }
    });
  };

  const onPressSignUpBtn = () => {
    navigation.navigate('Sign Up');
  };

  const onPressSignInBtn = () => {
    SignInChecker();
    if (userContext.authFlag) {
      alert('로그인 성공하셧음');
      navigation.reset({
        index: 1,
        routes: [{name: 'Tab'}],
      });
    } else {
      alert('로그인 실패하심');
    }
  };

  return (
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
      <StyledBtn title="로그인" onPress={onPressSignInBtn} />
      <StyledBtn title="회원가입" onPress={onPressSignUpBtn} />
    </View>
  );
};

export default SignInPage;
