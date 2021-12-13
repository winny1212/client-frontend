import React from 'react';

// MUI
import Box from '@mui/material/Box';

const PostCard = ({ post }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        borderRadius: '4px',
      }}
    >
      <Box component="img" alt={post.breed} src={post.image.before} />

      <h3>{post.title}</h3>
    </Box>
  );
};

export default PostCard;
