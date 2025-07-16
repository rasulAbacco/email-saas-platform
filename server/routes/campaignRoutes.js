const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// @route   GET /api/campaigns
router.get('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/campaigns
router.post('/', async (req, res) => {
    try {
        const newCampaign = new Campaign(req.body);
        const saved = await newCampaign.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
