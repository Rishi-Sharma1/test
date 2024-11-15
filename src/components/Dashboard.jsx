import React from 'react';
import Header from './Header.jsx';
import SentimentAnalysis from './SentimentAnalysis.jsx';
import CategoryDistribution from './CategoryDistribution.jsx';
import ActivityOverview from './ActivityOverview.jsx';
import RecentFeedback from './RecentFeedback.jsx';

const Dashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <Header />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <SentimentAnalysis />
      <CategoryDistribution />
      <ActivityOverview />
    </div>
    <RecentFeedback />
  </div>
);

export default Dashboard;
