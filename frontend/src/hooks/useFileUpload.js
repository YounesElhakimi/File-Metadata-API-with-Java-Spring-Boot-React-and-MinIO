import { useState } from 'react';
import { api } from '../utils/api';

export const useFileUpload = (onSuccess) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    try {
      setIsUploading(true);
      setError(null);
      await api.uploadFile(file);
      onSuccess?.();
    } catch (error) {
      setError('Failed to upload file. Please try again.');
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading, error };
};