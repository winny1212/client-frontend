import React, { useState, useContext } from 'react';

// Initial Details Post data
const initialDetailsData = {
  title: '',
  breed: null,
  dogSize: '',
  duration: 1,
  description: '',
  tools: [],
  steps: [],
  image: { before: '', after: '' },
  video: '',
};

// Setup Post Context
const PostContext = React.createContext();

const PostContextProvider = ({ children }) => {
  // Final form data to be submitted to the backend
  const [postData, setPostData] = useState({});

  // Post data for DetailsForm
  const [details, setDetails] = useState(initialDetailsData);

  // Handle dog breeds selection state
  // (has to be handled separately for MUI auto-complete)
  const [selectedBreed, setSelectedBreed] = useState(null);

  // Collected individual steps to form final instructions (steps)
  const [instructions, setInstructions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
    <PostContext.Provider
      value={{
        postData,
        setPostData,
        details,
        setDetails,
        selectedBreed,
        setSelectedBreed,
        instructions,
        setInstructions,
        handleChange,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

// custom hook to access the PostContext directly
export const usePostContext = () => {
  return useContext(PostContext);
};

export default PostContextProvider;
