import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';

function MyApp({ Component, pageProps }) {
    const loadUser = useAuthStore((state) => state.loadUser);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Load user on app start
        loadUser();

        // Apply saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
        document.body.classList.remove(savedTheme === 'dark' ? 'light-mode' : 'dark-mode');
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
