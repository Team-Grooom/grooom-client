import React from 'react';
import {StackActions} from '@react-navigation/native';
import ChatListTemplate from 'src/component/template/chatListTemplate';
const fetch = require('node-fetch');

const ChatListView = ({navigation}) => {
  // Fetch Chatting List
  const chatListFetch = async () => {
    const URL = 'http://hanium.run.goorm.io/list';
    return await fetch(URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(err => {
        console.log('에러발생했다. : ' + err);
      });
  };
  // Navigation Event to Chat Room
  const navigateToChatRoom = () => {
    navigation.navigate('ChatRoomModal');
  };

  return (
    <ChatListTemplate
      chatFetch={chatListFetch}
      navigateToChatRoom={navigateToChatRoom}
    />
  );
};

export default ChatListView;
