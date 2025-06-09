'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from '@/app/api/auth/signout';
import { UserContext } from "../UserContext"
import { useContext } from 'react';


const Sidebar = () => {
  const { profile } = useContext(UserContext);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;


  const linkClasses = (path: string) =>
    `w-full text-center py-3 rounded-xl transition-all duration-200 shadow-sm ${
      isActive(path)
        ? 'bg-blue-100 text-blue-600 font-semibold shadow-md'
        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'
    }`;

  return (
    <div className="min-h-screen w-60 bg-white border-r border-gray-200 py-6 px-4 flex flex-col justify-between items-center shadow-lg">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-2xl font-bold text-blue-600 mb-6">Veedu</div>
        <div className="text-2xl font-bold text-blue-600 mb-6">{profile?.firstName}</div>
      </div>
      {/* Nav Links - evenly spaced */}
      <div className="flex-1 w-full flex flex-col justify-evenly items-center gap-2">
        <Link href="/dashboard" className={linkClasses('/dashboard')}>
          Dashboard
        </Link>
        <Link href="/dashboard/Starter" className={linkClasses('/dashboard/Starter')}>
          Get Started
        </Link>
        <Link href="/dashboard/Properties" className={linkClasses('/dashboard/Properties')}>
          Properties
        </Link>
        <Link href="/dashboard/Finances" className={linkClasses('/dashboard/Finances')}>
          Finances
        </Link>
        <Link href="/dashboard/Grow" className={linkClasses('/dashboard/Grow')}>
          Grow
        </Link>
        <Link href="/dashboard/Settings" className={linkClasses('/dashboard/Settings')}>
          Settings
        </Link>
        <form action={signOut}>
          <button
            type="submit"
            className="w-full text-center py-3 rounded-xl text-red-600 hover:bg-red-100 transition"
          >
            Sign Out
          </button>
        </form>


      </div>

      {/* Optional Footer */}
      <div className="mt-6 text-sm text-gray-400">© 2025 Veedu</div>
    </div>
  );
};

export default Sidebar;
