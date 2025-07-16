export default function Button({ children, onClick, type = 'button', className = '', disabled }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded font-semibold transition duration-200 ${disabled
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } ${className}`}
        >
            {children}
        </button>
    );
}
