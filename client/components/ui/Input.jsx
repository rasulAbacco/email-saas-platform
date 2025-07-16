export default function Input({ label, type = 'text', name, value, onChange, placeholder }) {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            />
        </div>
    );
}
