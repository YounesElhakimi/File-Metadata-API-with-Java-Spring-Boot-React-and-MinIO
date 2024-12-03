import React from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchBar({ searchTerm, onSearchChange, onSearch }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search files..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && onSearch()}
      InputProps={{
        endAdornment: (
          <IconButton onClick={onSearch}>
            <Search />
          </IconButton>
        ),
      }}
      sx={{ mb: 3 }}
    />
  );
}

export default SearchBar;