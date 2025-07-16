export default function Loader({ text = 'Loading...' }) {
    return (
        <div className="flex items-center justify-center space-x-2 py-6">
            <div className="animate-spin h-5 w-5 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            <span className="text-sm">{text}</span>
        </div>
    );
}
