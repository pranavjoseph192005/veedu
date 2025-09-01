import React from 'react';
import FullPageTable from './components/page' // adjust path as needed
import Link from 'next/link'

const PropertiesPage = async () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl">
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 min-h-screen">
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
          Rent Received In Certain Period of Time
        </div>

        <div className="row-start-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
          Tickets 
        </div>

        <div className="row-start-3 col-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
          Expenses
        </div>

        <div className="row-start-3 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg transition">
          Something Else 
        </div>
      </div>
    </main>
  );
};

export default PropertiesPage;
