import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  browser: String,
  os: String,
  device: String,
  path: String,
  referrer: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  duration: Number,
  bounced: {
    type: Boolean,
    default: true,
  },
});

export const Visit = mongoose.model('Visit', visitSchema);