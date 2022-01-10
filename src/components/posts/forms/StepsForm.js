import React, { useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// Components
import FormInput from '../../shared/FormInput';
import Hr from '../../shared/Hr';
import { StyledBtnOutlined } from '../../shared/StyledButtons';

function Steps({ handleChange, postData, setPostData }) {
  // state for lists of steps
  const [stepsList, setStepsList] = useState(postData.steps);
  // state for each step
  const [step, setStep] = useState('');

  return (
    <>
      <FormInput
        label="Write one succinct and clear step at a time"
        hint="Step-by-step instruction"
        id="step"
        name="step"
        multiline
        rows={3}
        helperText="Click 'Add Step' to write more steps. Up to 10 steps recommended"
        required
      />

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledBtnOutlined size="small">Add Step</StyledBtnOutlined>
      </Box>

      <Hr />

      <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
        Grooming instructions preview
      </Typography>

      <List>
        <ListItem
          alignItems="flex-start"
          sx={{ pl: 0.25 }}
          secondaryAction={
            <Stack>
              <IconButton edge="end" aria-label="edit">
                <EditTwoToneIcon color="secondary" fontSize="small" />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteTwoToneIcon color="secondary" fontSize="small" />
              </IconButton>
            </Stack>
          }
        >
          <ListItemAvatar>
            <Avatar
              sx={{ width: { xs: 36, md: 42 }, height: { xs: 36, md: 42 } }}
            >
              1
            </Avatar>
          </ListItemAvatar>
          <ListItemText sx={{ pr: 1 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            mollitia, ducimus fuga provident nihil aspernatur.
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

export default Steps;
