import React,{createContext} from 'react';
import * as io from 'socket.io-client';

export const SocketContext = createContext();

//initialize Socket
var chatServerURL = "https://hanium.run.goorm.io";

const socket = io.connect(chatServerURL,{transports: ['websocket']});

export const SocketContextProvider = (props) => (
  <SocketContext.Provider value={socket}>
    {props.children}
  </SocketContext.Provider>
)