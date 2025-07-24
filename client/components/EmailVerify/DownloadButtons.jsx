// components/EmailVerify/DownloadButtons.jsx
import React from 'react';
import {
    FileText,
    FileJson,
    FileSpreadsheet,
    FileDown
} from 'lucide-react';

const DownloadButtons = ({ onDownload }) => {
    const formats = [
        { id: 'csv', label: 'CSV', icon: FileText },
        { id: 'xlsx', label: 'Excel', icon: FileSpreadsheet },
        { id: 'pdf', label: 'PDF', icon: FileDown },
        { id: 'json', label: 'JSON', icon: FileJson }
    ];

    return (
        <div className="flex flex-wrap gap-3 mt-4">
            {formats.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => onDownload(id)}
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-[#7F27FF] text-white hover:bg-[#6528F7] transition"
                >
                    <Icon size={16} className="mr-2" />
                    {label}
                </button>
            ))}
        </div>
    );
};

export default DownloadButtons;
