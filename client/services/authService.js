import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (userData) => {
    const res = await axios.post(`${API_URL}/register`, userData, { withCredentials: true });
    return res.data;
};

export const loginUser = async (credentials) => {
    const res = await axios.post(`${API_URL}/login`, credentials, { withCredentials: true });
    return res.data;
};

export const fetchCurrentUser = async (token) => {
    const res = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
    });
    return res.data;
};

export const logoutUser = () => {
    localStorage.removeItem('token');
};
