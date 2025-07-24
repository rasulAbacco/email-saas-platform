import React, { useState } from 'react';
import { Plus, Search, Filter, Edit3, Copy, Trash2, Mail, Eye, Users, Calendar, MoreVertical } from 'lucide-react';

const Templetes = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      category: 'onboarding',
      subject: 'Welcome to our platform!',
      preview: 'Thank you for joining us. Please verify your email to get started...',
      opens: 1248,
      clicks: 156,
      lastModified: '2 days ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Password Reset',
      category: 'transactional',
      subject: 'Reset your password',
      preview: 'We received a request to reset your password. Click the link below...',
      opens: 892,
      clicks: 234,
      lastModified: '1 week ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Product Launch',
      category: 'marketing',
      subject: 'Exciting new features are here!',
      preview: 'Check out our latest product updates and improvements...',
      opens: 2156,
      clicks: 432,
      lastModified: '3 days ago',
      status: 'draft'
    },
    {
      id: 4,
      name: 'Account Verification',
      category: 'verification',
      subject: 'Verify your email address',
      preview: 'Please click the verification link to activate your account...',
      opens: 3421,
      clicks: 876,
      lastModified: '1 day ago',
      status: 'active'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Templates' },
    { value: 'onboarding', label: 'Onboarding' },
    { value: 'transactional', label: 'Transactional' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'verification', label: 'Verification' }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

 const CreateTemplateModal = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md mx-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create New Template</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Template Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter template name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Select category</option>
            <option value="onboarding">Onboarding</option>
            <option value="transactional">Transactional</option>
            <option value="marketing">Marketing</option>
            <option value="verification">Verification</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject Line</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter email subject"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setShowCreateModal(false)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => setShowCreateModal(false)}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Template
        </button>
      </div>
    </div>
  </div>
);


  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
    {/* Header */}
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Mail className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Email Verification Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700 dark:text-green-300">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Templates Page Content */}
    {activeTab === 'templates' && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Email Templates</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Create and manage your email templates</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <div key={template.id} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{template.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        template.status === 'active' 
                          ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200' 
                          : 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {template.status}
                      </span>
                    </div>
                    <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full mb-3">
                      {template.category}
                    </span>
                  </div>
                  <div className="relative">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-sm text-gray-900 dark:text-white mb-1">Subject: {template.subject}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{template.preview}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">{template.opens.toLocaleString()} opens</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">{template.clicks} clicks</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Modified {template.lastModified}</span>
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded" title="Preview">
                      <Eye className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded" title="Edit">
                      <Edit3 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded" title="Duplicate">
                      <Copy className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded" title="Delete">
                      <Trash2 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No templates found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Template
            </button>
          </div>
        )}
      </div>
    )}

    {/* Placeholder for other tabs */}
    {activeTab !== 'templates' && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Page
          </h3>
          <p className="text-gray-600 dark:text-gray-400">This section is under development</p>
        </div>
      </div>
    )}

    {/* Modal */}
    {showCreateModal && <CreateTemplateModal />}
  </div>

  );
};

 
export default Templetes
