// components/EmailVerify/VerificationHistory.jsx
import React from 'react';
import { FileText, Download } from 'lucide-react';

const VerificationHistory = ({ history, onDownload }) => {
    return (
        <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 mt-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">📅 Verification History (Last 30 Days)</h2>
                <button
                    onClick={onDownload}
                    className="text-sm flex items-center gap-1 text-[#7F27FF] hover:underline"
                >
                    <Download size={16} /> Download All
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm border dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        <tr>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Type</th>
                            <th className="px-4 py-2 text-left">Total</th>
                            <th className="px-4 py-2 text-left">Valid</th>
                            <th className="px-4 py-2 text-left">Invalid</th>
                            <th className="px-4 py-2 text-left">Risky</th>
                            <th className="px-4 py-2 text-left">Source</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 dark:text-gray-200">
                        {history.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-6">
                                    No history available.
                                </td>
                            </tr>
                        ) : (
                            history.map((item, index) => (
                                <tr key={index} className="border-t dark:border-gray-700">
                                    <td className="px-4 py-2">{item.date}</td>
                                    <td className="px-4 py-2">{item.type}</td>
                                    <td className="px-4 py-2">{item.total}</td>
                                    <td className="px-4 py-2 text-green-600">{item.valid}</td>
                                    <td className="px-4 py-2 text-red-500">{item.invalid}</td>
                                    <td className="px-4 py-2 text-yellow-500">{item.risky}</td>
                                    <td className="px-4 py-2 flex items-center gap-1">
                                        <FileText size={14} />
                                        {item.source}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VerificationHistory;
