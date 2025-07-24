import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Mail, Users, Settings, Play, Pause, Trash2, Edit3, Plus, Filter, Search, BarChart3 } from 'lucide-react';

const Schedules = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Welcome Series',
      status: 'scheduled',
      scheduleDate: '2024-07-25',
      scheduleTime: '09:00',
      recipients: 2534,
      verified: 2401,
      type: 'Welcome',
      lastSent: '2024-07-20'
    },
    {
      id: 2,
      name: 'Product Launch Announcement',
      status: 'running',
      scheduleDate: '2024-07-23',
      scheduleTime: '14:30',
      recipients: 5672,
      verified: 5203,
      type: 'Promotional',
      lastSent: '2024-07-22'
    },
    {
      id: 3,
      name: 'Monthly Newsletter',
      status: 'paused',
      scheduleDate: '2024-07-28',
      scheduleTime: '10:00',
      recipients: 8923,
      verified: 8445,
      type: 'Newsletter',
      lastSent: '2024-06-28'
    },
    {
      id: 4,
      name: 'Cart Abandonment Reminder',
      status: 'completed',
      scheduleDate: '2024-07-21',
      scheduleTime: '16:00',
      recipients: 1243,
      verified: 1198,
      type: 'Retargeting',
      lastSent: '2024-07-21'
    }
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const statusColors = {
    scheduled: 'bg-blue-100 text-blue-800',
    running: 'bg-green-100 text-green-800',
    paused: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id, newStatus) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === id ? { ...campaign, status: newStatus } : campaign
    ));
  };

  const handleDeleteCampaign = (id) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id));
  };

  const NewCampaignModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-4">Schedule New Campaign</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter campaign name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input 
                type="time" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Welcome</option>
              <option>Promotional</option>
              <option>Newsletter</option>
              <option>Retargeting</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => setShowModal(false)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Schedule
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaign Schedule</h1>
              <p className="text-gray-600 mt-1">Manage and schedule your email verification campaigns</p>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              New Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-3xl font-bold text-green-600 mt-2">3</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Play className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Verified Emails</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">17.2K</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">94.6%</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Search campaigns..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="scheduled">Scheduled</option>
                <option value="running">Running</option>
                <option value="paused">Paused</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Campaigns List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Campaign</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Schedule</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Recipients</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Verified</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <div className="font-semibold text-gray-900">{campaign.name}</div>
                        <div className="text-sm text-gray-600">{campaign.type}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar size={16} />
                        <span>{campaign.scheduleDate}</span>
                        <Clock size={16} />
                        <span>{campaign.scheduleTime}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-gray-400" />
                        <span className="font-medium">{campaign.recipients.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-green-600 font-medium">{campaign.verified.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">
                        {((campaign.verified / campaign.recipients) * 100).toFixed(1)}% verified
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${statusColors[campaign.status]}`}>
                        {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {campaign.status === 'scheduled' && (
                          <button 
                            onClick={() => handleStatusChange(campaign.id, 'running')}
                            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                            title="Start Campaign"
                          >
                            <Play size={16} />
                          </button>
                        )}
                        {campaign.status === 'running' && (
                          <button 
                            onClick={() => handleStatusChange(campaign.id, 'paused')}
                            className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors"
                            title="Pause Campaign"
                          >
                            <Pause size={16} />
                          </button>
                        )}
                        {campaign.status === 'paused' && (
                          <button 
                            onClick={() => handleStatusChange(campaign.id, 'running')}
                            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                            title="Resume Campaign"
                          >
                            <Play size={16} />
                          </button>
                        )}
                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                          <Edit3 size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Settings">
                          <Settings size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteCampaign(campaign.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" 
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Mail className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600 mb-6">No campaigns match your current filters. Try adjusting your search or filters.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilterStatus('all');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {showModal && <NewCampaignModal />}
    </div>
  );
};

export default Schedules
