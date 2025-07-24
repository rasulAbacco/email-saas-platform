// server/jobs/cleanup.js

const cron = require('node-cron');
const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const EmailVerify = require('../models/EmailVerify');
const DomainCheck = require('../models/DomainCheck');

const cleanupOldContacts = () => {
  cron.schedule('0 0 * * *', async () => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const deleted = await Contact.deleteMany({ createdAt: { $lte: oneYearAgo } });

    console.log(`[JOB] Cleaned up ${deleted.deletedCount} old contacts`);
  });
};

const cleanupOldRecords = async () => {
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const emailDel = await EmailVerify.deleteMany({ createdAt: { $lt: cutoff } });
  const domainDel = await DomainCheck.deleteMany({ createdAt: { $lt: cutoff } });

  console.log(`🧹 Cleanup complete:
  - EmailVerify: ${emailDel.deletedCount} deleted
  - DomainCheck: ${domainDel.deletedCount} deleted`);
};

module.exports = {
  cleanupOldContacts,
  cleanupOldRecords,
};
