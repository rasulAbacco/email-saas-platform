import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', opens: 400, clicks: 240 },
    { name: 'Tue', opens: 300, clicks: 139 },
    { name: 'Wed', opens: 200, clicks: 980 },
    { name: 'Thu', opens: 278, clicks: 390 },
    { name: 'Fri', opens: 189, clicks: 480 },
    { name: 'Sat', opens: 239, clicks: 380 },
    { name: 'Sun', opens: 349, clicks: 430 },
];

export default function DashboardCharts() {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Engagement Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="opens" stroke="#3B82F6" />
                    <Line type="monotone" dataKey="clicks" stroke="#10B981" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
