import React, { useState, useContext, useEffect } from 'react';

// Setup Post Context
const PostContext = React.createContext();

const PostContextProvider = ({ children }) => {
  // Final form data to be submitted to the backend
  const [postData, setPostData] = useState({});

  // Initial Details Post data
  const initialDetailsData = {
    title: '',
    dogSize: '',
    duration: 1,
    description: '',
    tools: [],
    image: { before: '', after: '' },
    video: '',
  };

  // Post data for DetailsForm
  const [details, setDetails] = useState(initialDetailsData);

  // Handle dog breeds selection state
  // (has to be handled separately for MUI auto-complete)
  const [selectedBreed, setSelectedBreed] = useState(null);

  // Store temporary data in the local storage
  const stepsTempLocal = 'DIYG_temp_steps';
  // Collected individual steps to form final instructions (steps)
  const [instructions, setInstructions] = useState(() => {
    const savedSteps = localStorage.getItem(stepsTempLocal);
    if (savedSteps) {
      return JSON.parse(savedSteps);
    } else {
      return [];
    }
  });

  const handlePostPublish = (e) => {
    e.preventDefault();
    console.log('-- postData:\n', JSON.stringify(postData, null, 2));
  };

  return (
    <PostContext.Provider
      value={{
        postData,
        setPostData,
        initialDetailsData,
        details,
        setDetails,
        selectedBreed,
        setSelectedBreed,
        instructions,
        setInstructions,
        stepsTempLocal,
        handlePostPublish,
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
