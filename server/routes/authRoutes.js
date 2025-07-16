// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { register, login, forgotPassword, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); // ✅ Destructure to get protect


router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/me', protect, getMe); // ✅ Add this route


module.exports = router;
