// components/EmailVerify/HistoryList.jsx
import React from 'react';
import {
    Clock,
    Trash2,
    Eye,
    DownloadCloud
} from 'lucide-react';

const HistoryList = ({ history = [], onView, onDownload, onDelete }) => {
    return (
        <div className="w-full mt-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 p-4">
            <div className="flex items-center text-[#7F27FF] dark:text-[#AD49E1] mb-3">
                <Clock size={18} className="mr-2" />
                <h3 className="font-semibold text-sm">Verification History (Last 30 Days)</h3>
            </div>

            {history.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">No verification history found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-2 text-left font-medium text-gray-600 dark:text-gray-300">Date</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-600 dark:text-gray-300">Source</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-600 dark:text-gray-300">Emails</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-600 dark:text-gray-300">Status</th>
                                <th className="px-4 py-2 font-medium text-gray-600 dark:text-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            {history.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{item.date}</td>
                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-300 capitalize">{item.source}</td>
                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-300">{item.total}</td>
                                    <td className="px-4 py-2 text-gray-600 dark:text-gray-300">
                                        ✅ {item.valid} &nbsp; ⚠️ {item.risky} &nbsp; ❌ {item.invalid}
                                    </td>
                                    <td className="px-4 py-2 flex space-x-2">
                                        <button
                                            onClick={() => onView(item.id)}
                                            className="text-blue-500 hover:text-blue-600"
                                            title="View"
                                        >
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            onClick={() => onDownload(item.id)}
                                            className="text-green-500 hover:text-green-600"
                                            title="Download"
                                        >
                                            <DownloadCloud size={16} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(item.id)}
                                            className="text-red-500 hover:text-red-600"
                                            title="Delete"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default HistoryList;
