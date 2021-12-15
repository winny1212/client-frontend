import React from 'react';
import Header from '../../../components/layout/Header';
import { useSelector } from 'react-redux';
import Grid, Item from '@mui/material';

const Profile = () => {
  const profile = useSelector((state) => {
    return state.profileReducer;
  });

  return (
    <>
      <Header title={profile.username} />
      <Grid container spacing={2}>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
</Grid>
    </>
  );
};

export default Profile;
