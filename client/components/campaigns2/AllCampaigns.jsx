
import styles from '../../styles/campaigns.module.css'

// function AllCampaigns() {

//   const [showExportModal, setShowExportModal] = useState(false);
//   const [showEmailModal, setShowEmailModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);

//   // State for filter modal fields
//   const [campaignName, setCampaignName] = useState('');
//   const [prospectList, setProspectList] = useState('');
//   const [creationDate, setCreationDate] = useState('');
//   const [senderAccount, setSenderAccount] = useState('');
//   const [campaignStatus, setCampaignStatus] = useState('');

//  const [activeFolder, setActiveFolder] = useState("All campaigns");
//   const campaigns = [
//     { name: 'Draft', date: '19 Jul 2025, 7:36 PM', status: 'Draft', sentEmails: 0, emailOpens: '-', linkClicks: '-', emailreplies: '0%', bounces:'0%', 
// interested:'0%', }
//   ];

//   const handleFolderClick = (folderName) => {
//     setActiveFolder(folderName);
//   };

//   // Handlers for modals
//   const handleExportClick = () => {
//     setShowExportModal(true);
//   };

//   const handleAddEmailClick = () => {
//     setShowEmailModal(true);
//   };

//   const handleFilterClick = () => {
//     setShowFilterModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowExportModal(false);
//     setShowEmailModal(false);
//     setShowFilterModal(false);
//   };

//   const handleExport = () => {
//     console.log('Exporting statistics...');
//     setShowExportModal(false);
//   };

//   const handleApplyFilters = () => {
//     console.log('Applying filters...');
//     setShowFilterModal(false);
//   };

//   return (
//     <div className="mt-5 pt-5"> 
//         <div className={`${styles['app-container']} bg-white text-black dark:bg-gray-900 dark:text-black`}>
//         <div className={styles['header']}>
//             <button className={`${styles['export-statistics-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`}>
//             New Campaigns
//             </button>
//             <button className={`${styles['export-statistics-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`} onClick={handleExportClick}>
//             Export statistics
//             </button>

//             <button className={`${styles['add-email-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`} onClick={handleAddEmailClick}>
//             Add email account
//             </button>
//         </div> 

//             <div className={styles['search-filter-container']}>
//             <input
//                 className={styles['search-input']}
//                 type="text"
//                 placeholder="Search for campaign"
//             />
//             <button className={`${styles['filters-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`} onClick={handleFilterClick}>
//                 Filters
//             </button>
//             </div>
        

//         {/* Filter Modal */}
//         {showFilterModal && (
//             <div className={`${styles['modal-overlay1']}  text-black dark:bg-gray-1 dark:text-black`}>
//             <div className={`${styles['modal-content']} bg-[rgb(127,39,255)] text-white dark:bg-gray-900 dark:text-white`}>
//                 <h2>Filters</h2>
//                 <label>Campaign name</label>
//                 <input
//                 type="text"
//                 value={campaignName}
//                 onChange={(e) => setCampaignName(e.target.value)}
//                 className={styles['input-field']}
//                 />
//                 <label>Prospect list</label>
//                 <input
//                 type="text"
//                 value={prospectList}
//                 onChange={(e) => setProspectList(e.target.value)}
//                 className={styles['input-field']}
//                 />
//                 <label>Creation date</label>
//                 <input
//                 type="date"
//                 value={creationDate}
//                 onChange={(e) => setCreationDate(e.target.value)}
//                 className={styles['input-field']}
//                 />
//                 <label>Sender account</label>
//                 <select
//                 value={senderAccount}
//                 onChange={(e) => setSenderAccount(e.target.value)}
//                 className={styles['input-field']}
//                 >
//                 <option value="">Select email account</option>
//                 <option value="Gmail">Gmail</option>
//                 <option value="Outlook">Outlook</option>
//                 <option value="Yahoo">Yahoo</option>
//                 </select>
//                 <label>Campaign status</label>
//                 <select
//                 value={campaignStatus}
//                 onChange={(e) => setCampaignStatus(e.target.value)}
//                 className={styles['input-field']}
//                 >
//                 <option value="">Select status</option>
//                 <option value="Active">Active</option>
//                 <option value="Paused">Paused</option>
//                 <option value="Completed">Completed</option>
//                 </select>
//                 <div className={styles['modal-buttons']}>
//                 <button className={styles['cancel-btn']} onClick={handleCloseModal}>
//                     Cancel
//                 </button>
//                 <button className={styles['apply-btn']} onClick={handleApplyFilters}>
//                     Apply
//                 </button>
//                 </div>
//             </div>
//             </div>
//         )}

//         {/* Export statistics Modal */}
//         {showExportModal && (
//             <div className={`${styles['modal-overlay']} bg-[rgb(127,39,255)] text-white dark:bg-gray-1 dark:text-[rgb(127,39,255)]`} >
//             <div className={`${styles['modal-content']} bg-[rgb(127,39,255)] text-white dark:bg-gray-900 dark:text-[rgb(127,39,255)]`} >
//                 <h2>Export statistics</h2>
//                 <label>Choose period for export</label>
//                 <select className={styles['input-field']}>
//                 <option value="All time">All time</option>
//                 <option value="Last 7 days">Last 7 days</option>
//                 <option value="Last 30 days">Last 30 days</option>
//                 </select>
//                 <div className={`${styles['modal-buttons']}`}>
//                 <button className={`${styles['cancel-btn']} bg-white text-[rgb(127,39,255)] dark:bg-gray-1 dark:text-[rgb(127,39,255)]`} onClick={handleCloseModal}>
//                     Cancel
//                 </button>
//                 <button className={styles['export-btn']} onClick={handleExport}>
//                     Export
//                 </button>
//                 </div>
//             </div>
//             </div>
//         )}

//         {/* Add email account Modal */}
//         {showEmailModal && (
//             <div className={`${styles['modal-overlay']} bg-[rgb(127,39,255)] text-white dark:bg-gray-1 dark:text-[rgb(127,39,255)]`} >
//             <div className={`${styles['modal-content']} bg-[rgb(127,39,255)] text-white dark:bg-gray-900 dark:text-[rgb(127,39,255)]`} >
//                 <h2>Add email account</h2>
//                 <div className={styles['email-icons-grid']}>
//                 <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/gmail.b1fd56c8.svg" alt="Gmail" />
//                     <p>Gmail (SMTP)</p>
//                 </div>
//                 <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/gmail.b1fd56c8.svg" alt="Gmail" />
//                     <p>Gmail</p>
//                 </div>
//                 <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/outlook.229ce2fe.svg" alt="Microsoft" />
//                     <p>Microsoft</p>
//                 </div>
//                 <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/zoho.c3ec4328.svg" alt="Zoho" />
//                     <p>Zoho</p>
//                 </div>
//                 <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/sendgrid.8eb5b05d.svg" alt="Sendgrid" />
//                     <p>Sendgrid</p>
//                 </div>
//                 <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/ionos.8ea2939d.svg" alt="Sendgrid" />
//                     <p>Ionos </p>
//                 </div>
//                     <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/private.54a58b6c.svg" alt="Sendgrid" />
//                     <p>private Email </p>
//                 </div>
//                     <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/godaddy.330b1c19.svg " alt="Sendgrid" />
//                     <p>Godaddy </p>
//                 </div>
//                     <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/maildoso.8244907d.svg " alt="Sendgrid" />
//                     <p>Maildoso </p>
//                 </div>
//                     <div className={styles['email-icon']}>
//                     <img src="https://app.snov.io/dist/generatedImg/qq.75d8e9d4.svg " alt="Sendgrid" />
//                     <p>Mail QQ </p>
//                 </div>
//                     <div className={styles['email-icon']}>
//                     <img src=" " alt="Sendgrid" />
//                     <p> </p>
//                 </div>

//                 </div>
//                 <div className={styles['modal-buttons']}>
//                 <button className={styles['cancel-btn']} onClick={handleCloseModal}>
//                     Cancel
//                 </button>
//                 </div>
//             </div>
//             </div>
//         )}
//         </div>
//         <div className={`${styles['campaigns-container']} bg-white text-black dark:bg-gray-900 dark:text-white`}>
            
//             <div className={styles['campaigns-sidebar']} >
//                   <div className={styles['folders-container']}>
//                     <div className={styles['folders-header']}>
//                         <h6>Folders</h6>
//                         {/* <div className={styles['folders-actions']}>
//                         <button className={styles['folders-action-btn']}>
//                             <span className="material-icons">add</span>  
//                         </button>
//                         <button className={styles['folders-action-btn']}>
//                             <span className="material-icons">list</span>  
//                         </button>
//                         </div> */}
//                     </div>
//                    </div> 
//                 <div className={styles['campaigns-folder-list']}>
//                     <div
//                         className={styles['campaigns-folder-item']}
//                         onClick={() => handleFolderClick('All campaigns')}
//                     >
//                         <span>📂</span> All campaigns
//                     </div>
//                     <div
//                         className={styles['campaigns-folder-item']}
//                         onClick={() => handleFolderClick('New folder')}
//                     >
//                         <span>📁</span> New folder
//                     </div>
//                 </div>
//             </div>
      
//            <div className={`${styles['campaigns-main-content']}`}>
//                 <div className={styles['campaigns-campaign-table']}>
//                     <table className={styles['campaigns-table']}>
//                     <thead>
//                         <tr className={`${styles['campaigns-table-header']} bg-white text-black dark:bg-gray-700 dark:text-white`}>
//                         <th className={styles['campaigns-table-header-item']}>CAMPAIGN</th>
//                         <th className={styles['campaigns-table-header-item']}>STATUS</th>
//                         <th className={styles['campaigns-table-header-item']}>SENT EMAILS</th>
//                         <th className={styles['campaigns-table-header-item']}>EMAIL OPENS</th>
//                         <th className={styles['campaigns-table-header-item']}>LINK CLICKS</th>
//                         <th className={styles['campaigns-table-header-item']}>EMAIL Replies</th>
//                         <th className={styles['campaigns-table-header-item']}>Bounces</th>
//                         <th className={styles['campaigns-table-header-item']}>Interested</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {campaigns.map((campaign, index) => (
//                         <tr key={index} className={styles['campaigns-table-row']}>
//                             <td className={styles['campaigns-table-item']}>{campaign.name}</td>
//                             <td className={styles['campaigns-table-item']}>
//                             <span className={styles['campaigns-status-draft']}>{campaign.status}</span>
//                             </td>
//                             <td className={styles['campaigns-table-item']}>{campaign.sentEmails}</td>
//                             <td className={styles['campaigns-table-item']}>{campaign.emailOpens}</td>
//                             <td className={styles['campaigns-table-item']}>{campaign.linkClicks}</td>
//                             <td className={styles['campaigns-table-item']}>{campaign.emailreplies}</td>
//                             <td className={styles['campaigns-table-item']}>{campaign.bounces}</td>
//                             <td className={styles['campaigns-table-item']}>{campaign.interested}</td>
//                         </tr>
//                         ))}
//                     </tbody>
//                     </table>
//                 </div>
//             </div>

//         </div>

//     </div>

    
//   );
// }

import React, { useState } from 'react';
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
  Calendar
} from 'lucide-react';

const AllCampaigns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const campaigns = [
    {
      id: 1,
      name: 'Welcome Series 2024',
      status: 'active',
      emails: 15420,
      verified: 14205,
      bounced: 892,
      pending: 323,
      created: '2024-01-15',
      lastRun: '2024-01-20',
      verificationRate: 92.1
    },
    {
      id: 2,
      name: 'Product Launch Campaign',
      status: 'paused',
      emails: 8750,
      verified: 7934,
      bounced: 516,
      pending: 300,
      created: '2024-01-10',
      lastRun: '2024-01-18',
      verificationRate: 90.7
    },
    {
      id: 3,
      name: 'Holiday Promotion',
      status: 'completed',
      emails: 25600,
      verified: 23040,
      bounced: 1792,
      pending: 768,
      created: '2023-12-01',
      lastRun: '2024-01-12',
      verificationRate: 90.0
    },
    {
      id: 4,
      name: 'Newsletter Subscribers',
      status: 'active',
      emails: 32100,
      verified: 29568,
      bounced: 1605,
      pending: 927,
      created: '2024-01-05',
      lastRun: '2024-01-21',
      verificationRate: 92.1
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <Play className="w-3 h-3" />;
      case 'paused': return <Pause className="w-3 h-3" />;
      case 'completed': return <CheckCircle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 w-full ">
      {/* Header */}
      <div className="bg-white w-full border-b border-gray-200 ">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Campaigns</h1>
              <p className="text-sm text-gray-600 mt-1 dark:text-gray-200">Manage your email verification campaigns</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              New Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Campaigns</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Emails</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">81,870</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Verified Emails</p>
                <p className="text-2xl font-bold text-green-600 mt-1">74,747</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Verification Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">91.2%</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="completed">Completed</option>
                </select>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Campaign List */}
          <div className="divide-y divide-gray-200">
            {filteredCampaigns.map((campaign) => (
              <div key={campaign.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(campaign.status)}`}>
                        {getStatusIcon(campaign.status)}
                        {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Total Emails</p>
                          <p className="font-semibold text-gray-900">{campaign.emails.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <div>
                          <p className="text-xs text-gray-500">Verified</p>
                          <p className="font-semibold text-green-600">{campaign.verified.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="text-xs text-gray-500">Bounced</p>
                          <p className="font-semibold text-red-600">{campaign.bounced.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-500" />
                        <div>
                          <p className="text-xs text-gray-500">Pending</p>
                          <p className="font-semibold text-yellow-600">{campaign.pending.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Created: {campaign.created}
                        </span>
                        <span>Last run: {campaign.lastRun}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Verification Rate:</span>
                        <span className="font-semibold text-blue-600">{campaign.verificationRate}%</span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${campaign.verificationRate}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-6 flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Send className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
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

 
export default AllCampaigns
