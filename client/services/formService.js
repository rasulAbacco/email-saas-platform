import axios from 'axios';

const API = '/api/forms';

export const getForms = () => axios.get(API);
export const createForm = (data) => axios.post(API, data);
export const deleteForm = (id) => axios.delete(`${API}/${id}`);
