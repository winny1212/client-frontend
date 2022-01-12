import React, { useState, useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import Header from '../../components/layout/Header';
import { TextField, Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllPosts, getPostBySearch } from '../../actions/posts';
import { getAllUsers } from '../../actions/auth';

// UserContext
import { UserContext } from '../../context/UserContext';

// MUI
import Container from '@mui/material/Container';
import SearchBar from '../../components/searchbar/SearchBar';
import useStyles from './styles';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const { currentId } = useContext(UserContext);
  const dispatch = useDispatch();
  const classes = useStyles();

  // State for Filter and Sort
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  // State for Search
  const [search, setSearch] = useState('');

  // Search and Pagination Code
  const query = useQuery();
  let navigate = useNavigate();
  const page = query.get('page');
  const searchQuery = query.get('searchQuery');

  useEffect(() => {
    // fetch & load all posts
    dispatch(getAllPosts());

    // fetch & load all Users
    dispatch(getAllUsers());

    // console.log('The currentID is:', currentId);
  }, [dispatch, currentId]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Search Post
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim()) {
      // Dispatch -> Fetch searched Posts.
      dispatch(getPostBySearch({ search }));
      setSearch('');
      navigate(`/posts/search?searchQuery=${search}`);
    } else {
      // Go back to home.
      navigate('/');
    }
  };

  return (
    <>
      <Header title="Find tips & tricks to groom your beloved pets" />
      <Container maxWidth="lg">
        {/* import search and filter function components */}
        {/* SearchPosts */}
        {/* <Input
          name="search"
          label="Search Term"
          value={search}
          onChange={console.log('typing!')}
          onKeyPress={handleKeyPress}
          type="text"
        /> */}
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
