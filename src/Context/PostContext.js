import React from 'react';

// Setup Post Context
const PostContext = React.createContext();

const PostContextProvider = (props) => {
  return (
    <PostContext.Provider value={{}}>{props.children}</PostContext.Provider>
  );
};

export default PostContextProvider;
