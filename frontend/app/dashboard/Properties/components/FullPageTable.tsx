'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { House } from '@prisma/client';
import { House as HouseIcon, Plus } from 'lucide-react';
import Link from 'next/link';

const columns = ['ID', 'Address', 'City', 'State', 'Zip'];

// Type for display-only data (minimal fields)
interface DisplayHouse {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const FullPageTable = ({ compact = false }: { compact?: boolean }) => {
  const [houses, setHouses] = useState<DisplayHouse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/house/display-only');
        
        if (!response.ok) {
          if (response.status === 401) {
            setError('Please log in to view properties');
            return;
          }
          if (response.status === 404) {
            setError('User profile not found');
            return;
          }
          throw new Error('Failed to fetch properties');
        }

        const data = await response.json();
        setHouses(data);
      } catch (err) {
        console.error('Error fetching houses:', err);
        setError('Failed to load properties. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  const handleRowClick = async (houseId: string) => {
  console.log('=== ROW CLICK DEBUG ===');
  console.log('Received houseId:', houseId);
  console.log('Type of houseId:', typeof houseId);
  console.log('Is houseId undefined?', houseId === undefined);
  console.log('Is houseId string "undefined"?', houseId === 'undefined');
  
  // Stop if invalid ID
  if (!houseId || houseId === 'undefined' || houseId === undefined) {
    console.error('Invalid house ID, aborting navigation');
    return;
  }
    try {
      // Fetch full house data when user clicks
      const response = await fetch(`/api/house/${houseId}/full`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch property details');
      }

      const fullHouseData: House = await response.json();
      
      // Store temporarily for the destination page
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(`property_${houseId}`, JSON.stringify(fullHouseData));
      }
      
      // Navigate to property page
      router.push(`/dashboard/Properties/PropertyInfo/${houseId}`);
    } catch (err) {
      console.error('Error navigating to property:', err);
      // Could show a toast notification here
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center py-8">
          <div className="mb-4 text-red-500">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Error Loading Properties</h3>
          <p className="text-sm text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (houses.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center py-8">
          <div className="mb-4 flex justify-center">
            <HouseIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">No properties yet</h3>
          <p className="text-sm text-gray-500 mb-6">Get started by adding your first property to the system.</p>
          <Link 
            href="/dashboard/Properties/AddProperty" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-1"/>
            Add Property
          </Link>
        </div>
      </div>
    );
  }

  // Main table view
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
                className={`transition ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 cursor-pointer`}
                onClick={() => handleRowClick(row.id)}
              >
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">
                  {i + 1}
                </td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">
                  {row.address}
                </td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">
                  {row.city}
                </td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">
                  {row.state}
                </td>
                <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">
                  {row.zip}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FullPageTable;