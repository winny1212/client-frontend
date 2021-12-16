import React from 'react';
//import Header from '../../../components/layout/Header';
import { useSelector } from 'react-redux';
import { Typography, Grid, Card, CardMedia, Container } from '@mui/material';

const Profile = () => {
  //import the Data from usersData
  const profile = useSelector((state) => {
    return state.profileReducer;
  });

  console.log(profile.avatar);
  return (
    <>
      <Container>
        <Grid style={{ marginBottom: '4rem' }} container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card
              style={{
                marginTop: '4rem',
                marginLeft: '3rem',
                marginRight: '2rem',
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={profile.avatar}
                alt="image"
              />
            </Card>
          </Grid>
          <Grid item xs={6} md={8}>
            {/* username details */}
            <Typography
              align="left"
              style={{ marginTop: '4rem' }}
              variant="h3"
              component="div"
            >
              {' '}
              {profile.username}
            </Typography>{' '}
            {/* bagde details */}
            <Typography
              align="left"
              style={{ marginTop: '2rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              ******************the bagde goes here!!!!!******************
            </Typography>{' '}
            {/* location details */}
            <Typography
              align="left"
              style={{ marginTop: '2rem' }}
              variant="subtitle1"
              component="div"
            >
              {' '}
              Location: {profile.location}
            </Typography>{' '}
            {/* website details */}
            <Typography
              align="left"
              style={{ marginTop: '1rem' }}
              variant="subtitle1"
              component="div"
            >
              {' '}
              Website: {profile.website}
            </Typography>{' '}
            {/* socMedia details */}
            <Typography
              align="left"
              style={{ marginTop: '1rem' }}
              variant="subtitle1"
              component="div"
            >
              {' '}
              Social Media: {profile.socMedia}
            </Typography>{' '}
            {/* bio details */}
            <Typography
              align="left"
              style={{ marginTop: '2rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              {profile.bio}
            </Typography>{' '}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
