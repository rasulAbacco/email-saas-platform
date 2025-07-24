import React from 'react';
import styles from '../styles/navigation.module.css';
const features = [
    {
        icon: '🧠',
        title: 'AI-Powered Automation',
        description: 'Smart email sequences that adapt to subscriber behavior and optimize engagement automatically.',
    },
    {
        icon: '🛡️',
        title: 'Advanced Email Verification',
        description: '99.9% accurate email validation with real-time verification and bounce protection.',
    },
    {
        icon: '📊',
        title: 'Intelligent Analytics',
        description: 'Deep insights with predictive analytics to optimize your campaigns for maximum ROI.',
    },
    {
        icon: '👥',
        title: 'Smart Segmentation',
        description: 'AI-driven audience segmentation for personalized messaging that converts.',
    },
];

const PlatformFeatures = () => {
    return (
        <section className={`${styles.platformFeatures} max-w-[100rem] mx-auto` }>
            <span className={`dark:text-[#00FF9C] ${styles.tag}`}>Platform Features</span>
            <h2 className={`text-black dark:text-white`}>Everything you need to succeed</h2>
            <p className={`${styles.subtitle} dark:text-[#CDF5FD]`}>
                From AI-powered automation to advanced analytics, our platform has all the tools to take your email marketing to the next level.
            </p>

            <div className={styles.featureGrid}>
                {features.map((feature, index) => (
                    <div className={`bg-[#F8FAFC] dark:bg-[#7743DB] ${styles.featureCard}`} key={index}>
                        <div className={`dark:bg-white ${styles.icon}`}>{feature.icon}</div>
                        <h3 className={`text-black dark:text-white`} >{feature.title}</h3>
                        <p className='text-[#1A1A19] dark:text-[#FFF1DB]'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlatformFeatures;
