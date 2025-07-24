// server/models/DomainCheck.js
const mongoose = require ('mongoose');

const DomainCheckSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    domains: [String],
    results: [
        {
            domain: String,
            status: String, // 'open', 'closed', 'invalid'
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 2592000, // Auto-delete after 30 days (30 * 24 * 60 * 60)
    },
});

module.exports = mongoose.model('DomainCheck', DomainCheckSchema);
