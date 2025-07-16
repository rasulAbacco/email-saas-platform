import axios from 'axios';

const API = '/api/analytics';

export const getAnalytics = (range) => axios.get(`${API}?range=${range}`);
export const getClickData = () => axios.get(`${API}/clicks`);
