import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

export const FileUpload = ({ onUpload, isUploading }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <>
      <input
        type="file"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        disabled={isUploading}
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={isUploading ? <CircularProgress size={20} /> : <CloudUpload />}
          disabled={isUploading}
          sx={{ mb: 3 }}
        >
          {isUploading ? 'Uploading...' : 'Upload File'}
        </Button>
      </label>
    </>
  );
};