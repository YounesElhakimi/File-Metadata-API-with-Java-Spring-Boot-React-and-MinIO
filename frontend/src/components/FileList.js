import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';
import { formatFileSize } from '../utils/fileUtils';

function FileList({ files, onDownload }) {
  return (
    <List>
      {files.map((file) => (
        <ListItem
          key={file.id}
          secondaryAction={
            <IconButton onClick={() => onDownload(file.s3ObjectKey, file.filename)}>
              <Download />
            </IconButton>
          }
        >
          <ListItemText
            primary={file.filename}
            secondary={`Type: ${file.contentType} | Size: ${formatFileSize(file.size)} | Uploaded: ${new Date(file.uploadDate).toLocaleString()}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default FileList;