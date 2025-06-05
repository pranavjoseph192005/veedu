import React from 'react';
import Link from 'next/link';
import FullPageTable from '../components/page';

const PropertiesDepthPage = async () => {
  return (
    <div className="p-6 bg-gray-50 flex flex-col gap-4">
      {/* Header + Button in same row */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Properties</h1>
        <Link
          href="/dashboard"
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Add Property
        </Link>
      </div>

      {/* Table */}
      <FullPageTable />
    </div>
  );
};

export default PropertiesDepthPage;

