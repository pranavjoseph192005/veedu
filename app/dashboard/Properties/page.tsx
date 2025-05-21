import React from 'react'

const DashboardPage = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 bg-gray-50 min-h-screen">
      <div className="row-span-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Properties
      </div>

      <div className="row-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Rent Received In Certain Period of time
      </div>

      <div className="row-start-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Tickets 
      </div>

      <div className="row-start-3 col-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Expenses
      </div>

      <div className="row-start-3 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        something else 
      </div>
    </div>
  );
};

export default DashboardPage;
