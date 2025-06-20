'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const OPTIONS = [
  { id: 'Living', label: 'Yes, this will be my primary living' },
  { id: 'Investment', label: 'No, this is an investment property' },
  { id: 'Neither', label: 'I\'m not sure yet' },
]

export default function OnboardingTable() {
  const [selectedId, setSelectedId] = useState('')
  const router = useRouter()

  const handleSubmit = () => {
    if (!selectedId) return alert('Please select an option.')
    console.log("The choice is ", selectedId)
    /*await fetch('/api/user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ choice: selectedId}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Updated successfully:', data);
    })
    .catch(error => {
        console.error('Error during PATCH:', error);
    });*/

    router.push('/onboarding/budget')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <div
        className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in"
      >
        <div className="text-center space-y-2">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                Would you like to live in this property?
            </h1>
            <p className="text-base text-gray-500 mb-0">
                This affects financing, investment options, and search filters
            </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedId(option.id)}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                selectedId === option.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
            }`}
            >
              {option.label}
            </button>
          ))}
        </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 text-white font-medium bg-gray-700 rounded-xl hover:bg-gray-800 transition duration-200"
      >
        Continue
      </button>
      </div>
    </main>
  )
}