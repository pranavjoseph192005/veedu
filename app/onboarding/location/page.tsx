'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function UserCity() {
  const router = useRouter()
  const [targetCity, setCity] = useState('')
  const [targetState, setState] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/userProfile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetCity, targetState }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Updated successfully:', data)

      router.push('/onboarding/living')
    } catch (error) {
      console.error('Error during PATCH:', error)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Where would you like to invest?
          </h1>
          <p className="text-base text-gray-500">
            Based on your location some features may not be available.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6">
          <div className="flex-1">
            <label
              htmlFor="city"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Enter your city
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              value={targetCity}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="state"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Enter your state
            </label>
            <input
              id="state"
              name="state"
              type="text"
              required
              value={targetState}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit" 
          className="w-full py-3 text-white font-medium bg-gray-700 rounded-xl hover:bg-gray-800 transition duration-200"
        >
          Continue
        </button>
      </form>
    </main>
  )
}
