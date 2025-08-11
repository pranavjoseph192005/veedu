import React from 'react';
import { House } from '@prisma/client';
import getUser from '@/utils/supabase/get-user';
import { redirect } from 'next/navigation';

const columns = ['ID', 'Address', 'City', 'State', 'Zip'];

const FullPageTable = async ({ compact = false }: { compact?: boolean }) => {
  const user = await getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch user profile from your API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user?uid=${user?.id}`, {
    cache: 'no-store',
  });
  const profile = await res.json();  

  async function getHouses() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/house?ownerId=${profile?.id}`, {
      cache: 'no-store',
  });
  
    const data = await res.json();
  
    // Log or validate
    if (!Array.isArray(data)) {
      console.error("Expected array, got:", data);
      return [];
    }
  
    return data;
  }
  

  const houses: House[] = await getHouses();

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
            {houses.map((row, i) => (
              <tr
                key={row.id}
                className={`transition ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">{row.id}</td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">{row.address}</td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">{row.city}</td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">{row.state}</td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">{row.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FullPageTable;
