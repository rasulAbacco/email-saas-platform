// components/EmailVerify/VerificationTable.jsx
import React from 'react';
import {
    CheckCircle,
    AlertTriangle,
    XCircle,
    Mail
} from 'lucide-react';

const statusStyles = {
    valid: {
        icon: <CheckCircle className="text-green-500" size={16} />,
        text: 'Valid',
        badge: 'bg-green-100 text-green-700'
    },
    risky: {
        icon: <AlertTriangle className="text-yellow-500" size={16} />,
        text: 'Risky',
        badge: 'bg-yellow-100 text-yellow-700'
    },
    invalid: {
        icon: <XCircle className="text-red-500" size={16} />,
        text: 'Invalid',
        badge: 'bg-red-100 text-red-700'
    }
};

const VerificationTable = ({ data = [] }) => {
    return (
        <div className="w-full mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                            Email
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    {data.map((item, idx) => {
                        const status = statusStyles[item.status] || statusStyles.invalid;

                        return (
                            <tr key={idx}>
                                <td className="px-4 py-2 flex items-center text-sm text-gray-800 dark:text-gray-100">
                                    <Mail size={14} className="mr-2 text-[#6528F7]" />
                                    {item.email}
                                </td>
                                <td className="px-4 py-2 text-sm">
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.badge}`}>
                                        {status.icon}
                                        <span className="ml-1">{status.text}</span>
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={2} className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                                No verification results to show.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VerificationTable;
