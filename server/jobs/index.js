// server/jobs/index.js

const scheduleEmailCampaigns = require('./emailScheduler');
const cleanupOldContacts = require('./cleanup');

const startJobs = () => {
    scheduleEmailCampaigns();
    cleanupOldContacts();
};

module.exports = startJobs;
