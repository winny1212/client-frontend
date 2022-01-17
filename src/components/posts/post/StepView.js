import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const StepView = ({ step, index }) => {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ pl: 0.25 }} key={step.id}>
        <ListItemAvatar>
          <Avatar
            sx={{ width: { xs: 36, md: 42 }, height: { xs: 36, md: 42 } }}
          >
            {index + 1}
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{ pr: 1 }}>{step.text}</ListItemText>
      </ListItem>
    </>
  );
};

export default StepView;
