// client/pages/dashboard/index.jsx

import Head from 'next/head';
import { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from '../../components/DashboardLayout';

const data = [
    { name: 'Mon', openRate: 34, clickRate: 22 },
    { name: 'Tue', openRate: 45, clickRate: 28 },
    { name: 'Wed', openRate: 52, clickRate: 33 },
    { name: 'Thu', openRate: 48, clickRate: 25 },
    { name: 'Fri', openRate: 58, clickRate: 40 },
    { name: 'Sat', openRate: 40, clickRate: 20 },
    { name: 'Sun', openRate: 30, clickRate: 15 },
];

function DashboardPage() {
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <DashboardLayout>
            <Head><title>Dashboard - EmailAI Pro</title></Head>

            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">📊 Dashboard Overview</h1>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <MetricCard title="Emails Sent" value="12,300" />
                    <MetricCard title="Open Rate" value="47%" />
                    <MetricCard title="Click Rate" value="22%" />
                    <MetricCard title="Revenue" value="$3,200" />
                </div>

                {/* Charts */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Weekly Performance</h2>
                    <div className="w-full h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="openRate" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="clickRate" stroke="#f59e0b" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Campaigns */}
                <div className="mt-10">
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
                                {[
                                    { name: 'Summer Blast', status: 'Sent', openRate: '52%', clickRate: '31%', revenue: '$720' },
                                    { name: 'Product Launch', status: 'Draft', openRate: '-', clickRate: '-', revenue: '-' },
                                    { name: 'Weekly Digest', status: 'Sent', openRate: '48%', clickRate: '22%', revenue: '$480' },
                                ].map((c, i) => (
                                    <tr key={i} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">{c.name}</td>
                                        <td className="px-4 py-3">{c.status}</td>
                                        <td className="px-4 py-3">{c.openRate}</td>
                                        <td className="px-4 py-3">{c.clickRate}</td>
                                        <td className="px-4 py-3">{c.revenue}</td>
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

// Attach the layout
DashboardPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;

// Metric Card component
function MetricCard({ title, value }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
            <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
    );
}
