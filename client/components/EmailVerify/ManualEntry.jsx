// components/EmailVerify/ManualEntry.jsx
import React from 'react';

const ManualEntry = ({ emails, setEmails }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Enter Emails (comma or newline separated)
      </label>
      <textarea
        rows={6}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100"
        placeholder="example1@email.com, example2@email.com"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
    </div>
  );
};

export default ManualEntry;
