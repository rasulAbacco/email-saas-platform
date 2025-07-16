import { useState } from 'react';

export default function Dropdown({ label, options = [], onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(label);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="relative w-full max-w-xs">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border rounded shadow"
            >
                {selected}
            </button>
            {isOpen && (
                <ul className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 border rounded shadow z-10">
                    {options.map((opt, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(opt)}
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
