export default function DashboardContainer({ children, className = '' }) {
    return (
        <div className={`p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
}
