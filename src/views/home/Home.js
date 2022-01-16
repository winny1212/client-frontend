import React, { useState, useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import Header from '../../components/shared/Header';
import { TextField, Button } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useLocation } from 'react-router-dom';
import { getAllPosts, getPostBySearch } from '../../actions/posts';
import { getAllUsers } from '../../actions/auth';

// UserContext
import { UserContext } from '../../context/UserContext';

// MUI
import Container from '@mui/material/Container';

import useStyles from './styles';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/searchbar/SearchBar';

// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const postState = useSelector((state) => state.postsReducer);
  console.log('Post State at home:', postState);
  const { currentId } = useContext(UserContext);
  const dispatch = useDispatch();
  const classes = useStyles();

  // State for Search
  const [search, setSearch] = useState('');

  // Search and Pagination Code
  const query = useQuery();
  let navigate = useNavigate();
  const page = query.get('page');
  const searchQuery = query.get('searchQuery');

  // useEffect(() => {
  //   // We will fetch Posts at Pagination.
  //   // dispatch(getAllPosts(1));
  //   // fetch & load all Users
  //   dispatch(getAllUsers());
  // }, [dispatch, currentId]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostBySearch({ search }));

      navigate(`/posts/search?searchQuery=${search || 'none'}`);

      setSearch('');
    } else {
      // Go back to home.
      navigate('/posts');
    }
  };

  return (
    <>
      <Header
        title="Find tips & tricks to groom your beloved pets"
        sx={{ mb: 0, height: 180, pb: '1.5rem' }}
      />
      <SearchBar
        search={search}
        handleKeyPress={handleKeyPress}
        setSearch={setSearch}
        searchPost={searchPost}
      />

      <Container maxWidth="lg">
        <Pagination page={page} />
        <Posts />
      </Container>
    </>
  );
}

export default Home;
