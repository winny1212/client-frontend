import React, { useState, useContext } from 'react';
import useFirebase from '../utils/hooks/useFirebase';

const UserContext = React.createContext();

function UserContextProvider(props) {
  const [currentId, setCurrentId] = useState(0);

  const firebase = useFirebase();

  return (
    <UserContext.Provider value={{ currentId, setCurrentId, firebase }}>
      {props.children}
    </UserContext.Provider>
  );
}

// custom hook to access the UserContext directly
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, UserContext, useUserContext };
