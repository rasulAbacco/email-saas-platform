import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
export default function AnalyticsPage() {
    return (
        <DashboardLayout>
            <Head><title>Analytics - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">📈 Analytics</h1>
                <p className="text-gray-600 dark:text-gray-300">View insights into campaign performance and engagement.</p>
            </div>
        </DashboardLayout>
    );
}
