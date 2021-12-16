import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../../User/profile/ProfileForm';
import { useSelector } from 'react-redux';
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Container,
  Button,
} from '@mui/material';

const Profile = () => {
  //redirect the edit button to the Profile Form page.
  const navigate = useNavigate();
  navigate('/profileForm');

  //import the Data from usersData
  const profile = useSelector((state) => {
    return state.profileReducer;
  });

  console.log(profile.avatar);
  return (
    <>
      <Container>
        <Grid style={{ marginBottom: '2rem' }} container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card
              style={{
                marginTop: '4rem',
                marginLeft: '2rem',
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
              style={{ marginTop: '1rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              ******************the bagde goes here!!!!!******************
            </Typography>{' '}
            {/* location details */}
            <Typography
              align="left"
              style={{ marginTop: '1rem' }}
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
        <form>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              style={{ marginRight: '20px' }}
              type="submit"
              color="secondary"
              variant="contained"
              size="small"
              onClick={navigate}
            >
              Edit
            </Button>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="small"
            >
              Delete
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Profile;
