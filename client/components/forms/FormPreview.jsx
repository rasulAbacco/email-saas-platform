export default function FormPreview({ fields }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mt-6">
            <h2 className="text-lg font-semibold mb-4">Form Preview</h2>
            <form className="space-y-4">
                {fields.map((field, idx) => (
                    <div key={idx}>
                        <label className="block text-sm font-medium mb-1">{field.label}</label>
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                            disabled
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    disabled
                    className="mt-4 w-full py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                >
                    Submit (Preview)
                </button>
            </form>
        </div>
    );
}
