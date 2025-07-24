import React, { useState } from 'react';
import { BarChart3, TrendingUp, Eye, MousePointer, Mail, Users, DollarSign, Calendar, Filter, Download, RefreshCw } from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [selectedCampaign, setSelectedCampaign] = useState('all');

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2025',
      subject: 'Get 50% off summer essentials!',
      sent: 15420,
      delivered: 15180,
      opened: 7590,
      clicked: 1518,
      bounced: 240,
      unsubscribed: 45,
      revenue: 45600,
      sentAt: '2025-07-16',
      openRate: 49.2,
      clickRate: 9.8,
      conversionRate: 3.2
    },
    {
      id: 2,
      name: 'Product Launch Newsletter',
      subject: 'Introducing our revolutionary new product',
      sent: 12800,
      delivered: 12650,
      opened: 5060,
      clicked: 759,
      bounced: 150,
      unsubscribed: 32,
      revenue: 28400,
      sentAt: '2025-07-10',
      openRate: 40.0,
      clickRate: 6.0,
      conversionRate: 2.7
    },
    {
      id: 3,
      name: 'Customer Retention Campaign',
      subject: 'We miss you! Come back with 40% off',
      sent: 8500,
      delivered: 8350,
      opened: 4175,
      clicked: 834,
      bounced: 150,
      unsubscribed: 28,
      revenue: 18200,
      sentAt: '2025-07-05',
      openRate: 50.0,
      clickRate: 10.0,
      conversionRate: 4.1
    },
    {
      id: 4,
      name: 'Weekly Newsletter #28',
      subject: 'This week in tech: AI breakthroughs',
      sent: 22100,
      delivered: 21890,
      opened: 8756,
      clicked: 1095,
      bounced: 210,
      unsubscribed: 67,
      revenue: 12300,
      sentAt: '2025-07-12',
      openRate: 40.0,
      clickRate: 5.0,
      conversionRate: 1.8
    },
    {
      id: 5,
      name: 'Flash Sale Alert',
      subject: '⚡ 24hr Flash Sale - 60% off everything!',
      sent: 18900,
      delivered: 18720,
      opened: 11232,
      clicked: 2808,
      bounced: 180,
      unsubscribed: 89,
      revenue: 67800,
      sentAt: '2025-07-14',
      openRate: 60.0,
      clickRate: 15.0,
      conversionRate: 6.2
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const calculateTotals = () => {
    const filteredCampaigns = selectedCampaign === 'all' ? campaigns : campaigns.filter(c => c.id === parseInt(selectedCampaign));
    
    return filteredCampaigns.reduce((acc, campaign) => ({
      sent: acc.sent + campaign.sent,
      delivered: acc.delivered + campaign.delivered,
      opened: acc.opened + campaign.opened,
      clicked: acc.clicked + campaign.clicked,
      bounced: acc.bounced + campaign.bounced,
      unsubscribed: acc.unsubscribed + campaign.unsubscribed,
      revenue: acc.revenue + campaign.revenue
    }), {
      sent: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, revenue: 0
    });
  };

  const totals = calculateTotals();
  const deliveryRate = totals.sent > 0 ? ((totals.delivered / totals.sent) * 100).toFixed(1) : 0;
  const openRate = totals.sent > 0 ? ((totals.opened / totals.sent) * 100).toFixed(1) : 0;
  const clickRate = totals.sent > 0 ? ((totals.clicked / totals.sent) * 100).toFixed(1) : 0;
  const bounceRate = totals.sent > 0 ? ((totals.bounced / totals.sent) * 100).toFixed(1) : 0;

  const MetricCard = ({ title, value, change, icon: Icon, color, suffix = '' }) => (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-xl border shadow-sm dark:border-gray-700`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80 dark:opacity-90">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}{suffix}</p>
          {change && (
            <p className={`text-xs mt-1 flex items-center ${change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {change >= 0 ? '+' : ''}{change}% vs last period
            </p>
          )}
        </div>
        <Icon className="w-8 h-8 opacity-60 dark:opacity-80" />
      </div>
    </div>
  );

  return (
     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Campaign Reports</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive analytics and performance insights</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

            {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Date Range:</span>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="last7days">Last 7 days</option>
              <option value="last30days">Last 30 days</option>
              <option value="last90days">Last 90 days</option>
              <option value="custom">Custom range</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Campaign:</span>
            <select
              value={selectedCampaign}
              onChange={(e) => setSelectedCampaign(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Campaigns</option>
              {campaigns.map(campaign => (
                <option key={campaign.id} value={campaign.id}>{campaign.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

        {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Total Emails Sent" value={formatNumber(totals.sent)} change={12.5} icon={Mail} color="from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 text-blue-900 dark:text-blue-100" />
        <MetricCard title="Unique Opens" value={formatNumber(totals.opened)} change={8.3} icon={Eye} color="from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border-green-200 text-green-900 dark:text-green-100" />
        <MetricCard title="Total Clicks" value={formatNumber(totals.clicked)} change={-2.1} icon={MousePointer} color="from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 border-purple-200 text-purple-900 dark:text-purple-100" />
        <MetricCard title="Revenue Generated" value={`$${formatNumber(totals.revenue)}`} change={18.7} icon={DollarSign} color="from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 border-orange-200 text-orange-900 dark:text-orange-100" />
      </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Engagement Rates */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Engagement Rates</h3>
            <div className="space-y-6">
              {[
                { label: 'Delivery Rate', value: deliveryRate, color: 'bg-blue-500' },
                { label: 'Open Rate', value: openRate, color: 'bg-green-500' },
                { label: 'Click Rate', value: clickRate, color: 'bg-purple-500' },
                { label: 'Bounce Rate', value: bounceRate, color: 'bg-red-500' },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className={`${color} h-2 rounded-full transition-all duration-500`} style={{ width: `${value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Breakdown</h3>
            <div className="space-y-4">
              {[
                { label: 'Delivered', value: totals.delivered, bg: 'bg-blue-50 dark:bg-blue-900', dot: 'bg-blue-500' },
                { label: 'Opened', value: totals.opened, bg: 'bg-green-50 dark:bg-green-900', dot: 'bg-green-500' },
                { label: 'Clicked', value: totals.clicked, bg: 'bg-purple-50 dark:bg-purple-900', dot: 'bg-purple-500' },
                { label: 'Bounced', value: totals.bounced, bg: 'bg-red-50 dark:bg-red-900', dot: 'bg-red-500' },
              ].map(({ label, value, bg, dot }) => (
                <div key={label} className={`flex justify-between items-center p-3 ${bg} rounded-lg`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${dot} rounded`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{formatNumber(value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


       {/* Campaign Performance Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Individual Campaign Performance</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <BarChart3 className="w-4 h-4" />
            <span>Detailed metrics</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                {['Campaign Name', 'Sent', 'Open Rate', 'Click Rate', 'Conversion', 'Revenue', 'ROI'].map((heading) => (
                  <th key={heading} className="text-center first:text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr
                  key={campaign.id}
                  className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    index % 2 === 0 ? 'bg-gray-25 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
                  }`}
                >
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{campaign.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{campaign.subject}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Sent: {campaign.sentAt}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-medium text-gray-900 dark:text-white">{formatNumber(campaign.sent)}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{campaign.openRate}%</span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-1">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: `${campaign.openRate}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{campaign.clickRate}%</span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-1">
                        <div className="bg-purple-500 h-1 rounded-full" style={{ width: `${campaign.clickRate * 2}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-medium text-blue-600 dark:text-blue-400">{campaign.conversionRate}%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-bold text-green-600 dark:text-green-400">${formatNumber(campaign.revenue)}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-medium text-orange-600 dark:text-orange-400">
                      {((campaign.revenue / (campaign.sent * 0.1)) * 100).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* Summary Stats */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold">{campaigns.length}</p>
            <p className="text-blue-100 dark:text-blue-200">Total Campaigns</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{formatNumber(totals.sent)}</p>
            <p className="text-blue-100 dark:text-blue-200">Emails Sent</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{openRate}%</p>
            <p className="text-blue-100 dark:text-blue-200">Avg Open Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">${formatNumber(totals.revenue)}</p>
            <p className="text-blue-100 dark:text-blue-200">Total Revenue</p>
          </div>
        </div>
      </div>

        
      </div>
    </div>
  );
};

export default Reports
