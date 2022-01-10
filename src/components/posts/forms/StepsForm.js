import React, { useState } from 'react';
import { generateID } from '../../../utils/general';

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
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

// Components
import FormInput from '../../shared/FormInput';
import Hr from '../../shared/Hr';
import { StyledBtnOutlined } from '../../shared/StyledButtons';
import Step from './Step';
import AddStep from './AddStep';

function Steps({ handleChange, postData, setPostData }) {
  // state for lists of steps
  const [instructions, setInstructions] = useState([]);
  // state for each step
  const [step, setStep] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentStep, setCurrentStep] = useState({});

  const handleInputChange = (e) => {
    setStep(e.target.value);
    // console.log('step', step);
  };

  const handleStepSubmit = (e) => {
    e.preventDefault();

    const newStep = { id: generateID(), text: step.trim() };

    if (step !== '') {
      setInstructions([...instructions, newStep]);
    }
    // clear out input
    setStep('');
  };

  return (
    <>
      <AddStep
        step={step}
        handleStepSubmit={handleStepSubmit}
        handleInputChange={handleInputChange}
      />

      <Hr />

      <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
        Grooming instructions preview
      </Typography>

      <List>
        {instructions.map((instruction, index) => (
          <Step key={instruction.id} instruction={instruction} index={index} />
        ))}
      </List>

      <List>
        {/* PREVIEW ONLY TO BE DELETED*/}
        <ListItem
          alignItems="flex-start"
          sx={{ pl: 0.25 }}
          secondaryAction={
            <Stack>
              <IconButton edge="end" aria-label="edit">
                <EditTwoToneIcon color="secondary" fontSize="small" />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <ClearTwoToneIcon color="secondary" fontSize="small" />
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
            This is how it's gonna look like... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus reiciendis, ratione totam
            perferendis laboriosam provident doloremque facere maxime, nobis
            aperiam animi delectus eos est ab!
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

export default Steps;
