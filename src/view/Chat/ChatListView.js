import React from 'react';
import {StackActions} from '@react-navigation/native';
import ChatListTemplate from 'src/component/template/chatListTemplate';

const ChatListView = ({navigation}) => {
  // Fetch Chatting List
  const chatListFetch = async () => {
    const URL = 'http://hanium.run.goorm.io/list';
    return fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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

  return <ChatListTemplate chatFetch={chatListFetch} navigation={navigation} />;
};

export default ChatListView;
