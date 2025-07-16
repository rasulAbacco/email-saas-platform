export default function DashboardSection({ title, children, className = '' }) {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow p-5 mb-6 ${className}`}>
            {title && (
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    {title}
                </h2>
            )}
            {children}
        </div>
    );
}
