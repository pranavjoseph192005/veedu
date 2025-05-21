import React from 'react'

const Dashboardpage = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 bg-gray-50 min-h-screen">
      <div className="row-span-3 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        evaluate a property or best properties
      </div>

      <div className="row-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Performance score
      </div>

      <div className="row-start-2 row-span-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Analytics 
      </div>
    </div>
  );
};

export default Dashboardpage;