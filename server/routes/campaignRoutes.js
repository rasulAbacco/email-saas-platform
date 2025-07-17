const express = require('express');
const router = express.Router();
const { getRecentCampaigns, postRecentCampaigns } = require('../controllers/campaignController');
const { protect } = require('../middleware/authMiddleware');

router.get('/recent', protect, getRecentCampaigns);
router.post('/recent', protect, postRecentCampaigns);

module.exports = router;
