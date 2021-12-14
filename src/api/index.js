import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchAllPosts = () => axios.get(url);

export const createNewPost = (newPost) => axios.post(url, newPost);

export const updateOldPost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deleteAPost = (id) => axios.delete(`${url}/${id}`);

// Sign in and Sign Up Routes
export const signInUser = (formData) => axios.post('/user/signin', formData);

export const signUpUser = (formData) => axios.post('/user/signup', formData);
