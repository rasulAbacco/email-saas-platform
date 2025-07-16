import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic
        console.log('Reset link sent to:', email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Head><title>Forgot Password - EmailAI Pro</title></Head>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Reset Your Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white" required />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Reset Link</button>
                </form>
                <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
                    Remember your password? <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
                </p>
            </div>
        </div>
    );
}
