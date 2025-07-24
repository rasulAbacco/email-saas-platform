const express = require('express');
const {
    verifyEmails,
    domainCheck,
} = require('../controllers/emailVerifyController.js');

const router = express.Router();

console.log('verifyEmails:', typeof verifyEmails); // should be function

router.post('/verify', verifyEmails);
router.post('/domain-check', domainCheck);

module.exports = router;
