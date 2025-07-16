import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Campaigns', path: '/dashboard/campaigns' },
    { name: 'Automations', path: '/dashboard/automations' },
    { name: 'CRM', path: '/dashboard/crm' },
    { name: 'Forms', path: '/dashboard/forms' },
    { name: 'Analytics', path: '/dashboard/analytics' },
    { name: 'Integrations', path: '/dashboard/integrations' },
    { name: 'Settings', path: '/dashboard/settings' },
    { name: 'Help', path: '/dashboard/help' },
];

export default function Sidebar() {
    const router = useRouter();

    return (
        <aside className="w-64 bg-white dark:bg-gray-900 h-screen p-6 border-r border-gray-200 dark:border-gray-700 fixed">
            <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <Link key={link.path} href={link.path}>
                        <span
                            className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${router.pathname === link.path ? 'bg-gray-200 dark:bg-gray-800 font-bold' : ''
                                }`}
                        >
                            {link.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
