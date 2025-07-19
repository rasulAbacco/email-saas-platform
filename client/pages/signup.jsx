import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const registerUserToStore = useAuthStore((state) => state.register);
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await registerUserToStore(form); // ✅ Use Zustand register
            router.push('/login');
        } catch (err) {
            console.error(err);
            setError(err?.response?.data?.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Head><title>Signup - EmailAI Pro</title></Head>
            <Navbar/>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white"
                        required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </button>
                </form>
                <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
                </p>
            </div>
        </div>
    );
}
