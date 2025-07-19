import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/navigation.module.css';
import { FiSun, FiMoon } from 'react-icons/fi'; // Light/Dark icons
import { FaRocket, FaTags, FaInfoCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
    const [theme, setTheme] = useState('light');
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

    return (
        <div className={`${styles.navigationContainer} ${isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <Head>
                <title>EmailAI Pro - Modern Email & CRM Automation</title>
            </Head>

            {/* Top Navigation */}
             <Navbar/>

            {/* Hero Section */}
            <main className="flex flex-col md:flex-row items-center justify-between px-6 py-36 max-w-7xl mx-auto">
                <motion.div
                    className={`w-full md:w-1/2 ${styles.heroFadeIn}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >


                    <h2 className="text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
                        Automate Your Email Campaigns & CRM{' '}
                        <span className="text-[#7F27FF] dark:text-[#AD49E1]">Smarter</span>
                    </h2>



                    
                    <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                        Build high-converting campaigns, validate emails, manage contacts, and analyze performance — all in one powerful platform.
                    </p>
                    <Link href="/signup" className={styles.ctaButton}>
                        Start for Free
                    </Link>
                </motion.div>

                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <div className={`${styles.heroGradientBox}`}>
                        <motion.div className={`${styles.heroImg1}`}
                            whileHover={{
                                rotate: Math.random() * 360,
                                scale: 1.1
                            }}
                        >
                            <img src="/assets/images/square.png" alt="cube image" />
                        </motion.div>
                        <motion.div className={`${styles.heroImg2}`}
                            whileHover={{
                                rotate: Math.random() * 360,
                                scale: 1.1
                            }}
                        >
                            <img src="/assets/images/cube.png" alt="cube image" />
                        </motion.div>
                        <motion.div className={`${styles.heroImg3}`} 
                            whileHover={{
                                rotate: Math.random() * 360,
                                scale: 1.1
                            }}
                        >
                            <img src="/assets/images/hexagon.png" alt="cube image" />
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
