import './App.css';
import Login from './components/Users/Login/Login';
import { useEffect } from 'react';

// Redux Connection
import { useDispatch, useSelector } from 'react-redux';

// Get our actions from actions folder.
import { getAllPosts } from './actions/posts';

function App() {
  /*
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(getAllPosts());
   }, [dispatch]);

   const posts = useSelector((state) => state.postsReducer);

   console.log(posts);

  */

  return (
    <div className="App">
      <h1>Hello!! DIY GROOMING Team!</h1>
      <h3>Ready to Learn by Doing!</h3>
      <Login />
    </div>
  );
}

export default App;
