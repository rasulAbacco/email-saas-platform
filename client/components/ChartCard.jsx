import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChartCard({ title, data, dataKeys }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-full">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {dataKeys.map((key, idx) => (
                            <Line key={key.name} type="monotone" dataKey={key.name} stroke={key.color} strokeWidth={2} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
