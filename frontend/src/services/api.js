import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const api = {
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_URL}/files/upload`, formData);
    return response.data;
  },

  async searchFiles(filename = '') {
    const response = await axios.get(`${API_URL}/files/search?filename=${filename}`);
    return response.data;
  },

  async downloadFile(objectKey) {
    const response = await axios.get(`${API_URL}/files/download/${objectKey}`, {
      responseType: 'blob'
    });
    return response.data;
  }
};