// utils/emailTools.js
import * as XLSX from 'xlsx';

export const validateEmailFormat = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const verifyEmails = async (emails, options = {}) => {
    try {
        const res = await fetch('/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emails, options }),
        });

        const data = await res.json();

        return {
            valid: data.valid || [],
            invalid: data.invalid || [],
            risky: data.risky || [],
        };
    } catch (err) {
        console.error('Verification error:', err);
        return { valid: [], invalid: [], risky: [] };
    }
};

export const downloadData = (data, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, `${filename}.xlsx`);
};

export const saveToHistory = async ({ emails, result, type }) => {
    try {
        await fetch('/api/history', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                emails,
                result,
                type,
                createdAt: new Date().toISOString(),
            }),
        });
    } catch (err) {
        console.error('Save to history failed:', err);
    }
};

export const checkDomainStatus = async (domain) => {
    try {
        const res = await fetch(`/api/domain-check?domain=${domain}`);
        const data = await res.json();
        return data.isOpen || false;
    } catch (err) {
        console.error('Domain check failed:', err);
        return false;
    }
};
