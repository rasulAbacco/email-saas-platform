export const parseCSV = (file, callback) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        const rows = text.split('\n').map((row) => row.split(','));
        callback(rows);
    };
    reader.readAsText(file);
};
