// index.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route'); // Ensure the path is correct
const authRoutes = require('./routes/auth.route'); // Ensure the path is correct
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO); // MongoDB connection string
        console.log('MongoDB is connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

connect();

// Use routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes); // Uncomment to enable authentication routes

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(8080, () => {
    console.log("Server is running at http://localhost:8080");
});
