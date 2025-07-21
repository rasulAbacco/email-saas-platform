import React from 'react'
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

function Notifications() {
  return (
    <div>
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
   

    </div>
  );
}

export default Notifications
