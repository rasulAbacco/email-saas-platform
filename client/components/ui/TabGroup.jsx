import { useState } from 'react';

export default function TabGroup({ tabs = [], onTabChange }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (idx) => {
        setActiveIndex(idx);
        onTabChange(idx);
    };

    return (
        <div className="flex border-b dark:border-gray-700 mb-4">
            {tabs.map((tab, idx) => (
                <button
                    key={idx}
                    onClick={() => handleTabClick(idx)}
                    className={`px-4 py-2 text-sm font-medium ${activeIndex === idx
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
