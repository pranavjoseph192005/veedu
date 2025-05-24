'use client'

import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome</h1>

      <Link
        href="/dashboard"
        className="text-blue-600 hover:underline text-lg"
      >
        Go to Dashboard
      </Link>

      <Link
        href="/signin"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sign In
      </Link>

      <Link
        href="/signup"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Sign Up
      </Link>
    </div>
  )
}

export default Home
