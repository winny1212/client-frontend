import React, { useEffect } from 'react';
import Posts from '../../components/posts/Posts';
// import { useDispatch } from 'react-redux';
// import { getAllPosts } from '../../actions/posts';

function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <h3>Searchbar</h3>
        <h3>Featured Posts</h3>
        <main>
          <Posts />
        </main>
      </div>
    </>
  );
}

export default Home;
