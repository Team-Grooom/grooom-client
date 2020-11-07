import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {View, FlatList} from 'react-native-gesture-handler';
import MessageBubble from 'src/component/Chatting/ChatRoom/MessageBubble';
import {SocketContext} from 'src/store/ChatSocketStore';

const StyledView = styled.View`
  width: 100%;
  height: 80%;
`;

const ChatRoomMessage = ({roomCode, user}) => {
  const [messageList, setMessageList] = useState([]);
  const socket = useContext(SocketContext); // 소켓 컨텍스트에서 소켓 받아오기

  const renderChatMessage = ({item}) =>
    item.user === 'MinJong' ? (
      <MessageBubble myMsgFlag={true} message={item.msg} />
    ) : (
      <MessageBubble myMsgFlag={false} message={item.msg} />
    );

  // 처음에 채팅방 렌더링
  const getChatHistory = () => {
    socket.emit('Room', roomCode, user);
    socket.on('get history', result => {
      // console.log(result);
      setMessageList(result); // 이전의 메시지를 스테이트로
    });
  };
  // Did Mount?
  useEffect(() => {
    getChatHistory();
  }, []);

  // 새로운 메시지가 올때의 이벤트
  socket.on('chat message', (roomCode, user, msg) => {
    setMessageList(messageList.concat({roomCode, user, msg}));
  });

  return (
    <StyledView>
      <FlatList
        inverted={true}
        data={messageList}
        renderItem={renderChatMessage}
        keyExtractor={item => item._id}
      />
    </StyledView>
  );
};

export default ChatRoomMessage;
