import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ search, handleKeyPress, setSearch, searchPost }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'accentYellow.main',
          display: 'flex',
          justifyContent: 'center',
          pb: '3rem',
          px: '2rem',
          mb: '2.5rem',
        }}
      >
        <Paper
          elevation={0}
          component="div"
          sx={{
            borderRadius: '3rem',
            pl: '2rem',
            pr: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            width: 500,
          }}
        >
          <TextField
            name="search"
            label="Search Posts"
            variant="standard"
            color="secondary"
            margin="dense"
            size="small"
            fullWidth
            value={search}
            onKeyPress={handleKeyPress}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{ disableUnderline: true }}
            sx={{ mb: 2.25 }}
          />
          <IconButton type="submit" sx={{ p: 1 }} onClick={searchPost}>
            <SearchIcon size="large" color="primary" />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};

export default SearchBar;
