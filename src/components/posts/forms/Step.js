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
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

const Step = ({ instruction, index }) => {
  return (
    <>
      <ListItem
        key={instruction.id}
        alignItems="flex-start"
        sx={{ pl: 0.25 }}
        secondaryAction={
          <Stack justifyContent="flex-start">
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
            {index + 1}
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{ pr: 1 }}>{instruction.text}</ListItemText>
      </ListItem>
    </>
  );
};

export default Step;
