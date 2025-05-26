import { Contact } from '../models/Contact.model.js';
import { sendEmail } from '../services/email.service.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const contact = await Contact.create({
      name,
      email,
      message,
    });
    
    // Send confirmation email
    await sendEmail(
      email,
      'Thank you for your message',
      `<p>Hi ${name},</p><p>Thank you for contacting me. I'll get back to you soon!</p>`
    );
    
    // Send notification to admin
    await sendEmail(
      process.env.SMTP_USER,
      'New Contact Form Submission',
      `<p>New message from ${name} (${email}):</p><p>${message}</p>`
    );
    
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form' });
  }
};