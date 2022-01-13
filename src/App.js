import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './views/home/Home';
import Auth from './views/auth/Auth';
import About from './views/about/About';
import Navbar from './components/navigation/Navbar';
import Form from './views/form/Form';
import ProfileForm from './views/User/profile/ProfileForm';
import Profile from './views/User/profile/Profile';
import Footer from './components/footer/Footer';
import NewPost from './views/post/NewPost';
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
            <Route
              path="/"
              exact
              element={<Navigate replace to="posts?page=1" />}
            />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="login" element={<Auth />} />

            {/* <Route path="posts" element={<Navigate replace to="/" />} /> */}
            {/* EDIT: /posts/:id/edit */}
            <Route path="posts/new" element={<NewPost />} />
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
