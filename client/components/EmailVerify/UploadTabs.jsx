// components/EmailVerify/UploadTabs.jsx
import React from 'react';
import { Upload, Edit3, Database } from 'lucide-react';

const UploadTabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'file', label: 'File Upload', icon: Upload },
        { id: 'manual', label: 'Manual Entry', icon: Edit3 },
        { id: 'paste', label: 'Paste Data', icon: Database }
    ];

    return (
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${activeTab === tab.id
                                ? 'bg-white dark:bg-gray-700 text-[#7F27FF] font-semibold shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-[#7F27FF]'
                            }`}
                    >
                        <Icon size={16} />
                        <span className="text-sm">{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default UploadTabs;
