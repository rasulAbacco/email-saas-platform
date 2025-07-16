import Sidebar from '../components/ui/Sidebar';
import Topbar from '../components/ui/Topbar';

export default function MainLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar />
                <main className="p-4 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
