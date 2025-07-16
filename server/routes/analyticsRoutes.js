const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

// @route   GET /api/analytics
router.get('/', async (req, res) => {
    try {
        const data = await Analytics.find().populate('campaign user');
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/analytics
router.post('/', async (req, res) => {
    try {
        const newEntry = new Analytics(req.body);
        const saved = await newEntry.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
