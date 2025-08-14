'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

/*
const OPTIONS = [
  { id: 'investor', label: 'I want to invest' },
  { id: 'manager', label: 'I already own property' },
  { id: 'both', label: 'Both' },
]
*/

const options = [
    {id : '0', label: 'Never owned a rental'}, 
    {id: '1', label: 'Own 1 rental'}, 
    {id: '2', label: 'Own 2+ rentals'}, 
    {id: '3', label: 'Manage rentals'},
];

export default function IncomeSlider() {
  const router = useRouter()
  const [experience, setExperience] = useState('')

  const handleContinue = async () => {
    if (!experience) return alert('Please select an option.')
    console.log("The option is", experience)
    await fetch('/api/userProfile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ experience }),
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

    router.push('/onboarding/goal')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            What's your experience level?
          </h1>
          <p className="text-base text-gray-500 mb-0">
            This helps us personalize your investing journey.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <button 
              key={option.id}
              type="button"
              onClick={() => setExperience(option.id)}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                experience === option.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
              }`}
            >
              {option.label} 
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-3 text-white font-medium bg-gray-700 rounded-xl hover:bg-gray-800 transition duration-200"
        >
          Continue
        </button>
      </div>
    </main>
  )
}
