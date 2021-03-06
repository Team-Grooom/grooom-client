import React, {createContext, useState} from 'react';

const ContextSchema = {
  authFlag: true,
  myArea: '',
};

export const UserState = createContext();

export const UserStateProvider = ({children}) => {
  const [userState, setUserState] = useState(ContextSchema);

  return (
    <UserState.Provider value={[userState, setUserState]}>
      {children}
    </UserState.Provider>
  );
};
