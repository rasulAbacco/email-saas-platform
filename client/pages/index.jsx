// client/pages/index.jsx

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') setIsDark(true);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    };

    return (
        <div className={isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
            <Head>
                <title>EmailAI Pro - Modern Email & CRM Automation</title>
            </Head>

            {/* Top Navigation */}
            <header className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
                <h1 className="text-xl font-bold">📧 EmailAI Pro</h1>
                <nav className="space-x-4 hidden md:block">
                    <Link href="#features" className="hover:underline">Features</Link>
                    <Link href="#pricing" className="hover:underline">Pricing</Link>
                    <Link href="#about" className="hover:underline">About</Link>
                    <Link href="/login" className="hover:underline">Login</Link>
                    <Link href="/signup" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Get Started</Link>
                </nav>
                <button onClick={toggleTheme} className="ml-4 text-sm">
                    {isDark ? '🌞 Light' : '🌙 Dark'}
                </button>
            </header>

            {/* Hero Section */}
            <main className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold leading-tight mb-4">
                        Automate Your Email Campaigns & CRM <span className="text-blue-600">Smarter</span>
                    </h2>
                    <p className="text-lg mb-6">
                        Build high-converting campaigns, validate emails, manage contacts, and analyze performance — all in one powerful platform.
                    </p>
                    <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
                        Start for Free
                    </Link>
                </motion.div>

                {/* Placeholder for 3D model / animation */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-300 to-purple-400 rounded-2xl shadow-lg flex items-center justify-center">
                        {/* Replace this with Lottie / Rive / Three.js animation */}
                        <p className="text-white text-xl font-semibold">3D Animation Here</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t py-6 mt-10 px-6 flex justify-between items-center text-sm dark:border-gray-700">
                <p>© 2025 EmailAI Pro</p>
                <div className="space-x-4">
                    <a href="#" target="_blank">LinkedIn</a>
                    <a href="#" target="_blank">Twitter</a>
                    <a href="#" target="_blank">Facebook</a>
                    <a href="#" target="_blank">Instagram</a>
                </div>
            </footer>
        </div>
    );
}
