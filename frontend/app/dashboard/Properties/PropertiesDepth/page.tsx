import React from 'react';
import Link from 'next/link';
import FullPageTable from '../components/page';

const PropertiesDepthPage = async () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl">
      <div className="p-6 flex flex-col gap-4">
        {/* Header + Button in same row */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Properties</h1>
          <Link
            href="/dashboard/Properties/AddProperty"
            className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Add Property
          </Link>
        </div>

        {/* Table */}
        <FullPageTable />
      </div>
    </main>
  );
};

export default PropertiesDepthPage;

