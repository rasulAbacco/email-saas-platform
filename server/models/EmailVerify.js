// server/models/EmailVerify.js
const mongoose = require ('mongoose');

const EmailVerifySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    emails: [String],
    valid: [String],
    invalid: [String],
    risky: [String],
    uploadedFrom: String, // manual, file, paste
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 2592000, // 30 days in seconds
    },
});

// ✅ CommonJS style
module.exports = mongoose.model('EmailVerify', EmailVerifySchema);

