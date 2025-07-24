import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import DashboardLayout from '../../components/DashboardLayout';
import axios from 'axios';
import html2canvas from 'html2canvas';

function DashboardPage() {
    const [metrics, setMetrics] = useState(null);
    const [performanceData, setPerformanceData] = useState([]);
    const [recentCampaigns, setRecentCampaigns] = useState([]);
    const [filter, setFilter] = useState('weekly');
    const [loading, setLoading] = useState(true);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning ☀️';
        if (hour < 18) return 'Good Afternoon 🌤️';
        return 'Good Evening 🌙';
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const token = localStorage.getItem('token');

        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const [metricsRes, performanceRes, campaignsRes] = await Promise.all([
                    axios.get(`http://localhost:5000/api/auth/stats/metrics`, {
                        headers: { Authorization: `Bearer ${token}` },
                        withCredentials: true,
                    }),
                    axios.get(`http://localhost:5000/api/auth/stats/performance?filter=${filter}`, {
                        headers: { Authorization: `Bearer ${token}` },
                        withCredentials: true,
                    }),
                    axios.get('http://localhost:5000/api/campaigns/recent', {
                        headers: { Authorization: `Bearer ${token}` },
                        withCredentials: true,
                    }),
                ]);
                setMetrics(metricsRes.data);
                setPerformanceData(performanceRes.data);
                setRecentCampaigns(campaignsRes.data);
            } catch (err) {
                console.error('Dashboard data fetch failed', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [filter]);

    const exportChart = () => {
        const chartEl = document.getElementById('chartContainer');
        html2canvas(chartEl).then(canvas => {
            const link = document.createElement('a');
            link.download = 'performance_chart.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    return (
        <DashboardLayout>
            <Head><title>Dashboard - EmailAI Pro</title></Head>

            <div className="p-6 w-full mx-auto mt-[5%]">
                <h1 className="text-3xl font-bold mb-2">{getGreeting()}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Here’s how your email campaigns are performing.</p>

                {/* Alerts */}
                <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 px-4 py-3 rounded-lg mb-6">
                    🚨 Your open rate has dropped 5% this week. Consider optimizing subject lines.
                </div>

                {/* Time Filter */}
                <div className="mb-4 flex gap-3">
                    {['daily', 'weekly', 'monthly'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${filter === type
                                ? 'bg-[#7F27FF] text-white'
                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white'
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                    {loading ? (
                        Array(5).fill().map((_, i) => (
                            <div key={i} className="bg-gray-200 dark:bg-gray-700 h-24 rounded-lg animate-pulse" />
                        ))
                    ) : (
                        <>
                            <MetricCard title="Emails Sent" value={metrics?.emailsSent || 0} />
                            <MetricCard title="Open Rate" value={`${metrics?.openRate || 0}%`} />
                            <MetricCard title="Click Rate" value={`${metrics?.clickRate || 0}%`} />
                            <MetricCard title="Revenue" value={`$${metrics?.revenue || 0}`} />
                            <MetricCard title="Audience Growth" value={`+${metrics?.audienceGrowth || 0}`} />
                        </>
                    )}
                </div>

                {/* Charts */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-10" id="chartContainer">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Performance & Revenue</h2>
                        <button
                            onClick={exportChart}
                            className="text-sm px-3 py-1 rounded bg-[#7F27FF] text-white hover:bg-[#6528F7]"
                        >
                            Export Chart
                        </button>
                    </div>

                    <div className="w-full h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="openRate" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="clickRate" stroke="#f59e0b" strokeWidth={2} />
                                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* Audience Growth Summary */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">📊 Audience Growth Summary</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'New Subscribers', value: '+245', bg: 'bg-green-100', color: 'text-green-700' },
                            { label: 'Unsubscribed', value: '-32', bg: 'bg-red-100', color: 'text-red-700' },
                            { label: 'Total Growth', value: '+213', bg: 'bg-blue-100', color: 'text-blue-700' }
                        ].map((item, i) => (
                            <div key={i} className={`p-4 rounded-lg ${item.bg} dark:bg-gray-700`}>
                                <h3 className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">{item.label}</h3>
                                <p className={`text-xl font-bold ${item.color} dark:text-white`}>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* AI Suggestions */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">🧠 Smart Suggestions</h2>
                    <ul className="space-y-3">
                        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            🕒 Best send time this week is <strong>Tuesday 10 AM</strong>
                        </li>
                        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            ✉️ Subject line "You're invited to our AI launch!" had the highest open rate (62%)
                        </li>
                        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            🔁 Re-engaging old subscribers increased revenue by 12%
                        </li>
                    </ul>
                </div>


                {/* Bounce & Spam Report */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">🚨 Bounce & Spam Report</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 p-4 rounded-lg">
                            📩 Hard Bounces: 34
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 p-4 rounded-lg">
                            🚫 Marked as Spam: 17
                        </div>
                    </div>
                </div>


                {/* Top Devices & Locations */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">🌍 Audience Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            <h3 className="font-medium mb-2">Top Devices</h3>
                            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li>📱 Mobile – 68%</li>
                                <li>💻 Desktop – 27%</li>
                                <li>📲 Tablet – 5%</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            <h3 className="font-medium mb-2">Top Locations</h3>
                            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li>🇺🇸 United States – 45%</li>
                                <li>🇬🇧 United Kingdom – 18%</li>
                                <li>🇨🇦 Canada – 12%</li>
                                <li>🌎 Others – 25%</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Geo Performance Map */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-10 mt-10">
                    <h2 className="text-xl font-semibold mb-4">🌍 Geo Performance</h2>
                    <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">Top regions engaging with your emails:</p>
                    <ul className="text-sm space-y-2">
                        <li>🇺🇸 United States – 1,580 Opens</li>
                        <li>🇬🇧 United Kingdom – 720 Opens</li>
                        <li>🇨🇦 Canada – 540 Opens</li>
                        <li>🇮🇳 India – 390 Opens</li>
                    </ul>
                </div>


                {/* Top Campaigns */}
                {/* <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Top Performing Campaigns</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {recentCampaigns.slice(0, 3).map((c, i) => (
                            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                                <h3 className="text-md font-bold">{c.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Status: {c.status}</p>
                                <p className="text-sm mt-1">Open Rate: {c.openRate}</p>
                                <p className="text-sm">Click Rate: {c.clickRate}</p>
                                <p className="text-sm">Revenue: ${c.revenue}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Top Campaigns */}
                <div className="mt-10 mb-10">
                    <h2 className="text-xl font-semibold mb-4">🔥 Top Campaigns</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
                                <tr>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Sent</th>
                                    <th className="px-4 py-3">Open Rate</th>
                                    <th className="px-4 py-3">Click Rate</th>
                                    <th className="px-4 py-3">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Summer Sale', sent: 3200, openRate: '48%', clickRate: '21%', revenue: '$2,150' },
                                    { name: 'July Promo', sent: 2900, openRate: '45%', clickRate: '19%', revenue: '$1,870' },
                                    { name: 'AI Launch', sent: 2500, openRate: '52%', clickRate: '23%', revenue: '$2,980' },
                                    { name: 'Re-Engage List', sent: 2100, openRate: '41%', clickRate: '15%', revenue: '$1,200' },
                                    { name: 'Flash Discount', sent: 1800, openRate: '49%', clickRate: '20%', revenue: '$1,430' },
                                ].map((campaign, index) => (
                                    <tr key={index} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">{campaign.name}</td>
                                        <td className="px-4 py-3">{campaign.sent}</td>
                                        <td className="px-4 py-3">{campaign.openRate}</td>
                                        <td className="px-4 py-3">{campaign.clickRate}</td>
                                        <td className="px-4 py-3">{campaign.revenue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                {/* Recent Campaigns Table */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Recent Campaigns</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
                                <tr>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Open Rate</th>
                                    <th className="px-4 py-3">Click Rate</th>
                                    <th className="px-4 py-3">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentCampaigns.map((c, i) => (
                                    <tr key={i} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">{c.name}</td>
                                        <td className="px-4 py-3">{c.status}</td>
                                        <td className="px-4 py-3">{c.openRate}</td>
                                        <td className="px-4 py-3">{c.clickRate}</td>
                                        <td className="px-4 py-3">${c.revenue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

DashboardPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;

// Metric Card Component
function MetricCard({ title, value }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
            <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
    );
}
