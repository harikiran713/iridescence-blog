const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route'); 
const authRoutes=require("./routes/auth.route.js")
const addMemberRouter = require('./routes/addmember.route.js');
require('dotenv').config();

const app = express();
app.use(express.json()); 

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO); 
        console.log('MongoDB is connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

connect();

// Use routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/members', addMemberRouter);


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
