import styles from "../../styles/campaigns.module.css";

import React, { useState } from "react";
import {
  Mail,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Play,
  Pause,
  Eye,
  Edit3,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Send,
  TrendingUp,
  Calendar,
} from "lucide-react";
 
const AllCampaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
   const [isDarkMode, setIsDarkMode] = useState(false);
    const [dragActive, setDragActive] = useState(false);
  const campaigns = [
    {
      id: 1,
      name: "Welcome Series 2024",
      status: "active",
      emails: 15420,
      verified: 14205,
      bounced: 892,
      pending: 323,
      created: "2024-01-15",
      lastRun: "2024-01-20",
      verificationRate: 92.1,
    },
    {
      id: 2,
      name: "Product Launch Campaign",
      status: "paused",
      emails: 8750,
      verified: 7934,
      bounced: 516,
      pending: 300,
      created: "2024-01-10",
      lastRun: "2024-01-18",
      verificationRate: 90.7,
    },
    {
      id: 3,
      name: "Holiday Promotion",
      status: "completed",
      emails: 25600,
      verified: 23040,
      bounced: 1792,
      pending: 768,
      created: "2023-12-01",
      lastRun: "2024-01-12",
      verificationRate: 90.0,
    },
    {
      id: 4,
      name: "Newsletter Subscribers",
      status: "active",
      emails: 32100,
      verified: 29568,
      bounced: 1605,
      pending: 927,
      created: "2024-01-05",
      lastRun: "2024-01-21",
      verificationRate: 92.1,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <Play className="w-3 h-3" />;
      case "paused":
        return <Pause className="w-3 h-3" />;
      case "completed":
        return <CheckCircle className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white pt-5">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Campaigns
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Manage your email verification campaigns
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200">
              <Plus className="w-4 h-4" />
              New Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Total Campaigns",
              count: "4",
              icon: <Mail className="w-6 h-6 text-blue-600" />,
              bg: "bg-blue-100 dark:bg-blue-900",
            },
            {
              title: "Total Emails",
              count: "81,870",
              icon: <Users className="w-6 h-6 text-purple-600" />,
              bg: "bg-purple-100 dark:bg-purple-900",
            },
            {
              title: "Verified Emails",
              count: "74,747",
              icon: <CheckCircle className="w-6 h-6 text-green-600" />,
              bg: "bg-green-100 dark:bg-green-900",
            },
            {
              title: "Avg. Verification Rate",
              count: "91.2%",
              icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
              bg: "bg-orange-100 dark:bg-orange-900",
            },
          ].map(({ title, count, icon, bg }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {count}
                  </p>
                </div>
                <div className={`${bg} p-3 rounded-lg`}>{icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <select
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="completed">Completed</option>
                </select>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Campaign List */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {campaign.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {getStatusIcon(campaign.status)}
                        {campaign.status.charAt(0).toUpperCase() +
                          campaign.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {[
                        {
                          icon: <Mail className="w-4 h-4 text-gray-400" />,
                          label: "Total Emails",
                          value: campaign.emails,
                          color: "text-gray-900 dark:text-white",
                        },
                        {
                          icon: (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ),
                          label: "Verified",
                          value: campaign.verified,
                          color: "text-green-600",
                        },
                        {
                          icon: <XCircle className="w-4 h-4 text-red-500" />,
                          label: "Bounced",
                          value: campaign.bounced,
                          color: "text-red-600",
                        },
                        {
                          icon: <Clock className="w-4 h-4 text-yellow-500" />,
                          label: "Pending",
                          value: campaign.pending,
                          color: "text-yellow-600",
                        },
                      ].map(({ icon, label, value, color }, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {icon}
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {label}
                            </p>
                            <p className={`font-semibold ${color}`}>
                              {value.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Created: {campaign.created}
                        </span>
                        <span>Last run: {campaign.lastRun}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Verification Rate:
                        </span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {campaign.verificationRate}%
                        </span>
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${campaign.verificationRate}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 flex items-center gap-2">
                    {[Eye, Edit3, Send, MoreVertical].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default AllCampaigns;
