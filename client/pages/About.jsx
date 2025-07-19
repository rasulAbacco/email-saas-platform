import React, { useState } from 'react'
import { Mail, Shield, Zap, Users, CheckCircle, Star, Globe, Clock, TrendingUp, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import styles from "../styles/about.module.css"
const About = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    const stats = [
        { icon: Mail, label: 'Emails Verified', value: '50M+' },
        { icon: Users, label: 'Happy Customers', value: '10K+' },
        { icon: Globe, label: 'Countries Served', value: '120+' },
        { icon: TrendingUp, label: 'Accuracy Rate', value: '99.8%' }
    ]

    const features = [
        {
            icon: Shield,
            title: 'Advanced Security',
            description: 'Enterprise-grade security with SSL encryption and GDPR compliance to protect your data.'
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Verify thousands of emails in seconds with our optimized infrastructure and global CDN.'
        },
        {
            icon: CheckCircle,
            title: 'High Accuracy',
            description: 'Industry-leading 99.8% accuracy rate with real-time verification and validation.'
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock customer support to help you maximize your email deliverability.'
        }
    ]

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            company: 'TechCorp',
            content: 'VerifyMail has transformed our email campaigns. Our bounce rate dropped by 85% and engagement increased dramatically.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'CEO',
            company: 'StartupFlow',
            content: 'The API integration was seamless and the accuracy is incredible. Best investment we made for our email marketing.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Growth Manager',
            company: 'EcomPlus',
            content: 'Customer support is outstanding and the real-time verification saves us hours of manual work every week.',
            rating: 5
        }
    ]

    const themeClasses = isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900'

    return (
        <div className={`min-h-screen transition-colors duration-300 dark:bg-[#16003b] ${themeClasses}`}>
            {/* Header */}
            <Navbar/>
            <div className={`container mx-auto px-4 py-8 ${styles.aboutSection}`}>
                <div className={`flex justify-between items-center mb-12 ${styles.aboutTitle}`}>
                    <h1 className="text-4xl font-bold bg-gradient-to-r text-align-center from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About VerifyMail
                    </h1>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
                        <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">
                        The Most Trusted Email Verification Platform
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed text-black dark:text-gray-300
                        }`}>
                        Since 2020, VerifyMail has been the go-to solution for businesses worldwide to clean their email lists,
                        improve deliverability, and maximize their email marketing ROI. We've verified over 50 million emails
                        and helped thousands of companies achieve better email performance.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${isDarkMode
                                    ? 'bg-gray-800 border border-gray-700'
                                    : 'bg-gray-50 border border-gray-200'
                                }`}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12 dark:text-white">Why Choose VerifyMail?</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${isDarkMode
                                        ? 'bg-gray-800 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                                        <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Section */}
                <div className={`p-8 rounded-2xl mb-16 ${isDarkMode
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
                    }`}>
                    <div className="text-center">
                        <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className={`text-lg max-w-3xl mx-auto leading-relaxed dark:text-gray-900 
                            }`}>
                            We believe that every business deserves to reach their audience effectively. Our mission is to provide
                            the most accurate, fast, and reliable email verification service that helps businesses maintain clean
                            email lists, improve deliverability, and achieve better results from their email marketing campaigns.
                        </p>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12 dark:text-white">What Our Customers Say</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${isDarkMode
                                        ? 'bg-gray-800 border border-gray-700'
                                        : 'bg-white border border-gray-200 shadow-sm'
                                    }`}
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className={`mb-4 italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    "{testimonial.content}"
                                </p>
                                <div className="border-t pt-4">
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Info Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className={`p-6 rounded-2xl ${isDarkMode
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-gray-50 border border-gray-200'
                        }`}>
                        <h3 className="text-xl font-bold mb-4">Company Overview</h3>
                        <div className="space-y-3">
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Founded:</strong> 2020
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Headquarters:</strong> San Francisco, CA
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Team Size:</strong> 50+ professionals
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Compliance:</strong> GDPR, SOC 2, ISO 27001
                            </p>
                        </div>
                    </div>

                    <div className={`p-6 rounded-2xl ${isDarkMode
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-gray-50 border border-gray-200'
                        }`}>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Email:</strong> hello@verifymail.com
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Support:</strong> support@verifymail.com
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className={`p-8 rounded-2xl ${isDarkMode
                            ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-gray-700'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600'
                        }`}>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Clean Your Email List?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Join thousands of businesses who trust VerifyMail to improve their email deliverability
                            and maximize their marketing ROI.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About