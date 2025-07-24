// utils/downloadHelper.js
import * as XLSX from 'xlsx';

export const downloadAsExcel = (data, filename = 'results') => {
    const worksheet = XLSX.utils.json_to_sheet(data.map((value) => ({ value })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${filename}.xlsx`);
};

export const downloadAsCSV = (data, filename = 'results') => {
    const csvContent = data.map((item) => `"${item}"`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
