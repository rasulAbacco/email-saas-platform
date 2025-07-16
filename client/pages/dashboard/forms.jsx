import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
export default function FormsPage() {
    return (
        <DashboardLayout>
            <Head><title>Forms - EmailAI Pro</title></Head>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">📝 Forms</h1>
                <p className="text-gray-600 dark:text-gray-300">Create signup forms and collect user data.</p>
            </div>
        </DashboardLayout>
    );
}
