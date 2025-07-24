// components/EmailVerify/FormatSelector.jsx
import React from 'react';

const FormatSelector = ({ format, setFormat, columnName, setColumnName }) => {
  const formats = ['CSV', 'Excel', 'PDF', 'Raw Text'];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Select Upload Format
        </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100"
        >
          {formats.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {(format === 'CSV' || format === 'Excel') && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Column Name Containing Emails
          </label>
          <input
            type="text"
            placeholder="e.g. email"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100"
          />
        </div>
      )}
    </div>
  );
};

export default FormatSelector;
