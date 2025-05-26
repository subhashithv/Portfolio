import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';

// Load .env variables
dotenv.config();

// Initialize express
const app = express();

// Middleware to parse JSON (optional, useful for APIs)
app.use(express.json());

// Connect to MongoDB
connectDB();

// Default route (optional, but helpful for testing)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use Render-provided port or fallback to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
