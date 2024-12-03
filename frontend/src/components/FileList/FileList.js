import React from 'react';
import { List } from '@mui/material';
import { FileListItem } from './FileListItem';

export const FileList = ({ files, onDownload }) => {
  return (
    <List>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} onDownload={onDownload} />
      ))}
    </List>
  );
};