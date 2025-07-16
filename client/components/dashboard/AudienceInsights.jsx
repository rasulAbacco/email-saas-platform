export default function AudienceInsights() {
    const insights = [
        { title: 'Total Subscribers', value: '8,240' },
        { title: 'New This Week', value: '524' },
        { title: 'Bounce Rate', value: '2.1%' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Audience Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {insights.map((insight, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-2xl font-bold">{insight.value}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{insight.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
