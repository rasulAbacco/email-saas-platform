import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
export default function CampaignsPage() {
    return (
        <DashboardLayout>
            <Head><title>Campaigns - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">📢 Campaigns</h1>
                <p className="text-gray-600 dark:text-gray-300">Manage, create, and analyze your email campaigns.</p>
            </div>
        </DashboardLayout>
    );
}
