require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Database connection 🥳
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);

        console.log('Database connected 🥳🥳🥳🥳');
    } catch (error) {
        console.error('Connection failed ☹️☹️☹️☹️', error);
    }
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
