// server/jobs/emailScheduler.js

const cron = require('node-cron');
const Campaign = require('../models/Campaign');
const sendEmail = require('../utils/sendEmail');

const scheduleEmailCampaigns = () => {
    // Runs every minute to check for scheduled campaigns
    cron.schedule('* * * * *', async () => {
        console.log('[JOB] Checking for scheduled email campaigns...');

        const now = new Date();
        const campaigns = await Campaign.find({
            scheduledAt: { $lte: now },
            status: 'scheduled',
        });

        for (const campaign of campaigns) {
            try {
                // Send the campaign emails (mocked)
                await sendEmail({
                    to: campaign.recipients.join(','),
                    subject: campaign.subject,
                    html: campaign.htmlContent,
                });

                campaign.status = 'sent';
                campaign.sentAt = new Date();
                await campaign.save();

                console.log(`[JOB] Sent campaign: ${campaign.name}`);
            } catch (err) {
                console.error(`[ERROR] Failed to send campaign: ${campaign.name}`, err);
            }
        }
    });
};

module.exports = scheduleEmailCampaigns;
