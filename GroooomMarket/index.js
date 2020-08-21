/**
 * @format
 */
import {UserStateProvider} from './store/store';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const Index = () => {
  return (
    <UserStateProvider>
      <App />
    </UserStateProvider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
