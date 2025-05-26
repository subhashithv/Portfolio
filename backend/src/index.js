import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';

// Load environment variables before connecting to MongoDB
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});