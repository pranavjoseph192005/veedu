'use client'

import React from 'react'
import Link from 'next/link'


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-8">Welcome</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          href="/auth/login"
          className="text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Log in
        </Link>
        <Link
          href="/auth/sign-up"
          className="text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Home
