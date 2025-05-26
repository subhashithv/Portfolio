import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'replied', 'spam'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export const Contact = mongoose.model('Contact', contactSchema);