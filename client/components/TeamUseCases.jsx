import React, { useState } from 'react';
import { Moon, Sun, Box, FileText, Shield } from 'lucide-react';

const TeamUseCases = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const useCases = [
        {
            icon: <Box className="w-8 h-8" />,
            title: "For Marketing Teams",
            description: "Automate campaign flows, personalize emails at scale, and analyze conversions in real-time.",
            bgColor: "bg-purple-500"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "For Startups & SMBs",
            description: "Build your audience quickly and boost ROI without a full marketing department.",
            bgColor: "bg-purple-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "For Agencies",
            description: "Handle multiple clients with streamlined workflows and advanced analytics.",
            bgColor: "bg-purple-500"
        }
    ];

    const themeClasses = isDarkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-gray-900";

    const cardClasses = isDarkMode
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200";

    return (
        <div className={`dark:bg-[#0f044d] min-h-screen transition-colors duration-300 ${themeClasses}`}>
            {/* Theme Toggle */}
            

            <div className="container mx-auto px-6 py-16 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                        Use Cases
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight dark:text-white">
                        Built for Every Team
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Whether you're a solo founder or a growing team, EmailAI Pro scales with your goals.
                    </p>
                </div>

                {/* Use Cases Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className={`
                p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:scale-105 
                ${cardClasses}
                ${isDarkMode ? 'hover:shadow-2xl hover:shadow-purple-500/10' : 'hover:shadow-xl'} dark:bg-[#211951]`}
                        >
                            {/* Icon */}
                            <div className={`
                w-16 h-16 rounded-2xl ${useCase.bgColor} flex items-center justify-center 
                text-white mb-6 transition-transform duration-300 hover:scale-110 `}>
                                {useCase.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                {useCase.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="
            bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl 
            font-semibold text-lg transition-all duration-300 hover:scale-105 
            shadow-lg hover:shadow-xl hover:shadow-purple-500/25">
                        Get Started Today
                    </button>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>
        </div>
    );
};

export default TeamUseCases;