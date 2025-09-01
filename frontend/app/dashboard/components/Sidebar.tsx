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
    `group flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
      isActive(path)
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-[1.02]'
        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:shadow-md hover:transform hover:translate-x-1'
    }`;

  const iconClasses = (path: string) =>
    `w-5 h-5 transition-all duration-300 ${
      isActive(path) ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'
    }`;

  return (
    <div className="h-screen w-60 bg-white border-r border-gray-100 shadow-xl flex flex-col relative">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/20 pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="px-6 py-8 border-b border-gray-100 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Veedu</h1>
            <p className="text-sm text-gray-500">Property Manager</p>
          </div>
        </div>
        
        {/* User Info */}
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {profile?.firstName?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">
              {profile?.firstName || 'User'}
            </p>
            <p className="text-xs text-gray-500">Property Owner</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2 relative z-10">
        <Link href="/dashboard/Starter" className={linkClasses('/dashboard/Starter')}>
          <svg className={iconClasses('/dashboard/Starter')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span className="font-medium">Get Started</span>
          {isActive('/dashboard/Starter') && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
          )}
        </Link>

        <Link href="/dashboard" className={linkClasses('/dashboard')}>
          <svg className={iconClasses('/dashboard')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <span className="font-medium">Dashboard</span>
          {isActive('/dashboard') && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
          )}
        </Link>

        <Link href="/dashboard/Properties" className={linkClasses('/dashboard/Properties')}>
          <svg className={iconClasses('/dashboard/Properties')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
          <span className="font-medium">Properties</span>
          {isActive('/dashboard/Properties') && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
          )}
        </Link>

        <Link href="/dashboard/Finances" className={linkClasses('/dashboard/Finances')}>
          <svg className={iconClasses('/dashboard/Finances')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="font-medium">Finances</span>
          {isActive('/dashboard/Finances') && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
          )}
        </Link>

        <Link href="/dashboard/Grow" className={linkClasses('/dashboard/Grow')}>
          <svg className={iconClasses('/dashboard/Grow')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
          <span className="font-medium">Grow</span>
          {isActive('/dashboard/Grow') && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
          )}
        </Link>

        <Link href="/dashboard/Settings" className={linkClasses('/dashboard/Settings')}>
          <svg className={iconClasses('/dashboard/Settings')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="font-medium">Settings</span>
          {isActive('/dashboard/Settings') && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
          )}
        </Link>
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-6 border-t border-gray-100 space-y-4 relative z-10">
        <form action={signOut}>
          <button
            type="submit"
            className="group flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 hover:shadow-md"
          >
            <svg className="w-5 h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <span className="font-medium">Sign Out</span>
          </button>
        </form>
        
        <div className="text-center">
          <p className="text-xs text-gray-400">© 2025 Veedu</p>
          <p className="text-xs text-gray-300">Property Management</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;