'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PropertyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const res = await fetch('/api/house', {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      router.push('/dashboard/Properties/PropertiesDepth')
    } else {
      alert('Failed to add property')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add A Property</h1>
          <p className="text-sm text-gray-500 mt-1">
            Add a property you want us to manage.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="text-sm font-medium text-gray-700 block mb-1">
              Street
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="text-sm font-medium text-gray-700 block mb-1">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="state" className="text-sm font-medium text-gray-700 block mb-1">
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="zip" className="text-sm font-medium text-gray-700 block mb-1">
              ZIP Code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white font-semibold py-2.5 rounded-lg transition focus:ring-2 focus:outline-none ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Add Property'}
          </button>
        </div>
      </form>
    </main>
  )
}
