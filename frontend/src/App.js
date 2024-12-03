import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { FileUpload } from './components/FileUpload/FileUpload';
import { SearchBar } from './components/SearchBar/SearchBar';
import { FileList } from './components/FileList/FileList';
import { useFileUpload } from './hooks/useFileUpload';
import { useFileSearch } from './hooks/useFileSearch';
import { api } from './utils/api';
import { downloadFile } from './utils/fileUtils';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { files, isLoading, error: searchError, searchFiles } = useFileSearch();
  const { uploadFile, isUploading, error: uploadError } = useFileUpload(() => searchFiles());

  const handleDownload = async (objectKey, filename) => {
    try {
      const blob = await api.downloadFile(objectKey);
      downloadFile(blob, filename);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          File Metadata System
        </Typography>

        <FileUpload onUpload={uploadFile} isUploading={isUploading} />
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSearch={() => searchFiles(searchTerm)}
        />

        {(uploadError || searchError) && (
          <Typography color="error" sx={{ mb: 2 }}>
            {uploadError || searchError}
          </Typography>
        )}

        <FileList 
          files={files}
          onDownload={handleDownload}
        />
      </Paper>
    </Container>
  );
}

export default App;