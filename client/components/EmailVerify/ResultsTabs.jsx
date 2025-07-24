// components/EmailVerify/ResultsTabs.jsx
import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import VerificationTable from './VerificationTable';

const ResultsTabs = ({ results }) => {
    const [activeTab, setActiveTab] = useState('valid');

    const tabs = [
        {
            id: 'valid',
            label: 'Valid',
            icon: <CheckCircle size={14} className="text-green-500" />,
            data: results.valid || []
        },
        {
            id: 'risky',
            label: 'Risky',
            icon: <AlertTriangle size={14} className="text-yellow-500" />,
            data: results.risky || []
        },
        {
            id: 'invalid',
            label: 'Invalid',
            icon: <XCircle size={14} className="text-red-500" />,
            data: results.invalid || []
        }
    ];

    return (
        <div className="mt-6">
            <div className="flex space-x-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm transition ${activeTab === tab.id
                                ? 'bg-[#7F27FF] text-white shadow'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {tab.icon}
                        <span>{tab.label} ({tab.data.length})</span>
                    </button>
                ))}
            </div>

            <div>
                <VerificationTable data={tabs.find((t) => t.id === activeTab).data} />
            </div>
        </div>
    );
};

export default ResultsTabs;
