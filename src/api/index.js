import axios from 'axios';

// Creating an Axios Instance

// 1. Uncomment out this code below if you gonna test locally.
// To run backend use this code. This is b/c heroku does not use nodemon
// npm run start:dev
// export const API = axios.create({ baseURL: 'http://localhost:5000' });

// 2. Code for real database - it might be slower and you won't get server side error message.
export const API = axios.create({
  baseURL: 'https://diy-grooming.herokuapp.com/',
});

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

export const fetchAllPosts = (page) => API.get(`/posts?page=${page}`);

export const fetchPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);

export const createNewPost = (newPost) => API.post('/posts', newPost);

export const updateOldPost = (id, updatedPost) =>
  API.patch(`'/posts'/${id}`, updatedPost);

export const deleteAPost = (id) => API.delete(`'/posts'/${id}`);

export const likeAPost = (id) => API.patch(`/posts/${id}/likePost`);

export const commentAPost = (comment, id) =>
  API.post(`/posts/${id}/commentPost`, { comment });

// Sign in and Sign Up Routes
export const signInUser = (formData) => API.post('/user/signin', formData);

export const signUpUser = (formData) => API.post('/user/signup', formData);

// Users Routes
export const fetchAllUsers = () => API.get('/user');

export const fetchSingleUser = (id) => API.get(`/user/${id}`);

export const updateOldUser = (id, updatedUser) =>
  API.patch(`/user/${id}`, updatedUser);

export const deleteAUser = (id) =>
  API.request({ url: `/user/${id}`, method: 'DELETE' });
