// server/jobs/cleanup.js

const cron = require('node-cron');
const Contact = require('../models/Contact');

const cleanupOldContacts = () => {
    // Runs every day at midnight
    cron.schedule('0 0 * * *', async () => {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const deleted = await Contact.deleteMany({ createdAt: { $lte: oneYearAgo } });

        console.log(`[JOB] Cleaned up ${deleted.deletedCount} old contacts`);
    });
};

module.exports = cleanupOldContacts;
