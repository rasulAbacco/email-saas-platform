// components/EmailVerify/VerificationOptions.jsx
import React from 'react';

const VerificationOptions = ({ options, setOptions }) => {
    const toggleOption = (key) => {
        setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            {[
                { label: 'Check MX Records', key: 'mx' },
                { label: 'Check SMTP', key: 'smtp' },
                { label: 'Check Domain Exists', key: 'domain' },
                { label: 'Catch-All Detection', key: 'catchAll' },
                { label: 'Disposable Email Detection', key: 'disposable' },
                { label: 'Role-based Detection', key: 'role' },
            ].map((item) => (
                <label key={item.key} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                    <input
                        type="checkbox"
                        checked={options[item.key]}
                        onChange={() => toggleOption(item.key)}
                        className="form-checkbox text-[#7F27FF] rounded-sm"
                    />
                    <span>{item.label}</span>
                </label>
            ))}
        </div>
    );
};

export default VerificationOptions;
