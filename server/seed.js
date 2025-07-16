// server/seed.js

const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const Campaign = require('./models/Campaign');

async function seedData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');

        // Clear existing
        await User.deleteMany();
        await Campaign.deleteMany();

        const user = await User.create({
            name: 'Demo User',
            email: 'demo@example.com',
            password: 'password123'
        });

        await Campaign.create([
            {
                user: user._id,
                name: 'Welcome Campaign',
                subject: 'Welcome to Our Service',
                content: '<h1>Hello!</h1><p>Thanks for signing up.</p>',
                status: 'sent',
                sentCount: 500,
                openRate: 45,
                clickRate: 22,
                revenue: 600
            },
            {
                user: user._id,
                name: 'Launch Campaign',
                subject: 'New Features Released',
                content: '<h2>Check out our new features!</h2>',
                status: 'draft'
            }
        ]);

        console.log('✅ Seed data created successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seedData();
