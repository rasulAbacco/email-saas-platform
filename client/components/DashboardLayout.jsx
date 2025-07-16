import DashboardContainer from '@/layouts/dashboard/DashboardContainer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div div className="min-h-screen flex bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
            <Sidebar />
            <main className="flex-1 ml-64">
                <Header />
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}
