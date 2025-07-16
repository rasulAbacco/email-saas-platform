export default function Switch({ enabled, onToggle }) {
    return (
        <div
            className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer ${enabled ? 'bg-blue-600' : ''
                }`}
            onClick={onToggle}
        >
            <div
                className={`bg-white dark:bg-gray-200 w-4 h-4 rounded-full shadow-md transform transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
            ></div>
        </div>
    );
}
