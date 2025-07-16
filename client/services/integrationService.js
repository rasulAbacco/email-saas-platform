import axios from 'axios';

const API = '/api/integrations';

export const getIntegrations = () => axios.get(API);
export const connectIntegration = (id, data) => axios.post(`${API}/${id}/connect`, data);
export const disconnectIntegration = (id) => axios.post(`${API}/${id}/disconnect`);
