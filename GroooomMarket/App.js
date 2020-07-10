/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SplashWindow from "./src/component/splashWindow";
import BottomTab from './src/component/BottomTab';
import {UserStateProvider} from './store/store';
const RootStack = createStackNavigator();

const App=() => {
  const [isLoading,setIsLoading]=useState(false);
  if(!isLoading){
    return(
      <SplashWindow setIsLoading={setIsLoading}/>
    )
  }
  else{
    return (
      <UserStateProvider>
        <BottomTab/>
      </UserStateProvider>
    );
  }
};


export default App;
