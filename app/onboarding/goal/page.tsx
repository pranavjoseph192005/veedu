'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const OPTIONS = [
  { id: 'investor', label: 'I want to invest' },
  { id: 'manager', label: 'I already own property' },
  { id: 'both', label: 'Both' },
]

export default function OnboardingTable() {
  const [goal, setGoal] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    if (!goal) return alert('Please select an option.')
    console.log("The users goal is to" , goal)

    await fetch('/api/userProfile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal }),
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
    });


    router.push('/onboarding/budget')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <div
        className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in"
      >
        <div className="text-center space-y-2">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                What's your goal?
            </h1>
            <p className="text-base text-gray-500 mb-0">
                This helps us personalize your investing journey.
            </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setGoal(option.id)}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                goal === option.id
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