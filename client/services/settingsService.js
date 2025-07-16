import axios from 'axios';

const API = '/api/settings';

export const getSettings = () => axios.get(API);
export const updateProfile = (data) => axios.put(`${API}/profile`, data);
export const regenerateApiKey = () => axios.post(`${API}/api-key`);
export const deleteAccount = () => axios.delete(`${API}/delete`);
