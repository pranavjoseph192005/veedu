'use client';

import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "./UserContext";

const Dashboardpage = () => {
  const { profile } = useContext(UserContext);
  const ownerId = profile?.id;

  const [houses, setHouses] = useState<any[]>([]);

  useEffect(() => {
    async function getHouses() {
      if (!ownerId) return;
      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/house?ownerId=${ownerId}`, {
        cache: 'no-store',
      });
      const data = await res.json();
      setHouses(data);
    }

    getHouses();
  }, [ownerId]);

  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 bg-gray-50 min-h-screen">
      <div className="row-span-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        You have {houses.length} Properties
      </div>

      <div className="row-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Tickets
      </div>

      <div className="row-start-2 col-start-1 row-span-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Profit
      </div>

      <div className="row-start-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Reminders 
      </div>

      <div className="row-start-3 col-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Analytics
      </div>

      <div className="row-start-3 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
        Performance 
      </div>
    </div>
  );
}

export default Dashboardpage;
