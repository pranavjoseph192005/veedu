import React from 'react';
import Link from 'next/link';
import FullPageTable from './Properties/components/page';

const Dashboardpage = async () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 bg-gray-50 min-h-screen">
      <div className="row-span-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-gray-700 font-semibold text-lg">Properties</h2>
          <Link href="/dashboard/Properties/PropertiesDepth" className="text-sm text-blue-600 hover:underline">
            View All
          </Link>
        </div>       
        <FullPageTable compact />
      </div>


      <div className="row-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
        Tickets
      </div>

      <div className="row-start-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
        Profit 
      </div>

      <div className="row-start-3 col-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
        Reminders
      </div>

      <div className="row-start-3 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
        Analytics 
      </div>
    </div>
  );
};

export default Dashboardpage;
