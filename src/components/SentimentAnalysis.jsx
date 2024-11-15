import React from 'react';

const SentimentAnalysis = () => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="font-semibold">Sentiment Analysis</h2>
    <div className="mt-4">
      <p>Positive</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
      </div>
      <p>Neutral</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-gray-500 h-2 rounded-full" style={{ width: '30%' }}></div>
      </div>
      <p>Negative</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-red-500 h-2 rounded-full" style={{ width: '25%' }}></div>
      </div>
    </div>
  </div>
);

export default SentimentAnalysis;
