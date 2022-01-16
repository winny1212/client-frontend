import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

function UserContextProvider(props) {
  const [currentId, setCurrentId] = useState(0);

  return (
    <UserContext.Provider value={{ currentId, setCurrentId }}>
      {props.children}
    </UserContext.Provider>
  );
}

// custom hook to access the UserContext directly
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, UserContext, useUserContext };
