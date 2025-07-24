// client/components/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import {
    FaRocket,
    FaTags,
    FaInfoCircle,
    FaSignInAlt,
    FaUserPlus,
    FaHome,
} from 'react-icons/fa';
import styles from '../styles/navigation.module.css';
import { GrContactInfo } from "react-icons/gr";

export default function Navbar() {
    const [theme, setTheme] = useState('light');
    const [mobileOpen, setMobileOpen] = useState(false);

    const isDark = theme === 'dark';

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header
            className={`flex items-center justify-between px-6 py-4 relative ${styles.navigation}`}
        >
            <h1 className="text-xl font-bold text-[#9400FF] dark:text-white">
                📧 EmailAI Pro
            </h1>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className="text-xl text-black dark:text-white"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
                <button
                    onClick={toggleMobileMenu}
                    className="text-2xl text-black dark:text-white"
                    title="Menu"
                >
                    {mobileOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Desktop Nav */}
            <nav className={`space-x-6 hidden md:flex items-center ${styles.navItemLink}`}>
                <Link href="/" className={styles.navLink}>
                    <FaHome className="inline-block mr-1" /> Home
                </Link>
                <Link href="/Features" className={styles.navLink}>
                    <FaRocket className="inline-block mr-1" /> Features
                </Link>
                <Link href="/Pricing" className={styles.navLink}>
                    <FaTags className="inline-block mr-1" /> Pricing
                </Link>
                <Link href="/Integrations" className={styles.navLink}>
                    <FaTags className="inline-block mr-1" /> Integrations
                </Link>
                <Link href="/About" className={styles.navLink}>
                    <FaInfoCircle className="inline-block mr-1" /> About
                </Link>
                <Link href="/Contact" className={styles.navLink}>
                    <GrContactInfo className="inline-block mr-1" /> Contact Us
                </Link>
                <Link href="/login" className={styles.navLink}>
                    <FaSignInAlt className="inline-block mr-1" /> Login
                </Link>
                <Link
                    href="/signup"
                    className="bg-[#7F27FF] text-white px-2 py-1 rounded hover:bg-[#9400FF] transition flex items-center gap-2"
                >
                    <FaUserPlus /> Get Started
                </Link>
                <button
                    onClick={toggleTheme}
                    className="ml-2 text-black text-xl dark:text-white"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
            </nav>

            {/* Mobile Nav Dropdown */}
            {mobileOpen && (
                <div className="flex flex-col absolute top-11 rounded-xl right-0 w-[60%] bg-white dark:bg-[#0F044C] dark:text-white shadow-md md:hidden z-50 p-4 space-y-4">
                    <Link onClick={closeMobileMenu} href="/" className={styles.navLink}>
                        <FaHome className="inline-block mr-1" /> Home
                    </Link>
                    <Link onClick={closeMobileMenu} href="/Features" className={styles.navLink}>
                        <FaRocket className="inline-block mr-1" /> Features
                    </Link>
                    <Link onClick={closeMobileMenu} href="/Pricing" className={styles.navLink}>
                        <FaTags className="inline-block mr-1" /> Pricing
                    </Link>
                    <Link onClick={closeMobileMenu} href="/About" className={styles.navLink}>
                        <FaInfoCircle className="inline-block mr-1" /> About
                    </Link>
                    <Link onClick={closeMobileMenu} href="/login" className={styles.navLink}>
                        <FaSignInAlt className="inline-block mr-1" /> Login
                    </Link>
                    <Link
                        onClick={closeMobileMenu}
                        href="/signup"
                        className="block bg-[#7F27FF] text-white px-4 py-2 rounded hover:bg-[#9400FF] transition flex items-center gap-2"
                    >
                        <FaUserPlus /> Get Started
                    </Link>
                </div>
            )}
        </header>
    );
}
