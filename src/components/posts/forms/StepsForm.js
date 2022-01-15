import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

// Context
import { usePostContext } from '../../../context/PostContext';

// MUI
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

// Components
import Hr from '../../shared/Hr';
import Step from './Step';
import AddStep from './AddStep';
import EditStep from './EditStep';
import HelperText from '../../shared/HelperText';

function Steps() {
  // PostContext consume
  const { instructions, setInstructions, stepsTempLocal } = usePostContext();

  // state for each step
  const [step, setStep] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentStep, setCurrentStep] = useState({});

  // save steps to temp local storage
  useEffect(() => {
    localStorage.setItem(stepsTempLocal, JSON.stringify(instructions));
  }, [instructions, stepsTempLocal]);

  // handle onChange for the AddStep component
  const handleInputChange = (e) => {
    setStep(e.target.value);
  };

  // handle onChange for the EditStep component
  const handleEditInputChange = (e) => {
    setCurrentStep({
      ...currentStep,
      text: e.target.value,
    });
  };

  // handle onSubmit when the 'Add Step' is clicked
  const handleAddStep = (e) => {
    e.preventDefault();

    const newStep = { id: nanoid(8), text: step.trim() };

    if (step !== '') {
      setInstructions([...instructions, newStep]);
    }
    // clear out input
    setStep('');
  };

  // handle update step state (for saving changes)
  const handleUpdateStep = (id, updatedStep) => {
    const modifiedStep = instructions.map((instruction) => {
      return instruction.id === id ? updatedStep : instruction;
    });
    setIsEditing(false);
    setInstructions(modifiedStep);
  };

  // handle modified step submit
  const handleSaveEditedStep = (e) => {
    e.preventDefault();
    handleUpdateStep(currentStep.id, currentStep);
  };

  // handle step deletion
  const handleDeleteStep = (id) => {
    const removeStep = instructions.filter((instruction) => {
      return instruction.id !== id;
    });
    setInstructions(removeStep);
  };

  // handle edit step
  const handleEditStep = (step) => {
    setIsEditing(true);
    setCurrentStep({ ...step });
  };

  return (
    <>
      {isEditing ? (
        <EditStep
          currentStep={currentStep}
          setIsEditing={setIsEditing}
          handleEditInputChange={handleEditInputChange}
          handleSaveEditedStep={handleSaveEditedStep}
        />
      ) : (
        <AddStep
          step={step}
          handleAddStep={handleAddStep}
          handleInputChange={handleInputChange}
        />
      )}

      <Hr />

      <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
        Grooming instructions preview
      </Typography>
      <HelperText sx={{ ml: 0 }}>
        Please include at least three steps
      </HelperText>

      <List>
        {instructions.map((instruction, index) => (
          <Step
            key={instruction.id}
            instruction={instruction}
            index={index}
            handleEditStep={handleEditStep}
            handleDeleteStep={handleDeleteStep}
          />
        ))}
      </List>
    </>
  );
}

export default Steps;
