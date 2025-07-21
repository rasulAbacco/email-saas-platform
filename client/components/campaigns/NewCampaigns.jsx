import React, { useState } from 'react';
import { 
  Mail, 
  Plus, 
  BarChart3, 
  FileText, 
  Calendar, 
  Bell,
  Search,
  Filter,
  MoreVertical,
  PlayCircle,
  PauseCircle,
  Eye,
  Edit3,
  Trash2,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

const EmailDashboard = () => {
  const [activeTab, setActiveTab] = useState('all-campaigns');

  const navigationItems = [
    { id: 'all-campaigns', label: 'All Campaigns', icon: Mail },
    { id: 'new-campaigns', label: 'New Campaigns', icon: Plus },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'schedules', label: 'Schedules', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "active",
      recipients: 15420,
      delivered: 14980,
      opened: 8740,
      clicked: 1250,
      bounced: 440,
      created: "2024-07-15",
      type: "promotional"
    },
    {
      id: 2,
      name: "Product Launch Newsletter",
      status: "paused",
      recipients: 8930,
      delivered: 8650,
      opened: 4320,
      clicked: 890,
      bounced: 280,
      created: "2024-07-18",
      type: "newsletter"
    },
    {
      id: 3,
      name: "Welcome Series - Onboarding",
      status: "active",
      recipients: 2340,
      delivered: 2290,
      opened: 1680,
      clicked: 420,
      bounced: 50,
      created: "2024-07-20",
      type: "automation"
    },
    {
      id: 4,
      name: "Weekly Digest",
      status: "completed",
      recipients: 12500,
      delivered: 12100,
      opened: 7250,
      clicked: 1850,
      bounced: 400,
      created: "2024-07-10",
      type: "newsletter"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'promotional': return 'bg-purple-100 text-purple-800';
      case 'newsletter': return 'bg-indigo-100 text-indigo-800';
      case 'automation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const AllCampaignsPage = () => (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Campaigns</h1>
          <p className="text-gray-600">Manage and monitor all your email campaigns</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus size={20} />
          New Campaign
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Mail className="text-blue-600" size={24} />
            </div>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">39,190</h3>
          <p className="text-gray-600 text-sm">Total Recipients</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Eye className="text-green-600" size={24} />
            </div>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">21,990</h3>
          <p className="text-gray-600 text-sm">Total Opens</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">4,410</h3>
          <p className="text-gray-600 text-sm">Total Clicks</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Clock className="text-red-600" size={24} />
            </div>
            <span className="text-red-500 text-sm">-2.3%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">1,170</h3>
          <p className="text-gray-600 text-sm">Bounce Rate</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search campaigns..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter size={20} />
          Filter
        </button>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Campaign</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Recipients</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Delivered</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Opens</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Clicks</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Created</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{campaign.name}</div>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(campaign.type)}`}>
                        {campaign.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{campaign.recipients.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-900">{campaign.delivered.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{campaign.opened.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">
                      {((campaign.opened / campaign.delivered) * 100).toFixed(1)}%
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{campaign.clicked.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">
                      {((campaign.clicked / campaign.delivered) * 100).toFixed(1)}%
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{campaign.created}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {campaign.status === 'active' ? (
                        <button className="p-1 text-yellow-600 hover:bg-yellow-50 rounded" title="Pause">
                          <PauseCircle size={16} />
                        </button>
                      ) : (
                        <button className="p-1 text-green-600 hover:bg-green-50 rounded" title="Play">
                          <PlayCircle size={16} />
                        </button>
                      )}
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded" title="Edit">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded" title="Delete">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const NewCampaignsPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">New Campaigns</h1>
      <p className="text-gray-600 mb-8">Create and launch new email campaigns</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
            <Mail size={24} className="text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Newsletter</h3>
          <p className="text-gray-600 text-sm">Regular updates to subscribers</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
            <TrendingUp size={24} className="text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Promotional</h3>
          <p className="text-gray-600 text-sm">Sales and special offers</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
            <Users size={24} className="text-orange-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Welcome Series</h3>
          <p className="text-gray-600 text-sm">Onboard new subscribers</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Quick Setup</h3>
        <div className="space-y-4">
          <input placeholder="Campaign Name" className="w-full p-3 border rounded-lg" />
          <input placeholder="Subject Line" className="w-full p-3 border rounded-lg" />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Create Campaign</button>
        </div>
      </div>
    </div>
  );

  const ReportsPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
      <p className="text-gray-600 mb-8">Analytics and performance insights</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Open Rate Trends</h3>
          <div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <BarChart3 size={48} className="text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Click Performance</h3>
          <div className="h-32 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-center justify-center">
            <TrendingUp size={48} className="text-green-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Recent Reports</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
            <span>Weekly Performance Report</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </div>
          <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
            <span>Campaign Analysis - July</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const TemplatesPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Templates</h1>
      <p className="text-gray-600 mb-8">Email templates and designs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
            <FileText size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Modern Newsletter</h3>
          <p className="text-gray-600 text-sm">Clean and professional design</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
            <FileText size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Promotional</h3>
          <p className="text-gray-600 text-sm">Eye-catching sales template</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
            <FileText size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Welcome Email</h3>
          <p className="text-gray-600 text-sm">Warm greeting template</p>
        </div>
      </div>
      
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
        <Plus size={20} />
        Create New Template
      </button>
    </div>
  );

  const SchedulesPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedules</h1>
      <p className="text-gray-600 mb-8">Manage campaign schedules and automation</p>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">Upcoming Campaigns</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Weekly Newsletter</p>
                <p className="text-sm text-gray-600">Tomorrow at 9:00 AM</p>
              </div>
            </div>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Scheduled</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Product Update</p>
                <p className="text-sm text-gray-600">July 25 at 2:00 PM</p>
              </div>
            </div>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Active</span>
          </div>
        </div>
      </div>
      
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
        <Clock size={20} />
        Schedule New Campaign
      </button>
    </div>
  );

  const NotificationsPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
      <p className="text-gray-600 mb-8">Configure your notification preferences</p>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">Recent Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="p-2 bg-blue-600 rounded-full">
              <Bell size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Campaign "Summer Sale" completed</p>
              <p className="text-sm text-gray-600">15,420 emails delivered successfully</p>
            </div>
            <span className="text-xs text-gray-500">2 min ago</span>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
            <div className="p-2 bg-yellow-600 rounded-full">
              <Bell size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">High bounce rate detected</p>
              <p className="text-sm text-gray-600">Campaign "Product Launch" needs attention</p>
            </div>
            <span className="text-xs text-gray-500">1 hour ago</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Email campaign completions</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>High bounce rate alerts</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="rounded" />
            <span>Daily performance reports</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'all-campaigns':
        return <AllCampaignsPage />;
      case 'new-campaigns':
        return <NewCampaignsPage />;
      case 'reports':
        return <ReportsPage />;
      case 'templates':
        return <TemplatesPage />;
      case 'schedules':
        return <SchedulesPage />;
      case 'notifications':
        return <NotificationsPage />;
      default:
        return <AllCampaignsPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Vertical Navbar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">EmailVerify</h2>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 d-flex">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">John Doe</p>
              <p className="text-xs text-gray-500">john@company.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default EmailDashboard;