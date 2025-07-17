// client/services/dashboardService.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const getDashboardMetrics = () =>
    axios.get(`${API_URL}/stats/metrics`, { withCredentials: true });

export const getPerformanceData = () =>
    axios.get(`${API_URL}/stats/performance`, { withCredentials: true });

export const getRecentCampaigns = () =>
    axios.get(`${API_URL}/campaigns/recent`, { withCredentials: true });
