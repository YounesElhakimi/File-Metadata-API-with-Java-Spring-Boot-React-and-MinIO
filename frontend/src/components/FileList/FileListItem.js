import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';
import { formatFileSize } from '../../utils/fileUtils';

export const FileListItem = ({ file, onDownload }) => {
  return (
    <ListItem
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
  );
};