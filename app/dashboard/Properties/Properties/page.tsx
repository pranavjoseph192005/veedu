import React from 'react';

const columns = ['ID', 'Address', 'City', 'State', 'Zip', 'Latitude', 'Longitude'];
const data = [
  [1, '3101 Oak Hill Rd', 'Carrollton', 'TX', '75007', 33.0043, -96.8817],
  [2, '2032 Meadfoot Rd', 'Carrollton', 'TX', '75007', 33.0091, -96.8753],
  // Add more rows as needed
];

const FullPageTable = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className={`w-full ${compact ? 'max-h-[300px]' : 'min-h-screen'} overflow-auto`}>
      <div className={`${compact ? '' : 'p-6'} bg-white rounded-xl shadow-md`}>
        <table className="w-full table-auto border-collapse text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-gray-600 font-medium border-b border-gray-200 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`transition ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-gray-800 truncate max-w-[200px]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FullPageTable;
