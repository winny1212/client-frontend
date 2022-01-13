import React, { useState, useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import Header from '../../components/layout/Header';

import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/posts';

// UserContext
import { UserContext } from '../../context/UserContext';

// MUI
import Container from '@mui/material/Container';

// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import FilterBar from '../../components/filterBar/FilterBar';
import useStyles from './styles';
import axios from 'axios';

function Home() {
  const { currentId } = useContext(UserContext);
  const dispatch = useDispatch();
  const classes = useStyles();

  // State for Filter and Sort
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  // State for Search
  const [search, setSearch] = useState('');

  const { currentId } = useContext(UserContext);

  // fetch & load all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, currentId]);

  return (
    <>
      <Header title="Find tips & tricks to groom your beloved pets" />
      <Container maxWidth="lg" sx={{ marginTop: '-25px' }}>
        {/* import search and filter function components */}

        <h3 style={{ textAlign: 'center', fontSize: '40px' }}>Posts Gallery</h3>
        <Posts />
        <TextField
          name="search"
          label="Search Posts"
          value={search}
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
        />
        <Button
          type="submit"
          sx={{ width: '100%', marginTop: 2 }}
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={searchPost}
        >
          Search
        </Button>
        <FilterBar
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
