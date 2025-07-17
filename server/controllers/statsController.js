// controllers/statsController.js

// Temporary in-memory data storage
let savedMetrics = {
    totalEmailsSent: 12300,
    openRate: 47,
    clickRate: 22,
    revenue: 3200
};

let savedPerformance = [
    { date: 'Mon', openRate: 34, clickRate: 22 },
    { date: 'Tue', openRate: 45, clickRate: 28 },
    { date: 'Wed', openRate: 52, clickRate: 33 },
    { date: 'Thu', openRate: 48, clickRate: 25 },
    { date: 'Fri', openRate: 58, clickRate: 40 },
    { date: 'Sat', openRate: 40, clickRate: 20 },
    { date: 'Sun', openRate: 30, clickRate: 15 },
];



// GET: Metrics
exports.getMetrics = async (req, res) => {
    try {
        res.json(savedMetrics);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch metrics' });
    }
};

// GET: Performance
exports.getPerformance = async (req, res) => {
    try {
        res.json(savedPerformance);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch performance' });
    }
};

// POST: Metrics
exports.postMetrics = async (req, res) => {
    try {
        savedMetrics = req.body;
        console.log('📥 Saved Metrics:', savedMetrics);
        res.status(201).json({ message: 'Metrics saved', data: savedMetrics });
    } catch (err) {
        res.status(500).json({ message: 'Error saving metrics', error: err.message });
    }
};

// POST: Performance
exports.postPerformance = async (req, res) => {
    try {
        savedPerformance = req.body;
        console.log('📥 Saved Performance:', savedPerformance);
        res.status(201).json({ message: 'Performance saved', data: savedPerformance });
    } catch (err) {
        res.status(500).json({ message: 'Error saving performance', error: err.message });
    }
};