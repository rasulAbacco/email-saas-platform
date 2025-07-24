// components/EmailVerify/DomainTools.jsx
import React, { useState } from 'react';
import { Search, UploadCloud } from 'lucide-react';

const DomainTools = ({ onSingleDomainCheck, onBulkDomainCheck }) => {
    const [domain, setDomain] = useState('');
    const [bulkFile, setBulkFile] = useState(null);

    const handleBulkChange = (e) => {
        const file = e.target.files[0];
        setBulkFile(file);
        onBulkDomainCheck(file);
    };

    return (
        <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 mt-8 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">🌐 Domain Tools</h2>

            {/* Single Domain Search */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Single Domain Search
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="example.com"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100"
                    />
                    <button
                        onClick={() => onSingleDomainCheck(domain)}
                        className="bg-[#7F27FF] hover:bg-[#6528F7] text-white px-4 py-2 rounded-md text-sm flex items-center gap-1"
                    >
                        <Search size={16} /> Search
                    </button>
                </div>
            </div>

            {/* Bulk Domain Upload */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Bulk Domain Upload (CSV/Excel)
                </label>
                <div className="flex items-center gap-2">
                    <input
                        type="file"
                        accept=".csv, .xlsx"
                        onChange={handleBulkChange}
                        className="hidden"
                        id="bulkUpload"
                    />
                    <label
                        htmlFor="bulkUpload"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
                    >
                        <UploadCloud size={16} />
                        {bulkFile ? bulkFile.name : 'Choose File'}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DomainTools;
