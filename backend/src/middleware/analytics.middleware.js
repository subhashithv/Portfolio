import UAParser from 'ua-parser-js';
import { Visit } from '../models/Visit.model.js';

export const trackVisitor = async (req, res, next) => {
  try {
    const parser = new UAParser(req.headers['user-agent']);
    const result = parser.getResult();
    
    const visit = new Visit({
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      browser: result.browser.name,
      os: result.os.name,
      device: result.device.type || 'desktop',
      path: req.path,
      referrer: req.headers.referer || '',
    });
    
    await visit.save();
    next();
  } catch (error) {
    console.error('Error tracking visitor:', error);
    next();
  }
};