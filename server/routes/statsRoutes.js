const express = require('express');
const router = express.Router();
const {
    getMetrics,
    getPerformance,
    postMetrics,
    postPerformance,
} = require('../controllers/statsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/metrics', protect, getMetrics);
router.get('/performance', protect, getPerformance);

// ✅ Add POST routes
router.post('/metrics', protect, postMetrics);
router.post('/performance', protect, postPerformance);

module.exports = router;
