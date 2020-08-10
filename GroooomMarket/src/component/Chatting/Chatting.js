import React,{useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import ChatHeader from 'src/component/Chatting/ChatHeader';
import ChatList from 'src/component/Chatting/ChatList/ChatList';
import {createStackNavigator} from '@react-navigation/stack';

const Chatting =()=>{
  return(
    <View>
      <ChatHeader/>
      <ChatList/>
    </View>
  )
}


export default Chatting;