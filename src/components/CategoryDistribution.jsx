import React from 'react';

const CategoryDistribution = () => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="font-semibold">Category Distribution</h2>
    <div className="mt-4">
      <p>Transport</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
      </div>
      <p>Cleanliness</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div>
      </div>
      <p>Infrastructure</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '25%' }}></div>
      </div>
    </div>
  </div>
);

export default CategoryDistribution;
