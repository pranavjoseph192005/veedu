import React from 'react';
import Link from 'next/link';
import FullPageTable from './Properties/components/page';

const Dashboardpage = async () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 p-6 bg-gray-50 min-h-screen">
      
      {/* Properties Preview */}
      <div className="row-start-1 row-span-2 col-span-1 bg-white border border-gray-200 rounded-xl shadow-md p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-gray-700 font-semibold text-lg">Properties</h2>
          <Link href="/dashboard/Properties/PropertiesDepth" className="text-sm text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="overflow-auto max-h-[400px]">
          <FullPageTable compact />
        </div>
      </div>

      {/* Tickets */}
      <div className="row-start-1 col-start-2 col-span-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg">
        Tickets
      </div>

      {/* Profit */}
      <div className="row-start-2 col-span-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg">
        Profit
      </div>

      {/* Reminders */}
      <div className="row-start-3 col-span-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg">
        Reminders
      </div>

      {/* Analytics */}
      <div className="row-start-3 col-span-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg">
        Analytics
      </div>
    </div>
  );
};

export default Dashboardpage;
