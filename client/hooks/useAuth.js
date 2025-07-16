import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useAuth(protectedRoute = false) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const authUser = JSON.parse(localStorage.getItem('user'));
        if (protectedRoute && !authUser) {
            router.push('/login');
        }
        setUser(authUser);
        setLoading(false);
    }, [protectedRoute, router]);

    return { user, loading };
}
