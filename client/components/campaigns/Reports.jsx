import React, { useState, Fragment } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { MdOutlineMailOutline } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
 
// last page top one
  const dailyData = [
    { date: '2025-06-24', replies: 0 },
    { date: '2025-06-25', replies: 5 },
    { date: '2025-06-26', replies: 12 },
    { date: '2025-06-27', replies: 8 },
    { date: '2025-06-28', replies: 10 },
    { date: '2025-06-29', replies: 15 },
  ];

  const weeklyData = [
    { week: 'Week 1', replies: 30 },
    { week: 'Week 2', replies: 25 },
    { week: 'Week 3', replies: 40 },
    { week: 'Week 4', replies: 20 },
  ];
 const dateOptions = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 days', value: 'last_7_days' },
  { label: 'Last 30 days', value: 'last_30_days' },
  { label: 'This month', value: 'this_month' },
  { label: 'Last month', value: 'last_month' },
];

 

export default function Reports() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('email');

  const [active, setActive] = useState('Daily');
  const granularity = ['Daily', 'Weekly', 'Monthly'];
  const chartData = active === 'Daily' ? dailyData : weeklyData;

    const tabs = [
    { name: 'Email', key: 'email' },
    { name: 'LinkedIn', key: 'linkedin' },
    { name: 'General', key: 'general' },
  ];
  const [date, setDate] = useState({ label: 'Last 7 days', value: 'last_7_days' });

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 space-y-6">

        {/* Header + Toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Reports</h1>
           
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-4 py-2 -mb-px font-medium
                ${activeTab === tab.key
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'}
              `}
            >
              {tab.name}
            </button>
          ))}
          <div className="flex-1" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Time zone: (Asia/Calcutta+05:30)</span>
          <a href="#" className="ml-4 text-sm text-blue-600 dark:text-blue-400">How we calculate statistics</a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          {['All campaigns', 'All email accounts'].map(opt => (
            <select
              key={opt}
              className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded"
            >
              <option>{opt}</option>
            </select>
          ))}
          <Menu as="div" className="relative">
            <MenuButton className="inline-flex items-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
              {date.label}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </MenuButton>
            <MenuItems className="py-1 absolute mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-10">
              {dateOptions.map(opt => (
                <MenuItem key={opt.value} as={Fragment}>
                  {({ active }) => (
                    <button
                      onClick={() => setDate(opt)}
                      className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                    >
                      {opt.label}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
          <button className="ml-auto flex items-center space-x-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
            {/* replace with actual download icon */}
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6M8 14l4 4 4-4M12 3v9"/></svg>
            <span className="text-sm text-gray-600 dark:text-gray-400">Export CSV</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Emails sent */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                {/* mail icon */}
                <MdOutlineMailOutline />
              </div>
              <span className="ml-2 font-semibold">Emails sent</span>
            </div>
            <div className="text-3xl font-bold">0</div>
            <div className="mt-2 text-sm">
              <p className="text-purple-600">First emails: 0%</p>
              <p className="text-blue-500">Follow-ups: 0%</p>
            </div>
          </div>

          {/* Deliverability */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                {/* check icon */}
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <span className="ml-2 font-semibold">Deliverability</span>
            </div>
            <div className="text-sm">
              <p className="text-purple-600">Delivered: 0%</p>
              <p className="text-red-600">Bounced: 0%</p>
            </div>
          </div>

          {/* Engagement funnel */}
          <div className="col-span-1 md:col-span-2 bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Engagement funnel</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Track your campaign performance through key engagement stages.
            </p>
            <div className="grid grid-cols-4 text-center text-sm">
              {['Contacted', 'Open rate', 'Click rate', 'Reply rate'].map(label => (
                <div key={label}>
                  <div className="text-xl font-bold">0</div>
                  <div className="mt-1">{label}</div>
                  <div className="h-1 bg-green-200 dark:bg-green-700 mt-2 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Potential value */}
          <div className="bg-orange-100 dark:bg-orange-800 p-4 rounded-lg shadow">
            <span className="font-semibold">Potential value</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total value of campaign deals.</p>
            <div className="mt-2 text-3xl font-bold">$0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">0 Deals</div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 12l6 6 6-6"/></svg>
                    <div className="ml-2">
                      <div className="font-semibold">Unsubscribed</div>
                      <div className="text-xl font-bold">0%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">(0 recipients)</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5"/></svg>
                    <div className="ml-2">
                      <div className="font-semibold">Auto-replied</div>
                      <div className="text-xl font-bold">0%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">(0 recipients)</div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

{/* graph */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      {/* Granularity Toggle */}
      <div className="flex space-x-2 mb-4">
        {granularity.map((g) => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={`px-4 py-2 rounded ${
              active === g
                ? 'border border-purple-600 text-purple-600'
                : 'border border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <XAxis
              dataKey={active === 'Daily' ? 'date' : 'week'} // Switch dataKey based on granularity
              tickFormatter={(d) =>
                active === 'Daily'
                  ? new Date(d).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })
                  : d
              }
              stroke="#8884d8"
            />
            <YAxis stroke="#8884d8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
              }}
              labelFormatter={(d) =>
                active === 'Daily'
                  ? new Date(d).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  : d
              }
              formatter={(value) => [`Replies: ${value}`, '']}
            />
            <Line
              type="monotone"
              dataKey="replies"
              stroke="#8b5cf6"
              dot={{ r: 6, fill: '#8b5cf6' }}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
        <span className="flex items-center">
          <span className="inline-block w-3 h-3 bg-blue-500 mr-1 rounded-full" />
          Emails sent
        </span>
        <span className="flex items-center">
          <span className="inline-block w-3 h-3 bg-purple-600 mr-1 rounded-full" />
          Replies
        </span>
        {/* Add more as needed */}
      </div>
    </div>
 

    </div>
  );
}
