import React, { useState, useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import Header from '../../components/layout/Header';

import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/posts';
import { getAllUsers } from '../../actions/auth';

// UserContext
import { UserContext } from '../../context/UserContext';

// MUI
import Container from '@mui/material/Container';
import SearchBar from '../../components/searchbar/SearchBar';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

function Home() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const dispatch = useDispatch();

  const { currentId } = useContext(UserContext);

  useEffect(() => {
    // fetch & load all posts
    dispatch(getAllPosts());

    // fetch & load all Users
    dispatch(getAllUsers());

    console.log('The currentID is:', currentId);
  }, [dispatch, currentId]);

  return (
    <>
      <Header title="Find tips & tricks to groom your beloved pets" />
      <Container maxWidth="lg">
        {/* import search and filter function components */}
        <SearchBar
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
        />
        <h3>Featured Posts</h3>
        <Posts
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
        />
      </Container>
    </>
  );
}

export default Home;
