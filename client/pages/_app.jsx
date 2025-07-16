import '@/styles/globals.css';
import { useEffect } from 'react';
import useAuthStore from '@/store/authStore';

function MyApp({ Component, pageProps }) {
    const loadUser = useAuthStore((state) => state.loadUser);

    useEffect(() => {
        loadUser();
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
