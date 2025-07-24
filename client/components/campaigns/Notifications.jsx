import React, { useState } from 'react';
import { Bell, CheckCircle, AlertTriangle, XCircle, Mail, Users, TrendingUp, Filter, Search, MoreHorizontal } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock notification data
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Campaign "Summer Sale 2024" Completed',
      message: '15,247 emails verified successfully. 94% deliverability rate achieved.',
      timestamp: '2 minutes ago',
      campaign: 'Summer Sale 2024',
      stats: { verified: 15247, bounced: 892, total: 16139 }
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Bounce Rate Detected',
      message: 'Campaign "Product Launch" showing 12% bounce rate. Review recommended.',
      timestamp: '15 minutes ago',
      campaign: 'Product Launch',
      stats: { verified: 8234, bounced: 1124, total: 9358 }
    },
    {
      id: 3,
      type: 'info',
      title: 'Verification in Progress',
      message: 'Campaign "Newsletter Weekly" is 67% complete. Estimated 5 minutes remaining.',
      timestamp: '1 hour ago',
      campaign: 'Newsletter Weekly',
      stats: { verified: 12456, bounced: 234, total: 18567 }
    },
    {
      id: 4,
      type: 'error',
      title: 'Campaign Failed',
      message: 'Campaign "Flash Sale" encountered API limits. Verification paused.',
      timestamp: '2 hours ago',
      campaign: 'Flash Sale',
      stats: { verified: 2341, bounced: 156, total: 7800 }
    },
    {
      id: 5,
      type: 'success',
      title: 'New Subscriber Milestone',
      message: 'Campaign "Welcome Series" reached 50K verified subscribers!',
      timestamp: '3 hours ago',
      campaign: 'Welcome Series',
      stats: { verified: 50000, bounced: 2341, total: 52341 }
    }
  ];

  const getIcon = (type) => {
    const iconProps = { size: 20 };
    switch (type) {
      case 'success': return <CheckCircle className="text-green-500" {...iconProps} />;
      case 'warning': return <AlertTriangle className="text-yellow-500" {...iconProps} />;
      case 'error': return <XCircle className="text-red-500" {...iconProps} />;
      default: return <Bell className="text-blue-500" {...iconProps} />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'warning': return 'bg-yellow-50 border-yellow-200';
      case 'error': return 'bg-red-50 border-red-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getTypeCount = (type) => {
    return notifications.filter(n => n.type === type).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Campaign Notifications
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your email verification campaigns in real-time
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm border dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Bell className="text-blue-600 dark:text-blue-400" size={20} />
              <span className="font-semibold text-gray-900 dark:text-white">
                {notifications.length}
              </span>
              <span className="text-gray-500 dark:text-gray-400">Total</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {[
        { label: 'Success', count: getTypeCount('success'), color: 'green' },
        { label: 'Warnings', count: getTypeCount('warning'), color: 'yellow' },
        { label: 'Errors', count: getTypeCount('error'), color: 'red' },
        { label: 'Info', count: getTypeCount('info'), color: 'blue' }
      ].map(({ label, count, color }, idx) => {
        const Icon = [CheckCircle, AlertTriangle, XCircle, Bell][idx];
        return (
          <div
            key={label}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {label}
                </p>
                <p className={`text-2xl font-bold text-${color}-600`}>
                  {count}
                </p>
              </div>
              <Icon className={`text-${color}-500`} size={32} />
            </div>
          </div>
        );
      })}
    </div>

    {/* Filters and Search */}
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Filter size={20} className="text-gray-500 dark:text-gray-400" />
          <div className="flex space-x-2">
            {['all', 'success', 'warning', 'error', 'info'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === type
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
      </div>
    </div>

    {/* Notifications List */}
    <div className="space-y-4">
      {filteredNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="mt-1">{getIcon(notification.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {notification.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {notification.timestamp}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {notification.message}
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-gray-400" size={16} />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Campaign: {notification.campaign}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {notification.stats.verified.toLocaleString()} verified
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {notification.stats.bounced.toLocaleString()} bounced
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="text-gray-400" size={14} />
                      <span className="text-gray-600 dark:text-gray-300">
                        {notification.stats.total.toLocaleString()} total
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <MoreHorizontal className="text-gray-400" size={20} />
            </button>
          </div>

          {/* Progress bar for in-progress campaigns */}
          {notification.type === 'info' && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.round((notification.stats.verified / notification.stats.total) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(notification.stats.verified / notification.stats.total) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Empty State */}
    {filteredNotifications.length === 0 && (
      <div className="text-center py-12">
        <Bell className="mx-auto text-gray-400 mb-4" size={48} />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No notifications found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search terms</p>
      </div>
    )}
  </div>
</div>

  );
};


export default Notifications
