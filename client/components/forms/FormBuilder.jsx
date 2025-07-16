import { useState } from 'react';

export default function FormBuilder({ onSave }) {
    const [fields, setFields] = useState([{ type: 'text', label: 'Name', placeholder: 'Enter name' }]);

    const addField = () => {
        setFields([...fields, { type: 'text', label: '', placeholder: '' }]);
    };

    const handleChange = (index, key, value) => {
        const updated = [...fields];
        updated[index][key] = value;
        setFields(updated);
    };

    const handleSave = () => {
        onSave(fields);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-full">
            <h2 className="text-xl font-semibold mb-4">Form Builder</h2>

            {fields.map((field, idx) => (
                <div key={idx} className="mb-4">
                    <input
                        className="w-full mb-2 px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                        placeholder="Label"
                        value={field.label}
                        onChange={(e) => handleChange(idx, 'label', e.target.value)}
                    />
                    <input
                        className="w-full px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                        placeholder="Placeholder"
                        value={field.placeholder}
                        onChange={(e) => handleChange(idx, 'placeholder', e.target.value)}
                    />
                </div>
            ))}

            <div className="flex gap-4">
                <button
                    onClick={addField}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    + Add Field
                </button>
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                >
                    Save Form
                </button>
            </div>
        </div>
    );
}
