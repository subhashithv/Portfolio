import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Users, Clock, MousePointer } from 'lucide-react';
import { AdminStats, AnalyticsData } from '../../types';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalVisitors: 0,
    activeUsers: 0,
    bounceRate: '0%',
    avgSessionDuration: '0:00',
  });

  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    visitors: 0,
    pageViews: 0,
    avgTimeOnSite: '0:00',
    topPages: [],
  });

  useEffect(() => {
    // Simulated data - replace with actual analytics API calls
    setStats({
      totalVisitors: 1234,
      activeUsers: 45,
      bounceRate: '35%',
      avgSessionDuration: '2:45',
    });

    setAnalyticsData({
      visitors: 1234,
      pageViews: 3456,
      avgTimeOnSite: '2:45',
      topPages: [
        { page: '/', views: 1200 },
        { page: '/projects', views: 800 },
        { page: '/blog', views: 600 },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="bg-gray-800 rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold">Total Visitors</h3>
            </div>
            <p className="text-3xl font-bold">{stats.totalVisitors}</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <MousePointer className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-lg font-semibold">Active Users</h3>
            </div>
            <p className="text-3xl font-bold">{stats.activeUsers}</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <BarChart className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold">Bounce Rate</h3>
            </div>
            <p className="text-3xl font-bold">{stats.bounceRate}</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold">Avg. Session</h3>
            </div>
            <p className="text-3xl font-bold">{stats.avgSessionDuration}</p>
          </motion.div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Traffic Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Page Views</span>
                <span className="font-bold">{analyticsData.pageViews}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Avg. Time on Site</span>
                <span className="font-bold">{analyticsData.avgTimeOnSite}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Top Pages</h3>
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{page.page}</span>
                  <span className="font-bold">{page.views} views</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;