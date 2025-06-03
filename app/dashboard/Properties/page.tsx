import React from 'react';

const columns = ['ID', 'Address', 'City', 'State', 'Zip', 'Latitude', 'Longitude'];
const data = [
  [1, '3101 Oak Hill Rd', 'Carrollton', 'TX', '75007', 33.0043, -96.8817],
  [2, '2032 Meadfoot Rd', 'Carrollton', 'TX', '75007', 33.0091, -96.8753],
  // more...
];

export default function FullScreenTable() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col px-10 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Property List</h1>
      
      <div className="flex-grow overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="grid grid-cols-7 gap-4 text-xs text-gray-500 font-medium px-6 py-3 border-b border-gray-100 uppercase sticky top-0 bg-white z-10">
          {columns.map((col, i) => (
            <div key={i}>{col}</div>
          ))}
        </div>

        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-7 gap-4 px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="text-sm text-gray-700 truncate">{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
