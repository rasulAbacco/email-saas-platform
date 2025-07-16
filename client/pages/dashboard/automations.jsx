import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
export default function AutomationsPage() {
    return (
        <DashboardLayout>
            <Head><title>Automations - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">⚙️ Automations</h1>
                <p className="text-gray-600 dark:text-gray-300">Build workflows and automate email sequences.</p>
            </div>
        </DashboardLayout>
    );
}
