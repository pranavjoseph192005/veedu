'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function IncomeSlider() {
  const router = useRouter()
  const [experience, setExperience] = useState('')

  const options = ['Never owned a rental', 'Own 1 rental', 'Own 2+ rentals', 'Manage rentals'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/onboarding/goal')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in"
      >
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
                    key={option}
                    type="button"
                    onClick={() => setExperience(option)}
                    className={`w-full px-4 py-3 rounded-lg border transition ${
                        experience === option
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                    }`}
                >
                    {option} 
                </button>
            ))}
        </div>

        {/* You can insert the slider or form fields here */}

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
