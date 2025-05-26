import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { submitContact } from '../controllers/contact.controller.js';
import { Contact } from '../models/Contact.model.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
router.post('/', submitContact);

// @route   GET /api/contact
// @desc    Get all contact submissions (admin only)
router.get('/', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

// @route   PUT /api/contact/:id
// @desc    Update contact status (admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact' });
  }
});

export default router;