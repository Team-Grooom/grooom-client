import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Chatting from 'src/component/Chatting/Chatting';
import ChatRoom from 'src/component/Chatting/ChatRoom/ChatRoom';

const ChatStack = createStackNavigator();

const ChatScreen =()=> {
  return(
    <ChatStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Chatting">
      <ChatStack.Screen name="Chatting" component={Chatting}></ChatStack.Screen>
      <ChatStack.Screen name="ChatRoom" component={ChatRoom}></ChatStack.Screen>
    </ChatStack.Navigator>
  )
}

export default ChatScreen;