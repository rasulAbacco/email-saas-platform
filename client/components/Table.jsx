export default function Table({ columns, data }) {
    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
                    <tr>
                        {columns.map((col) => (
                            <th key={col} className="px-4 py-3">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="border-b dark:border-gray-700">
                            {columns.map((col) => (
                                <td key={col} className="px-4 py-3">{row[col]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
