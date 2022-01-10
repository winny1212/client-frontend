import axios from 'axios';

// Creating an Axios Instance
export const API = axios.create({ baseURL: 'http://localhost:5000' });

// const url = 'http://localhost:5000/posts';
// We add out heroku base URL later

// API Interceptor
// We add the token to our req.headers so that on the back end (middleware/auth), we cam verify token and set req.userID.
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchAllPosts = () => API.get('/posts');

export const createNewPost = (newPost) => API.post('/posts', newPost);

export const updateOldPost = (id, updatedPost) =>
  API.patch(`'/posts'/${id}`, updatedPost);

export const deleteAPost = (id) => API.delete(`'/posts'/${id}`);

export const likeAPost = (id) => API.patch(`/posts/${id}/likePost`);

// Sign in and Sign Up Routes
export const signInUser = (formData) => API.post('/user/signin', formData);

export const signUpUser = (formData) => API.post('/user/signup', formData);

// Users Routes
export const fetchAllUsers = () => API.get('/users');

export const fetchSingleUser = (id) => API.get(`/user/${id}`);

export const updateOldUser = (id, updatedUser) =>
  API.patch(`'/user'/${id}`, updatedUser);

export const deleteAUser = (id) => API.delete(`'/user'/${id}`);
