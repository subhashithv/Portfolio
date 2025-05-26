import { Visit } from '../models/Visit.model.js';

export const getAnalytics = async (req, res) => {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
    
    const [totalVisits, uniqueVisitors, bounceRate, avgDuration] = await Promise.all([
      Visit.countDocuments({ timestamp: { $gte: thirtyDaysAgo } }),
      Visit.distinct('ip', { timestamp: { $gte: thirtyDaysAgo } }).then(ips => ips.length),
      Visit.countDocuments({ 
        timestamp: { $gte: thirtyDaysAgo },
        bounced: true 
      }).then(bounced => (bounced / totalVisits) * 100),
      Visit.aggregate([
        { $match: { timestamp: { $gte: thirtyDaysAgo } } },
        { $group: { _id: null, avg: { $avg: '$duration' } } }
      ]).then(result => result[0]?.avg || 0)
    ]);
    
    res.json({
      totalVisits,
      uniqueVisitors,
      bounceRate: `${bounceRate.toFixed(2)}%`,
      avgDuration: `${Math.round(avgDuration / 1000)}s`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics' });
  }
};