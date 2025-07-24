// components/EmailVerify/VerifyResults.jsx
import React from 'react';
import { Download } from 'lucide-react';

const ResultGroup = ({ title, data, color, onDownload }) => (
    <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className={`text-md font-semibold ${color}`}>{title} ({data.length})</h3>
            <button
                onClick={() => onDownload(data, title)}
                className="text-sm flex items-center gap-1 text-[#7F27FF] hover:underline"
            >
                <Download size={16} /> Download
            </button>
        </div>
        <ul className="max-h-48 overflow-auto text-sm list-disc pl-5 text-gray-700 dark:text-gray-200">
            {data.map((email, idx) => (
                <li key={idx}>{email}</li>
            ))}
        </ul>
    </div>
);

const VerifyResults = ({ results, handleDownload }) => {
    const { valid = [], invalid = [], risky = [] } = results;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <ResultGroup title="Valid" data={valid} color="text-green-600" onDownload={handleDownload} />
            <ResultGroup title="Invalid" data={invalid} color="text-red-600" onDownload={handleDownload} />
            <ResultGroup title="Risky" data={risky} color="text-yellow-500" onDownload={handleDownload} />
        </div>
    );
};

export default VerifyResults;
