import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';

export default function HelpCenterPage() {
    return (
        <DashboardLayout>
            <Head><title>Help Center - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">❓ Help Center</h1>
                <p className="text-gray-600 dark:text-gray-300">Find answers, documentation, and chat with support.</p>
            </div>
        </DashboardLayout>
    );
}
