import React,{createContext,useState} from 'react';

export const UserState = createContext();

export const UserStateProvider =(props)=>{

  const [userState,setUserState] = useState();

  return(
    <UserState.Provider value={[userState,setUserState]}>
      {props.children}
    </UserState.Provider>
  )
}