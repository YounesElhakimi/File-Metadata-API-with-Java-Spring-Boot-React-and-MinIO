import { useState, useEffect } from 'react';
import { api } from '../utils/api';

export const useFileSearch = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFiles = async (searchTerm = '') => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await api.searchFiles(searchTerm);
      setFiles(data);
    } catch (error) {
      setError('Failed to search files. Please try again.');
      console.error('Error searching files:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchFiles();
  }, []);

  return { files, isLoading, error, searchFiles };
};