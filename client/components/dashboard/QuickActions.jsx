import Link from 'next/link';

export default function QuickActions() {
    const actions = [
        { label: 'Create Campaign', href: '/campaigns' },
        { label: 'Upload Contacts', href: '/forms' },
        { label: 'Add Automation', href: '/automations' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="flex gap-4 flex-wrap">
                {actions.map((action, idx) => (
                    <Link
                        key={idx}
                        href={action.href}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                    >
                        {action.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
