const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    fields: [{ label: String, type: String, required: Boolean }],
    submissions: [{ type: Object }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', formSchema);
