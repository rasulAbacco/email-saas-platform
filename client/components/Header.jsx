import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <header className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-900">
            <h1 className="text-xl font-bold">EmailAI Pro</h1>
            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="text-sm text-gray-600 dark:text-gray-300">
                    {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                </button>
                <Link href="/dashboard/settings">
                    <span className="text-sm text-blue-600 hover:underline">Settings</span>
                </Link>
            </div>
        </header>
    );
}
