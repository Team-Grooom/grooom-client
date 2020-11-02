import React,{useEffect,useContext} from 'react';
import {UserState} from 'src/store/store';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Loader from 'src/component/molecule/loader/loader';

const StyledView = styled.View`
  width : 100%;
  height : 100%;
  align-items : center;
  justify-content : center;
  background-color : white;
`;

const LoginTemplate =({checkAuth,navigateToMain,navigateToSignUp})=> {

  const [userState,setUserState] = useContext(UserState);

  const navigationEvent =async()=> {
    const result = await checkAuth();
    if(result){
      setUserState({
        ...UserState,
        authFlag : true
      });
      navigateToMain();
    }else{
      navigateToSignUp();
    }
  };

  // mount 될 때 fetch api (로그인 시도)
  useEffect(()=>{
    navigationEvent();
  },[]);

  return(
    <StyledView>
      <Loader/>
    </StyledView>
  )
}

export default LoginTemplate;