export default function PublicSection({ children, className = '', bg = 'transparent' }) {
    return (
        <section className={`w-full ${bg} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </div>
        </section>
    );
}
