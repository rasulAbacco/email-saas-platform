import { useState } from 'react';

export default function AuthForm({ type, onSubmit }) {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md"
        >
            <h2 className="text-2xl font-bold mb-4 text-center capitalize">{type}</h2>

            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            />

            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-6 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
                {type}
            </button>
        </form>
    );
}
