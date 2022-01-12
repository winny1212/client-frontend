import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../actions/posts';

// Setup Post Context
const PostContext = React.createContext();

const PostContextProvider = ({ children }) => {
  // Invoke Redux State
  const dispatch = useDispatch();

  // Get the current user for the post's username/author
  const currentUser = JSON.parse(localStorage.getItem('profile'));

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

  // save steps to temp local storage
  useEffect(() => {
    localStorage.setItem(stepsTempLocal, JSON.stringify(instructions));
  }, [instructions, stepsTempLocal]);

  // Clear all inputs to initial state
  const clearInputs = () => setDetails(initialDetailsData);

  // Create POST to send to backend
  const handlePostPublish = (e) => {
    e.preventDefault();

    const newPost = setPostData({
      ...postData,
      ...details,
      steps: instructions,
      breed: selectedBreed.label,
      username: currentUser?.result?.username,
    });
    // add alert to notify post is published?

    // Send post to backend - CREATE POST
    dispatch(createPost({ ...postData, newPost }));

    // clear inputs back to initial values
    clearInputs();
    // clear temporary local storage for steps
    localStorage.removeItem(stepsTempLocal);
    // set breed back to null
    setSelectedBreed(null);

    console.log('Post Published!\n-- newPost:\n', newPost);
    // redirect page to the new post
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
