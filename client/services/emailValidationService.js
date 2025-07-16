import axios from 'axios';

const API = '/api/validate';

export const validateSingleEmail = (email) => axios.post(`${API}/single`, { email });
export const validateBulkEmails = (formData) => axios.post(`${API}/bulk`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
export const getValidationStatus = (jobId) => axios.get(`${API}/status/${jobId}`);
