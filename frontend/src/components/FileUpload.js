import React from 'react';
import { Button } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

function FileUpload({ onUpload }) {
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
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUpload />}
          sx={{ mb: 3 }}
        >
          Upload File
        </Button>
      </label>
    </>
  );
}

export default FileUpload;