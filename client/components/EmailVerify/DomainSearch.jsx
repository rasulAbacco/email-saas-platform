// components/EmailVerify/DomainSearch.jsx
import React, { useState } from 'react';
import { Upload, Globe } from 'lucide-react';

const DomainSearch = ({ onSingleDomainCheck, onBulkDomainCheck }) => {
    const [domain, setDomain] = useState('');
    const [file, setFile] = useState(null);

    const handleDomainCheck = () => {
        if (!domain.trim()) return alert('Enter a domain');
        if (typeof onSingleDomainCheck === 'function') {
            onSingleDomainCheck(domain.trim());
        } else {
            console.warn('onSingleDomainCheck function is not provided');
        }
    };

    const handleBulkFileUpload = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            if (typeof onBulkDomainCheck === 'function') {
                onBulkDomainCheck(selected);
            } else {
                console.warn('onBulkDomainCheck function is not provided');
            }
        }
    };

    return (
        <div className="mt-10 bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#7F27FF] mb-3">🌐 Domain Tools</h3>

            <div className="grid md:grid-cols-2 gap-4">
                {/* Single Domain Search */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Single Domain Lookup
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder="e.g., example.com"
                            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none"
                        />
                        <button
                            onClick={handleDomainCheck}
                            className="bg-[#6528F7] text-white px-4 py-2 rounded-md text-sm hover:bg-[#7F27FF] flex items-center gap-1"
                        >
                            <Globe size={16} /> Check
                        </button>
                    </div>
                </div>

                {/* Bulk Domain Upload */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Bulk Domain Upload (CSV/XLSX)
                    </label>
                    <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:border-[#7F27FF]">
                        <Upload size={16} />
                        <span>{file ? file.name : 'Choose file'}</span>
                        <input type="file" accept=".csv,.xlsx" onChange={handleBulkFileUpload} className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DomainSearch;
