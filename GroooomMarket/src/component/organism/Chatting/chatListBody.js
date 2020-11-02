import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const ChatListBody =({chatData, renderItem, selectKey})=> {
  return(
    <FlatList
      data={chatData}
      renderItem={renderItem}
      keyExtractor={selectKey}
    />
  )
}

export default ChatListBody;