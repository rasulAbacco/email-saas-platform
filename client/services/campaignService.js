import axios from 'axios';

const API = '/api/campaigns';

export const getCampaigns = () => axios.get(API);
export const createCampaign = (data) => axios.post(API, data);
export const getCampaignById = (id) => axios.get(`${API}/${id}`);
export const updateCampaign = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteCampaign = (id) => axios.delete(`${API}/${id}`);
