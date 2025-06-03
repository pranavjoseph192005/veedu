import React from 'react';

const columns = ['ID', 'Address', 'City', 'State', 'Zip', 'Latitude', 'Longitude'];
const data = [
  [1, '3101 Oak Hill Rd', 'Carrollton', 'TX', '75007', 33.0043, -96.8817],
  [2, '2032 Meadfoot Rd', 'Carrollton', 'TX', '75007', 33.0091, -96.8753],
  // Add more rows as needed
];

const FullPageTable = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-sm font-semibold text-gray-600 border-b border-gray-200 uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-4 text-sm text-gray-800">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullPageTable;
