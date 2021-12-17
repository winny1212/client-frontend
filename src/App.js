import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Users/Login/Login';
import Home from './views/home/Home';
import Register from './views/register/Register';
import About from './views/about/About';
import Navbar from './components/navigation/Navbar';
import Form from './views/form/Form';
import ProfileForm from './views/User/profile/ProfileForm';
import Profile from './views/User/profile/Profile';
import Footer from './components/footer/Footer';
import PostForm from './views/post/PostForm';
import Post from './components/posts/post/Post';
import PostId from './views/post/PostId';
import UpdateForm from './views/form/UpdateForm';
import ErrorPage from './views/error/ErrorPage';
// import Post from './components/posts/post/Post';

function App() {
  return (
    <div className="App wrapper">
      <Router>
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            {/* NEED TO FIGURE OUT TO LINK TO INDIVIDUAL POST -- will update */}
            {/* <Route path="/posts/:postId">
              <Post />
            </Route> */}

            <Route path="posts" element={<Navigate replace to="/" />} />
            {/* EDIT: /posts/:id/edit */}
            <Route path="posts/new" element={<PostForm />} />
            <Route path="posts/:postID" element={<PostId />} />

            {/* Temporary routes for view only */}
            <Route path="/create" element={<Form />} />
            <Route path="/edit" element={<UpdateForm />} />

            <Route path="/profile" element={<Profile />} />

            {/* create a route for Profile but should just render once user login, need add logic */}
            <Route path="/profile/edit" element={<ProfileForm />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
