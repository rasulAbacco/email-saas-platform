export default function PublicHeader({ title, subtitle, center = false }) {
    return (
        <div className={`mb-8 ${center ? 'text-center' : ''}`}>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
            {subtitle && (
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
            )}
        </div>
    );
}
