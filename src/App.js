import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Users/Login/Login';
import Home from './views/home/Home';
import Register from './views/register/Register';
import About from './views/about/About';
import Navbar from './components/navigation/Navbar';
import Form from './views/form/Form';
import ProfileForm from './views/User/profile/ProfileForm';
import Profile from './views/User/profile/Profile';
import Footer from './components/footer/Footer';
// import Post from './components/posts/post/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

          {/* NEED TO FIGURE OUT TO LINK TO INDIVIDUAL POST -- will update */}
          {/* <Route path="/posts/:postId">
            <Post />
          </Route> */}

          <Route exact path="/create" element={<Form />}></Route>

          <Route exact path="/profile" element={<Profile />}></Route>

          {/* create a route for Profile but should just render once user login, need add logic */}
          <Route exact path="/profileForm" element={<ProfileForm />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
