import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Users/Login/Login';
import Home from './views/home/Home';
import Register from './views/register/Register';
import About from './views/about/About';
import Navbar from './components/navigation/Navbar';
import Form from './views/form/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>App.js</h1>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/create" element={<Form />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
