import React from 'react';

const ActivityOverview = () => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="font-semibold">Activity Overview</h2>
    <div className="mt-4 space-y-2">
      <p>Total Feedback: <span className="text-blue-500">0</span></p>
      <p>Trending Topics: <span className="text-green-500">0</span></p>
      <p>Alerts: <span className="text-red-500">0</span></p>
    </div>
  </div>
);

export default ActivityOverview;
