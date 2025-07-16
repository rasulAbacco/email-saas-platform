const campaigns = [
    { name: 'Launch Email', opens: 92, clicks: 36 },
    { name: 'Summer Sale', opens: 88, clicks: 27 },
    { name: 'Reactivation', opens: 79, clicks: 22 },
];

export default function TopCampaigns() {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Top Campaigns</h3>
            <ul className="space-y-3">
                {campaigns.map((c, idx) => (
                    <li key={idx} className="flex justify-between text-sm">
                        <span>{c.name}</span>
                        <span>{c.opens} opens / {c.clicks} clicks</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

