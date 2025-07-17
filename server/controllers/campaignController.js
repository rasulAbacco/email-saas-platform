const Campaign = require('../models/Campaign');

// Save recent campaign to DB
exports.postRecentCampaigns = async (req, res) => {
    try {
        const { campaigns } = req.body;

        // Save each campaign (can also use insertMany for bulk)
        const created = await Campaign.insertMany(
            campaigns.map(c => ({ ...c, createdBy: req.user._id }))
        );

        res.status(201).json({ message: 'Saved to DB', data: created });
    } catch (err) {
        res.status(500).json({ message: 'Error saving campaigns', error: err.message });
    }
};

// Fetch recent campaigns from DB
exports.getRecentCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find({ createdBy: req.user._id })
            .sort({ createdAt: -1 })
            .limit(5);
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching campaigns', error: err.message });
    }
};
