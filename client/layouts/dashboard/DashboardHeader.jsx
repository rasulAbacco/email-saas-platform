export default function DashboardHeader({ title, subtitle, actions }) {
    return (
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
                {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
            </div>
            {actions && <div>{actions}</div>}
        </div>
    );
}
