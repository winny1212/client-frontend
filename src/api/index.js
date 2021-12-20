import axios from 'axios';

// Creating an Axios Instance
export const API = axios.create({ baseURL: 'http://localhost:5000' });

// const url = 'http://localhost:5000/posts';
// We add out heroku base URL later

export const fetchAllPosts = () => API.get('/posts');

export const createNewPost = (newPost) => API.post('/posts', newPost);

export const updateOldPost = (id, updatedPost) =>
  API.patch(`'/posts'/${id}`, updatedPost);

export const deleteAPost = (id) => API.delete(`'/posts'/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Sign in and Sign Up Routes
export const signInUser = (formData) => API.post('/user/signin', formData);

export const signUpUser = (formData) => API.post('/user/signup', formData);
