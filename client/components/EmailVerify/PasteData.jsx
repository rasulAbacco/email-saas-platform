import React from 'react';

const normalizeEmails = (input) => {
    return input
        .split(/[\n,\t]+/)
        .map(email => email.trim().toLowerCase())
        .filter(email => email.length > 0);
};

const PasteData = ({ pastedData, setPastedData }) => {
    const emailCount = normalizeEmails(pastedData).length;

    return (
        <div>
            <label
                htmlFor="pastedEmails"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
                Paste Your Data (Tab, Comma, or Newline Separated)
            </label>

            <textarea
                id="pastedEmails"
                name="pastedEmails"
                rows={6}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100"
                placeholder={`example1@email.com\nexample2@email.com`}
                value={pastedData}
                onChange={(e) => setPastedData(e.target.value)}
                onBlur={(e) => setPastedData(e.target.value.trim())}
            />

            <p className="text-xs text-gray-500 mt-1">
                {emailCount} {emailCount === 1 ? 'email detected' : 'emails detected'}
            </p>
        </div>
    );
};

export default PasteData;
