import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
export default function IntegrationsPage() {
    return (
        <DashboardLayout>
            <Head><title>Integrations - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">🔌 Integrations</h1>
                <p className="text-gray-600 dark:text-gray-300">Connect with tools like Zapier, Stripe, Slack, and more.</p>
            </div>
        </DashboardLayout>
    );
}
