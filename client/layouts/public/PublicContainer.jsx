export default function PublicContainer({ children, className = '' }) {
    return (
        <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}>
            {children}
        </div>
    );
}
