import React, { useState } from 'react';

const UserContext = React.createContext();

function UserContextProvider(props) {
  const [currentId, setCurrentId] = useState(99);

  return (
    <UserContext.Provider value={{ currentId, setCurrentId }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
