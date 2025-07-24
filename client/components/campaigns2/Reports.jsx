import React, { useState } from 'react';
import { BarChart3, TrendingUp, Eye, MousePointer, Mail, Users, DollarSign, Calendar, Filter, Download, RefreshCw, FileDown, FileText } from 'lucide-react';

import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const stats = [
  { name: 'Open Rate', value: 68 },
  { name: 'Click Rate', value: 32 },
  { name: 'Bounce', value: 4 },
  { name: 'Spam', value: 1 },
  { name: 'Unsubscribed', value: 2 },
];

const opensOverTime = [
  { time: '8 AM', opens: 200 },
  { time: '10 AM', opens: 500 },
  { time: '12 PM', opens: 800 },
  { time: '2 PM', opens: 300 },
  { time: '4 PM', opens: 100 },
];

const deviceData = [
  { name: 'Mobile', value: 60 },
  { name: 'Desktop', value: 30 },
  { name: 'Tablet', value: 10 },
];

const COLORS = ['#7F27FF', '#4300FF', '#AD49E1'];



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
    <div className={`bg-gradient-to-br ${color} p-6 rounded-xl border shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}{suffix}</p>
          {change && (
            <p className={`text-xs mt-1 flex items-center ${change >= 0 ? 'text-green-700' : 'text-red-700'}`}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {change >= 0 ? '+' : ''}{change}% vs last period
            </p>
          )}
        </div>
        <Icon className="w-8 h-8 opacity-60" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Campaign Reports</h1>
              <p className="text-gray-600 mt-1">Comprehensive analytics and performance insights</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Date Range:</span>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="last7days">Last 7 days</option>
                <option value="last30days">Last 30 days</option>
                <option value="last90days">Last 90 days</option>
                <option value="custom">Custom range</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Campaign:</span>
              <select
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <MetricCard
            title="Total Emails Sent"
            value={formatNumber(totals.sent)}
            change={12.5}
            icon={Mail}
            color="from-blue-50 to-blue-100 border-blue-200 text-blue-900"
          />
          <MetricCard
            title="Unique Opens"
            value={formatNumber(totals.opened)}
            change={8.3}
            icon={Eye}
            color="from-green-50 to-green-100 border-green-200 text-green-900"
          />
          <MetricCard
            title="Total Clicks"
            value={formatNumber(totals.clicked)}
            change={-2.1}
            icon={MousePointer}
            color="from-purple-50 to-purple-100 border-purple-200 text-purple-900"
          />
          <MetricCard
            title="Revenue Generated"
            value={`$${formatNumber(totals.revenue)}`}
            change={18.7}
            icon={DollarSign}
            color="from-orange-50 to-orange-100 border-orange-200 text-orange-900"
          />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Engagement Rates</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Delivery Rate</span>
                  <span className="text-sm font-bold text-gray-900">{deliveryRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${deliveryRate}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Open Rate</span>
                  <span className="text-sm font-bold text-gray-900">{openRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: `${openRate}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Click Rate</span>
                  <span className="text-sm font-bold text-gray-900">{clickRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: `${clickRate}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Bounce Rate</span>
                  <span className="text-sm font-bold text-gray-900">{bounceRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full transition-all duration-500" style={{ width: `${bounceRate}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Delivered</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{formatNumber(totals.delivered)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Opened</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{formatNumber(totals.opened)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Clicked</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{formatNumber(totals.clicked)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Bounced</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{formatNumber(totals.bounced)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Performance Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Individual Campaign Performance</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <BarChart3 className="w-4 h-4" />
              <span>Detailed metrics</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Campaign Name</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Sent</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Open Rate</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Click Rate</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Conversion</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Revenue</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">ROI</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={campaign.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}`}>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{campaign.name}</p>
                        <p className="text-sm text-gray-500 mt-1">{campaign.subject}</p>
                        <p className="text-xs text-gray-400 mt-1">Sent: {campaign.sentAt}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-medium text-gray-900">{formatNumber(campaign.sent)}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-gray-900">{campaign.openRate}%</span>
                        <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                          <div className="bg-green-500 h-1 rounded-full" style={{ width: `${campaign.openRate}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-gray-900">{campaign.clickRate}%</span>
                        <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                          <div className="bg-purple-500 h-1 rounded-full" style={{ width: `${campaign.clickRate * 2}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-medium text-blue-600">{campaign.conversionRate}%</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-bold text-green-600">${formatNumber(campaign.revenue)}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-medium text-orange-600">
                        {((campaign.revenue / (campaign.sent * 0.1)) * 100).toFixed(0)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>



      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">Campaign Report Graph View</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-gray-200 dark:bg-[#0F044C] text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#6528F7]">
              <FileText size={16} /> Export CSV
            </button>
            <button className="flex items-center gap-1 bg-gray-200 dark:bg-[#0F044C] text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#6528F7]">
              <FileDown size={16} /> Export PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Engagement Bar Chart */}
          <div className="bg-white dark:bg-[#0F044C] p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Engagement Metrics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={stats}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#7F27FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Opens Over Time */}
          <div className="bg-white dark:bg-[#0F044C] p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Opens Over Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={opensOverTime}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="opens" stroke="#4300FF" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Device Usage Pie Chart */}
          <div className="bg-white dark:bg-[#0F044C] p-4 rounded-xl shadow col-span-1 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Device Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={deviceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Summary Stats */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">{campaigns.length}</p>
              <p className="text-blue-100">Total Campaigns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{formatNumber(totals.sent)}</p>
              <p className="text-blue-100">Emails Sent</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{openRate}%</p>
              <p className="text-blue-100">Avg Open Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">${formatNumber(totals.revenue)}</p>
              <p className="text-blue-100">Total Revenue</p>
            </div>
          </div>
        </div>


    </div>
  );
};

export default Reports
