/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect,useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SplashWindow from "./src/view/splashView";
import BottomTab from './src/component/BottomTab';
import LoginView from 'src/view/Auth/LogInView';
import {UserStateProvider,UserState} from './src/store/store';
import { StackActions,NavigationContainer } from '@react-navigation/native';
import ChatRoom from 'src/component/Chatting/ChatRoom/ChatRoom';
import SignUpView from 'src/view/Auth/SignUpView';
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
  return (
    <UserStateProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Login"
            component={LoginView}
            options ={{
              headerShown:false
            }}
          />
          <RootStack.Screen 
            name="Main"
            component={BottomTab}
            options={{
              headerShown:false
            }}
          />
          <RootStack.Screen 
            name="Tab" 
            component={BottomTab}
            options={{
                  headerShown:false
                }}
          />
          <RootStack.Screen
            name="ChatRoomModal"
            component={ChatRoom}
            options={{
              headerShown:false
            }}
          />
          <RootStack.Screen
              name="SignUp"
              component={SignUpView}
              options ={{
                headerShown:false
              }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </UserStateProvider>
  );
};


export default App;
