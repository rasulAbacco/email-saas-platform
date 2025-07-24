// components/EmailVerify/EmailVerifyPage.jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UploadTabs from './UploadTabs';
import FileUploader from './FileUploader';
import ManualEntry from './ManualEntry';
import PasteData from './PasteData';
import FormatSelector from './FormatSelector';
import VerificationOptions from './VerificationOptions';
import ResultsTabs from './ResultsTabs';
import DownloadButtons from './DownloadButtons';
import HistoryList from './HistoryList';
import DomainSearch from './DomainSearch';


import validateEmails from '../../utils/emailValidator';
import { downloadResultsAs } from '../../utils/downloadHelper';

const EmailVerifyPage = () => {
    const [activeTab, setActiveTab] = useState('file');
    const [file, setFile] = useState(null);
    const [manualEmails, setManualEmails] = useState('');
    const [pastedData, setPastedData] = useState('');
    const [format, setFormat] = useState('');
    const [selectedColumn, setSelectedColumn] = useState('');
    const [columns] = useState(['Email', 'Name', 'Other']); // mock
    const [options, setOptions] = useState({
        syntax: true,
        mx: true,
        smtp: false,
        disposable: false
    });

    const [results, setResults] = useState({ valid: [], risky: [], invalid: [] });
    const [history, setHistory] = useState([]);

    // Load history on mount
    useEffect(() => {
        const fetchHistory = async () => {
            const res = await fetch('/api/history');
            const data = await res.json();
            setHistory(data);
        };
        fetchHistory();
    }, []);

    const handleVerify = async () => {
        let rawEmails = [];

        if (activeTab === 'manual') {
            rawEmails = manualEmails.split(/[\n,]+/);
        } else if (activeTab === 'paste') {
            rawEmails = pastedData.split(/[\n\t,]+/);
        } else if (activeTab === 'file') {
            rawEmails = ['demo1@example.com', 'test2@example.com']; // mock fallback
        }

        const cleaned = rawEmails.map(email => email.trim()).filter(Boolean);
        const localValidation = validateEmails(cleaned, options);

        const response = await fetch('http://localhost:5000/api/verify', {
            withCredentials: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emails: localValidation.all, options })
        });

        const json = await response.json();

        const resultsArray = Array.isArray(json) ? json : json.results || [];

        if (!Array.isArray(resultsArray)) {
            console.error("Unexpected response format from /api/verify", json);
            return;
        }

        const grouped = {
            valid: resultsArray.filter(e => e.status === 'valid'),
            risky: resultsArray.filter(e => e.status === 'risky'),
            invalid: resultsArray.filter(e => e.status === 'invalid')
        };

        setResults(grouped);

        const newHistoryItem = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            source: activeTab,
            total: resultsArray.length,
            valid: grouped.valid.length,
            risky: grouped.risky.length,
            invalid: grouped.invalid.length
        };

        await fetch('http://localhost:5000/api/history', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHistoryItem)
        });

        setHistory([newHistoryItem, ...history.slice(0, 29)]);
    };


    const handleDownload = (formatType) => {
        downloadResultsAs(results, formatType);
    };

    const handleHistoryAction = {
        view: (id) => alert(`Viewing result for history #${id}`),
        download: (id) => alert(`Download past result #${id}`),
        delete: async (id) => {
            await fetch(`http://localhost:5000/api/history?id=${id}`, { method: 'DELETE' });
            setHistory(history.filter((h) => h.id !== id));
        }
    };

    // Single Domain Check Handler
    const handleSingleDomainCheck = async (domain) => {
        try {
            console.log('Checking domain:', domain);

            const res = await axios.post('http://localhost:5000/api/domain-check', { domains: [domain] });

            console.log('Single Domain Result:', res.data);
            // Optionally: set state or show result below
        } catch (err) {
            console.error('Domain check failed:', err);
        }
    };

    // Bulk Domain File Handler
    const handleBulkDomainCheck = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const res = await axios.post('http://localhost:5000/api/domain-check/bulk', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log('Bulk Domain Result:', res.data);
            // Optionally: setBulkResults(res.data)
        } catch (err) {
            console.error('Bulk domain upload failed:', err);
        }
    };



    return (
        <div className="p-6 max-w-6xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-[#7F27FF] dark:text-[#AD49E1] mb-6">
                Email Verification Tool
            </h2>

            <UploadTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="mt-4">
                {activeTab === 'file' && <FileUploader onFileSelect={setFile} />}
                {activeTab === 'manual' && <ManualEntry emails={manualEmails} setEmails={setManualEmails} />}
                {activeTab === 'paste' && <PasteData pastedData={pastedData} setPastedData={setPastedData} />}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormatSelector
                    format={format}
                    setFormat={setFormat}
                    columns={columns}
                    selectedColumn={selectedColumn}
                    setSelectedColumn={setSelectedColumn}
                />
                <VerificationOptions options={options} setOptions={setOptions} />
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    onClick={handleVerify}
                    className="bg-[#7F27FF] hover:bg-[#6528F7] text-white px-6 py-2 rounded-lg shadow transition"
                >
                    Start Verification
                </button>
            </div>

            <ResultsTabs results={results} />

            <DownloadButtons onDownload={handleDownload} />

            <HistoryList
                history={history}
                onView={handleHistoryAction.view}
                onDownload={handleHistoryAction.download}
                onDelete={handleHistoryAction.delete}
            />

            <div className="mt-12">
                <DomainSearch
                    onSingleDomainCheck={handleSingleDomainCheck}
                    onBulkDomainCheck={handleBulkDomainCheck}
                />
            </div>
        </div>
    );
};

export default EmailVerifyPage;
