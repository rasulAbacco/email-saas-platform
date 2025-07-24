// server/jobs/index.js

const scheduleEmailCampaigns = require('./emailScheduler');
const { cleanupOldContacts, cleanupOldRecords } = require('./cleanup'); // ✅ destructure both
const cron = require('node-cron');

const startJobs = () => {
  scheduleEmailCampaigns();
  cleanupOldContacts(); // ✅ This now works
};

// Schedule daily cleanup at 3:00 AM
cron.schedule('0 3 * * *', async () => {
  console.log('⏰ Running daily cleanup...');
  await cleanupOldRecords();
});

module.exports = startJobs;
