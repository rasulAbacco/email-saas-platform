import { useState } from 'react';

export default function ForgotPasswordForm({ onSubmit }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

            <label className="block mb-2 text-sm font-medium">Enter your email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mb-6 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
                Send Reset Link
            </button>
        </form>
    );
}
