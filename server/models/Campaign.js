// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: {
        type: String,
        enum: ['Sent', 'Draft', 'Scheduled'],
        required: true
    },
    subject: { type: String, default: '' },
    content: { type: String, default: '' },
    openRate: { type: Number, default: 0 },
    clickRate: { type: Number, default: 0 },
    revenue: { type: Number, default: 0 },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);
