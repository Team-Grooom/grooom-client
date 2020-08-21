/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashWindow from './src/component/splashWindow';
import BottomTab from './src/component/BottomTab';
import SignInScreen from './src/component/Auth/SignIn';
import {UserStateProvider, UserState} from './store/store';
import {StackActions, NavigationContainer} from '@react-navigation/native';
import ChatRoom from 'src/component/Chatting/ChatRoom/ChatRoom';
import SignUpPage from 'src/component/Auth/SignUp';
const RootStack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userContext, setUserContext] = useContext(UserState);
  const [userState, setUserState] = useState(userContext);

  if (!isLoading) {
    return <SplashWindow setIsLoading={setIsLoading} />;
  }

  return (
    <UserStateProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          {userContext.authFlag == false ? (
            <RootStack.Screen
              name="Sign In"
              component={SignInScreen}
              option={{
                title: '로그인 화면',
              }}
            />
          ) : (
            <RootStack.Screen
              name="Main"
              component={BottomTab}
              options={{
                headerShown: false,
              }}
            />
          )}
          <RootStack.Screen
            name="Tab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="ChatRoomModal"
            component={ChatRoom}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Sign Up"
            component={SignUpPage}
            option={{
              title: '회원가입 화면',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </UserStateProvider>
  );
};

export default App;
