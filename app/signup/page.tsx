'use client'

import React from 'react'

const SignIn = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form 
        action="api/auth"
        method="POST"
        className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-center">Sign Up</h1>

        <label className="block mb-2 text-sm font-medium text-gray-700">
            First Name:
            <input
            type="text"
            name="firstName"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
        </label>

        <label className="block mb-2 text-sm font-medium text-gray-700">
            Last Name:
            <input
            type="text"
            name="lastName"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
        </label>

        <label className="block mb-2 text-sm font-medium text-gray-700">
            Email:
            <input
            type="email"
            name="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
        </label>

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
            Password:
            <input
            type="password"
            name="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
        </label>

        <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
            Sign Up
        </button>
        </form>
    </div>
  )
}

export default SignIn
