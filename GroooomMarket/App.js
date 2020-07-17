/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect,useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SplashWindow from "./src/component/splashWindow";
import BottomTab from './src/component/BottomTab';
import SignInScreen from './src/component/Auth/SignIn';
import {UserStateProvider,UserState} from './store/store';
import { StackActions,NavigationContainer } from '@react-navigation/native';
const RootStack = createStackNavigator();

const App =()=> {
  const [isLoading,setIsLoading] = useState(false);
  const [userContext,setUserContext] = useContext(UserState);
  const [userState,setUserState] = useState(userContext);

  if(!isLoading){
    return(
      <SplashWindow setIsLoading={setIsLoading}/>
    )
  }

  console.log(userContext);
  
  return (
    <UserStateProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          { userContext.authFlag == false ? (
            <RootStack.Screen
              name="Sign In"
              component={SignInScreen}
              props={setUserState}
              option ={{
                title:"로그인 화면"
              }}
            />
          ) : (
            <RootStack.Screen name="Tab" component={BottomTab}/>
          )
          }
          <RootStack.Screen name="Tab" component={BottomTab}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </UserStateProvider>
  );
};


export default App;
