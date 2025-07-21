import React, { useState } from 'react'
import styles from '../../styles/campaigns.module.css'

function AllCampaigns() {

  const [showExportModal, setShowExportModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // State for filter modal fields
  const [campaignName, setCampaignName] = useState('');
  const [prospectList, setProspectList] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [senderAccount, setSenderAccount] = useState('');
  const [campaignStatus, setCampaignStatus] = useState('');

 const [activeFolder, setActiveFolder] = useState("All campaigns");
  const campaigns = [
    { name: 'Draft', date: '19 Jul 2025, 7:36 PM', status: 'Draft', sentEmails: 0, emailOpens: '-', linkClicks: '-', emailreplies: '0%', bounces:'0%', 
interested:'0%', }
  ];

  const handleFolderClick = (folderName) => {
    setActiveFolder(folderName);
  };

  // Handlers for modals
  const handleExportClick = () => {
    setShowExportModal(true);
  };

  const handleAddEmailClick = () => {
    setShowEmailModal(true);
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const handleCloseModal = () => {
    setShowExportModal(false);
    setShowEmailModal(false);
    setShowFilterModal(false);
  };

  const handleExport = () => {
    console.log('Exporting statistics...');
    setShowExportModal(false);
  };

  const handleApplyFilters = () => {
    console.log('Applying filters...');
    setShowFilterModal(false);
  };

  return (
    <div className=""> 
        <div className={`${styles['app-container']} bg-white text-black dark:bg-gray-900 dark:text-black`}>
        <div className={styles['header']}>
            <button className={`${styles['export-statistics-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`}>
            New Campaigns
            </button>
            <button className={`${styles['export-statistics-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`} onClick={handleExportClick}>
            Export statistics
            </button>

            <button className={`${styles['add-email-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`} onClick={handleAddEmailClick}>
            Add email account
            </button>
        </div> 

            <div className={styles['search-filter-container']}>
            <input
                className={styles['search-input']}
                type="text"
                placeholder="Search for campaign"
            />
            <button className={`${styles['filters-btn']} bg-[rgb(127,39,255)] text-white dark:bg-white dark:text-[rgb(127,39,255)]`} onClick={handleFilterClick}>
                Filters
            </button>
            </div>
        

        {/* Filter Modal */}
        {showFilterModal && (
            <div className={`${styles['modal-overlay1']}  text-black dark:bg-gray-1 dark:text-black`}>
            <div className={`${styles['modal-content']} bg-[rgb(127,39,255)] text-white dark:bg-gray-900 dark:text-white`}>
                <h2>Filters</h2>
                <label>Campaign name</label>
                <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className={styles['input-field']}
                />
                <label>Prospect list</label>
                <input
                type="text"
                value={prospectList}
                onChange={(e) => setProspectList(e.target.value)}
                className={styles['input-field']}
                />
                <label>Creation date</label>
                <input
                type="date"
                value={creationDate}
                onChange={(e) => setCreationDate(e.target.value)}
                className={styles['input-field']}
                />
                <label>Sender account</label>
                <select
                value={senderAccount}
                onChange={(e) => setSenderAccount(e.target.value)}
                className={styles['input-field']}
                >
                <option value="">Select email account</option>
                <option value="Gmail">Gmail</option>
                <option value="Outlook">Outlook</option>
                <option value="Yahoo">Yahoo</option>
                </select>
                <label>Campaign status</label>
                <select
                value={campaignStatus}
                onChange={(e) => setCampaignStatus(e.target.value)}
                className={styles['input-field']}
                >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Paused">Paused</option>
                <option value="Completed">Completed</option>
                </select>
                <div className={styles['modal-buttons']}>
                <button className={styles['cancel-btn']} onClick={handleCloseModal}>
                    Cancel
                </button>
                <button className={styles['apply-btn']} onClick={handleApplyFilters}>
                    Apply
                </button>
                </div>
            </div>
            </div>
        )}

        {/* Export statistics Modal */}
        {showExportModal && (
            <div className={`${styles['modal-overlay']} bg-[rgb(127,39,255)] text-white dark:bg-gray-1 dark:text-[rgb(127,39,255)]`} >
            <div className={`${styles['modal-content']} bg-[rgb(127,39,255)] text-white dark:bg-gray-900 dark:text-[rgb(127,39,255)]`} >
                <h2>Export statistics</h2>
                <label>Choose period for export</label>
                <select className={styles['input-field']}>
                <option value="All time">All time</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 30 days">Last 30 days</option>
                </select>
                <div className={`${styles['modal-buttons']}`}>
                <button className={`${styles['cancel-btn']} bg-white text-[rgb(127,39,255)] dark:bg-gray-1 dark:text-[rgb(127,39,255)]`} onClick={handleCloseModal}>
                    Cancel
                </button>
                <button className={styles['export-btn']} onClick={handleExport}>
                    Export
                </button>
                </div>
            </div>
            </div>
        )}

        {/* Add email account Modal */}
        {showEmailModal && (
            <div className={`${styles['modal-overlay']} bg-[rgb(127,39,255)] text-white dark:bg-gray-1 dark:text-[rgb(127,39,255)]`} >
            <div className={`${styles['modal-content']} bg-[rgb(127,39,255)] text-white dark:bg-gray-900 dark:text-[rgb(127,39,255)]`} >
                <h2>Add email account</h2>
                <div className={styles['email-icons-grid']}>
                <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/gmail.b1fd56c8.svg" alt="Gmail" />
                    <p>Gmail (SMTP)</p>
                </div>
                <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/gmail.b1fd56c8.svg" alt="Gmail" />
                    <p>Gmail</p>
                </div>
                <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/outlook.229ce2fe.svg" alt="Microsoft" />
                    <p>Microsoft</p>
                </div>
                <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/zoho.c3ec4328.svg" alt="Zoho" />
                    <p>Zoho</p>
                </div>
                <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/sendgrid.8eb5b05d.svg" alt="Sendgrid" />
                    <p>Sendgrid</p>
                </div>
                <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/ionos.8ea2939d.svg" alt="Sendgrid" />
                    <p>Ionos </p>
                </div>
                    <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/private.54a58b6c.svg" alt="Sendgrid" />
                    <p>private Email </p>
                </div>
                    <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/godaddy.330b1c19.svg " alt="Sendgrid" />
                    <p>Godaddy </p>
                </div>
                    <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/maildoso.8244907d.svg " alt="Sendgrid" />
                    <p>Maildoso </p>
                </div>
                    <div className={styles['email-icon']}>
                    <img src="https://app.snov.io/dist/generatedImg/qq.75d8e9d4.svg " alt="Sendgrid" />
                    <p>Mail QQ </p>
                </div>
                    <div className={styles['email-icon']}>
                    <img src=" " alt="Sendgrid" />
                    <p> </p>
                </div>

                </div>
                <div className={styles['modal-buttons']}>
                <button className={styles['cancel-btn']} onClick={handleCloseModal}>
                    Cancel
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
        <div className={`${styles['campaigns-container']} bg-white text-black dark:bg-gray-900 dark:text-white`}>
            
            <div className={styles['campaigns-sidebar']} >
                  <div className={styles['folders-container']}>
                    <div className={styles['folders-header']}>
                        <h6>Folders</h6>
                        {/* <div className={styles['folders-actions']}>
                        <button className={styles['folders-action-btn']}>
                            <span className="material-icons">add</span>  
                        </button>
                        <button className={styles['folders-action-btn']}>
                            <span className="material-icons">list</span>  
                        </button>
                        </div> */}
                    </div>
                   </div> 
                <div className={styles['campaigns-folder-list']}>
                    <div
                        className={styles['campaigns-folder-item']}
                        onClick={() => handleFolderClick('All campaigns')}
                    >
                        <span>📂</span> All campaigns
                    </div>
                    <div
                        className={styles['campaigns-folder-item']}
                        onClick={() => handleFolderClick('New folder')}
                    >
                        <span>📁</span> New folder
                    </div>
                </div>
            </div>
      
           <div className={`${styles['campaigns-main-content']}`}>
                <div className={styles['campaigns-campaign-table']}>
                    <table className={styles['campaigns-table']}>
                    <thead>
                        <tr className={`${styles['campaigns-table-header']} bg-white text-black dark:bg-gray-700 dark:text-white`}>
                        <th className={styles['campaigns-table-header-item']}>CAMPAIGN</th>
                        <th className={styles['campaigns-table-header-item']}>STATUS</th>
                        <th className={styles['campaigns-table-header-item']}>SENT EMAILS</th>
                        <th className={styles['campaigns-table-header-item']}>EMAIL OPENS</th>
                        <th className={styles['campaigns-table-header-item']}>LINK CLICKS</th>
                        <th className={styles['campaigns-table-header-item']}>EMAIL Replies</th>
                        <th className={styles['campaigns-table-header-item']}>Bounces</th>
                        <th className={styles['campaigns-table-header-item']}>Interested</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                        <tr key={index} className={styles['campaigns-table-row']}>
                            <td className={styles['campaigns-table-item']}>{campaign.name}</td>
                            <td className={styles['campaigns-table-item']}>
                            <span className={styles['campaigns-status-draft']}>{campaign.status}</span>
                            </td>
                            <td className={styles['campaigns-table-item']}>{campaign.sentEmails}</td>
                            <td className={styles['campaigns-table-item']}>{campaign.emailOpens}</td>
                            <td className={styles['campaigns-table-item']}>{campaign.linkClicks}</td>
                            <td className={styles['campaigns-table-item']}>{campaign.emailreplies}</td>
                            <td className={styles['campaigns-table-item']}>{campaign.bounces}</td>
                            <td className={styles['campaigns-table-item']}>{campaign.interested}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>

        </div>

    </div>

    
  );
}

export default AllCampaigns
