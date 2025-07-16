const metrics = [
    { label: 'Emails Sent', value: '15,240' },
    { label: 'Open Rate', value: '38.2%' },
    { label: 'Click Rate', value: '12.6%' },
    { label: 'Revenue', value: '$4,890' },
];

export default function DashboardMetrics() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, idx) => (
                <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center"
                >
                    <div className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        {metric.value}
                    </div>
                </div>
            ))}
        </div>
    );
}
