import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
export default function CRMPage() {
    return (
        <DashboardLayout>
            <Head><title>CRM - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">👥 CRM</h1>
                <p className="text-gray-600 dark:text-gray-300">Track leads, manage contacts, and organize pipelines.</p>
            </div>
        </DashboardLayout>
    );
}
