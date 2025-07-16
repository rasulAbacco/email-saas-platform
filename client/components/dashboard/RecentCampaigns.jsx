const recent = [
    { name: 'Webinar Reminder', date: '2025-07-10', status: 'Sent' },
    { name: 'Product Launch', date: '2025-07-08', status: 'Scheduled' },
    { name: 'User Survey', date: '2025-07-04', status: 'Sent' },
];

export default function RecentCampaigns() {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Recent Campaigns</h3>
            <table className="w-full text-sm">
                <thead className="text-left text-gray-500 dark:text-gray-300">
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recent.map((r, idx) => (
                        <tr key={idx} className="border-t dark:border-gray-700">
                            <td className="py-2">{r.name}</td>
                            <td className="py-2">{r.date}</td>
                            <td className="py-2">{r.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
