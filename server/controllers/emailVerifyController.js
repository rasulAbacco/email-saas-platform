const domainCheck = async (req, res) => {
    res.status(200).json({ message: 'domainCheck working' });
};

// server/controllers/emailVerifyController.js

const EmailVerify = require('../models/EmailVerify');
const DomainCheck = require('../models/DomainCheck');
const dns = require('dns');
const { promisify } = require('util');
const resolveMx = promisify(dns.resolveMx);

const validateEmailFormat = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const verifyEmails = async (req, res) => {
    const { emails, uploadedrequire = 'manual', userId = null } = req.body;

    if (!Array.isArray(emails) || emails.length === 0) {
        return res.status(400).json({ message: 'No emails provided' });
    }

    const valid = [];
    const invalid = [];
    const risky = [];

    emails.forEach((email) => {
        const trimmed = email.trim().toLowerCase();
        if (!validateEmailFormat(trimmed)) {
            invalid.push(trimmed);
        } else if (trimmed.endsWith('@test.com') || trimmed.includes('spam')) {
            risky.push(trimmed);
        } else {
            valid.push(trimmed);
        }
    });

    const record = new EmailVerify({
        userId,
        emails,
        valid,
        invalid,
        risky,
        uploadedrequire,
    });

    await record.save();

    res.status(200).json({ valid, invalid, risky, saved: true });
};


module.exports = {
    verifyEmails,
    domainCheck,
};
