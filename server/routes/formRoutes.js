// server/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// @route   GET /api/forms
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/forms
router.post('/', async (req, res) => {
    try {
        const newForm = new Form(req.body);
        const saved = await newForm.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
