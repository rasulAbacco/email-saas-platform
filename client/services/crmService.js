import axios from 'axios';

const API = '/api/crm';

export const getContacts = () => axios.get(`${API}/contacts`);
export const addContact = (data) => axios.post(`${API}/contacts`, data);
export const updateContact = (id, data) => axios.put(`${API}/contacts/${id}`, data);
export const deleteContact = (id) => axios.delete(`${API}/contacts/${id}`);
