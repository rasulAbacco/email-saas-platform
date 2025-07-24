import React, { useState, useEffect } from 'react';
import { Moon, Sun, ChevronDown, ChevronUp, MessageCircle, Mail } from 'lucide-react';
import styles from '../styles/navigation.module.css';

const FAQSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleExpanded = (index) => {
        setExpandedItems(prev => ({
            [index]: !prev[index] // Only keep the clicked item, close all others
        }));
    };

    const faqData = [
        {
            question: "Can I verify a list of any size?",
            answer: "Yes, you can verify a list of any size. Keep in mind the minimum number of credits you can purchase is 5,000."
        },
        {
            question: "How long will it take to verify my list?",
            answer: "Depending on the types of emails in your list, we typically will process 10,000 in 2 to 3 minutes. On average, a list of 250,000 email addresses will take about 10 minutes to verify."
        },
        {
            question: "How many credits do I need to verify my email list?",
            answer: "One credit is equal to one verification request. Duplicates and Unknown results are refunded and credited back to your Credit Balance upon completion of the verification process of a specific list."
        },
        {
            question: "Do I need to sign a long term contract?",
            answer: "No, Emailable offers a pay-as-you-go email verification service. There are no long term contracts or commitments required."
        },
        {
            question: "What forms of payment do you accept?",
            answer: "We accept all major debit and credit cards from customers in every country including Visa, Mastercard, American Express, Discover, and JCB Diners Club cards. We also accept payments from PayPal, Apple Pay and Google Pay. Bank debits and transfers are also available upon request. Please contact support and we'll happily assist you.",
            paymentIcons: true
        },
        {
            question: "When do my credits expire?",
            answer: "Credits never expire and can be used at your leisure. If you are subscribed to a monthly or yearly subscription, we will reload your account with credits every billing cycle, and unused credits from the previous period will roll over."
        },
        {
            question: "How do Credits Subscriptions work?",
            answer: "By signing up for a Credits Subscription you will save 15% every billing cycle. There is no long term commitment and you can cancel at any time."
        },
        {
            question: "I still have a question. How do I contact you?",
            answer: "Chat with us or send us an email and we'll be more than happy to assist you.",
            contactLinks: true
        }
    ];

    const PaymentIcons = () => (
        <div className="flex flex-wrap gap-2 mt-4 max-w-[100rem] mx-auto">
            {['VISA', 'MC', 'AMEX', 'DISC', 'JCB', 'PAYPAL', 'APPLE', 'GOOGLE'].map((card) => (
                <div
                    key={card}
                    className={`px-3 py-1 rounded text-xs font-medium ${isDarkMode
                        ? 'bg-gray-700 text-gray-300 border border-gray-600'
                        : 'bg-gray-100 text-gray-600 border border-gray-300'
                        }`}
                >
                    {card}
                </div>
            ))}
        </div>
    );

    const ContactLinks = () => (
        <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Chat with us
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-4 h-4" />
                Send us an email
            </button>
        </div>
    );

    const themeClasses = isDarkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-gray-900";

    const cardClasses = isDarkMode
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200";

    // Prevent hydration mismatch by not rendering interactive elements on server
    if (!isClient) {
        return (
            <div className={`transition-colors duration-300 ${themeClasses}`}>
                <div className="container mx-auto px-6 py-16 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Find answers to common questions about our email verification service
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`border rounded-2xl shadow-sm ${cardClasses}`}
                            >
                                <div className="p-6 flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mt-1">
                                        <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 pr-8">
                                            {item.question}
                                        </h3>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={` transition-colors max-w-[100rem] mx-auto duration-300 dark:bg-[#180759] ${themeClasses}`}>
            {/* Theme Toggle */}


            <div className="container mx-auto px-6 py-16 max-w-4xl ">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Find answers to common questions about our email verification service
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className={`${styles.faqSection}`}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                border rounded-2xl transition-all duration-300 overflow-hidden
                                ${expandedItems[index] ? 'shadow-xl scale-[1.01]' : 'shadow-md'}
                                bg-gradient-to-br from-purple-50 to-white border-purple-200
                                dark:from-[#0F044C] dark:to-[#1A1A40] dark:border-[#892CDC] ${styles.faqQAN}` }>
                            <button
                                onClick={() => toggleExpanded(index)}
                                className="w-full p-6 text-left flex items-start gap-4 group hover:bg-[#AD49E1]/10 dark:hover:bg-[#892CDC]/20 rounded-2xl transition-colors"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#AD49E1]/20 dark:bg-[#AD49E1]/30 flex items-center justify-center mt-1">
                                    <span className="text-[#7F27FF] dark:text-[#AD49E1] font-semibold text-sm">
                                        {index + 1}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 pr-8">
                                        {item.question}
                                    </h3>
                                    <div
                                        className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${expandedItems[index] ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
            `}
                                    >
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                        {item.paymentIcons && <PaymentIcons />}
                                        {item.contactLinks && <ContactLinks />}
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ml-2 mt-1">
                                    {expandedItems[index] ? (
                                        <ChevronUp className="w-5 h-5 text-[#7F27FF] dark:text-[#AD49E1]" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                    )}
                                </div>
                            </button>
                        </div>
                    ))}
                </div>


                {/* Contact CTA */}
                <div className={`
                        mt-16 p-8 rounded-2xl text-center border 
                        bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 
                        dark:bg-gradient-to-r dark:from-purple-900/20 dark:to-blue-900/20 dark:border-purple-800
                        `}>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Our support team is here to help you 24/7
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                            <MessageCircle className="w-5 h-5" />
                            Start Live Chat
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold">
                            <Mail className="w-5 h-5" />
                            Send Email
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
            </div>
        </div>
    );
};

export default FAQSection;