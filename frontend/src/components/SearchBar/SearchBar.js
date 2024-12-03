import React from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchBar = ({ searchTerm, onSearchChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search files..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      onKeyPress={handleKeyPress}
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
};