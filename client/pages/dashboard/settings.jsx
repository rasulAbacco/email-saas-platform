import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <Head><title>Settings - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
                <p className="text-gray-600 dark:text-gray-300">Update your profile, plan, and API key preferences.</p>
            </div>
        </DashboardLayout>
    );
}
